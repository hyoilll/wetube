import express from "express";
import routers from "../routers";
import {
  users,
  user_detail,
  edit_profile,
  change_password,
} from "../controller/userController";

const userRouter = express.Router();

userRouter.get(routers.edit_profile, edit_profile);

userRouter.get(routers.change_password, change_password);

userRouter.get(routers.user_detail(), user_detail);

export default userRouter;

// /*
// {
// Model   data
// View    how does the data look
// Control function that looks for the data
// }*/
