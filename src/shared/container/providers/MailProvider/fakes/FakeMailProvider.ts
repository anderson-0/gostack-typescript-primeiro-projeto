import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
import IMessageDTO from '@shared/container/providers/MailProvider/dtos/IMessageDTO';

export default class FakeMailProvider implements IMailProvider {
  private messages: IMessageDTO[] = [];

  public async sendMail({ to, body }: IMessageDTO): Promise<void> {
    this.messages.push({ to, body });
  }
}
