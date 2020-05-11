import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface RequestDTO {
  provider: string;
  date: Date;
}

/**
 * Each service does only one thing. So the only method inside them is the
 * execute method
 */

/**
 * Service responsible for creating an appointments
 */
class CreateAppointmentService {
  public async execute({ date, provider }: RequestDTO): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);

    const appointmentDateAndTime = startOfHour(date);

    const findAppointmentInSameDate = await appointmentsRepository.findByDate(
      appointmentDateAndTime,
    );

    if (findAppointmentInSameDate) {
      throw Error('This appointment is already scheduled');
    }

    const appointment = appointmentsRepository.create({
      provider,
      date: appointmentDateAndTime,
    });

    await appointmentsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
