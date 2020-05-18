import IMessageDTO from '@shared/container/providers/MailProvider/dtos/IMessageDTO';

export default interface IMailProvider {
  sendMail({ to, body }: IMessageDTO): Promise<void>;
}
