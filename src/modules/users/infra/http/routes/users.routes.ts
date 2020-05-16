import { Router } from 'express';
import multer from 'multer';

import UserAvatarControllers from '@modules/users/infra/http/controllers/UserAvatarController';

import UsersControllers from '@modules/users/infra/http/controllers/UsersController';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import uploadConfig from '@config/upload';

const usersRouter = Router();
const upload = multer(uploadConfig);
const usersController = new UsersControllers();
const userAvatarController = new UserAvatarControllers();

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarController.update,
);

usersRouter.post('/', usersController.create);

export default usersRouter;
