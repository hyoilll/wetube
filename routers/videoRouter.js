import express from "express";
import routers from "../routers";
import {
  videos,
  getUpload,
  postUpload,
  video_detail,
  edit_video,
  delete_video,
} from "../controller/videoController";
import { uploadVideo } from "../middleware";

const videoRouter = express.Router();

videoRouter.get(routers.upload, getUpload);
videoRouter.post(routers.upload, uploadVideo, postUpload);

videoRouter.get(routers.edit_video, edit_video);
videoRouter.get(routers.delete_video, delete_video);
videoRouter.get(routers.video_detail(), video_detail);

export default videoRouter;
