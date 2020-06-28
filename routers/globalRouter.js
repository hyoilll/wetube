import express from "express";
import routers from "../routers";
import { home, search } from "../controller/videoController";
import { join, login, logout } from "../controller/userController";

const globalRouter = express.Router();

globalRouter.get(routers.home, home);
globalRouter.get(routers.join, join);
globalRouter.get(routers.login, login);
globalRouter.get(routers.logout, logout);
globalRouter.get(routers.search, search);

export default globalRouter;