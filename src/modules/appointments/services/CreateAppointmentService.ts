import { startOfHour } from 'date-fns';
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';

interface IRequestDTO {
  provider_id: string;
  date: Date;
}

/**
 * Each service does only one thing. So the only method inside them is the
 * execute method
 */

/**
 * Service responsible for creating an appointments
 */
@injectable()
class CreateAppointmentService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute({
    date,
    provider_id,
  }: IRequestDTO): Promise<Appointment> {
    const appointmentDateAndTime = startOfHour(date);

    const findAppointmentInSameDate = await this.appointmentsRepository.findByDate(
      appointmentDateAndTime,
    );

    if (findAppointmentInSameDate) {
      throw new AppError('This appointment is already scheduled', 400);
    }

    const appointment = await this.appointmentsRepository.create({
      provider_id,
      date: appointmentDateAndTime,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
