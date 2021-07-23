import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserReceiverComplimentsController } from "./controllers/ListUserReceiverComplimentsController";
import { ListUsersController } from "./controllers/ListUsersController";
import { ListUserSenderComplimentsController } from "./controllers/ListUserSenderComplimentsController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticate } from "./middlewares/ensureAuthenticate";


const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSenderComplimentsController = new ListUserSenderComplimentsController()
const listUserReceiverComplimentsController = new ListUserReceiverComplimentsController()
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController()

router.get('/users/compliments/send', ensureAuthenticate,listUserSenderComplimentsController.handle)
router.get('/users/compliments/receive', ensureAuthenticate,listUserReceiverComplimentsController.handle)
router.get('/tags', listTagsController.handle)
router.get('/users',ensureAuthenticate , listUsersController.handle)

router.post("/users", createUserController.handle)
router.post("/tags", ensureAuthenticate ,ensureAdmin, createTagController.handle)
router.post("/login", authenticateUserController.handle)
router.post('/compliments',ensureAuthenticate ,createComplimentController.handle)



export { router }