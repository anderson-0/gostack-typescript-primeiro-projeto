import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';
import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

export default class AppointmentController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { provider_id, date } = req.body;

    /**
     * Data Transformation does not go into the service.
     * It says inside the route.
     */

    const parsedDateUTC = parseISO(date);

    const createAppointmentService = container.resolve(
      CreateAppointmentService,
    );

    const appointment = await createAppointmentService.execute({
      date: parsedDateUTC,
      provider_id,
    });

    return res.json(appointment);
  }
}
