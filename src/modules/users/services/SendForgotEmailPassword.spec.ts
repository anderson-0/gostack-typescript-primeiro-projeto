import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import SendForgotEmailPasswordService from '@modules/users/services/SendForgotEmailPassword';
import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider';
import AppError from '@shared/errors/AppError';

let fakeUsersRepository: FakeUsersRepository;
let fakeMailProvider: FakeMailProvider;
let sendForgotEmailPasswordService: SendForgotEmailPasswordService;

describe('Send Forgot Password Email', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeMailProvider = new FakeMailProvider();
    sendForgotEmailPasswordService = new SendForgotEmailPasswordService(
      fakeUsersRepository,
      fakeMailProvider,
    );
  });

  it('should be able to recover the password using the email', async () => {
    const sendEmailSpy = jest.spyOn(fakeMailProvider, 'sendMail');
    fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    await sendForgotEmailPasswordService.execute({
      email: 'johndoe@example.com',
    });

    expect(sendEmailSpy).toHaveBeenCalled();
  });

  it('should not be able to recover the password of a non-existing user', async () => {
    // await sendForgotEmailPasswordService.execute({
    //   email: 'johndoe@example.com',
    // });

    await expect(
      sendForgotEmailPasswordService.execute({
        email: 'johndoe@example.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
