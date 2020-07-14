import express from "express";
import routers from "../routers";
import {
  getUpload,
  postUpload,
  video_detail,
  getEdit_video,
  delete_video,
  postEditVideo,
} from "../controller/videoController";
import { uploadVideo } from "../middleware";

const videoRouter = express.Router();

// Upload
videoRouter.get(routers.upload, getUpload);
videoRouter.post(routers.upload, uploadVideo, postUpload);

//Edit Video
videoRouter.get(routers.edit_video(), getEdit_video);
videoRouter.post(routers.edit_video(), postEditVideo);

//Delete Video
videoRouter.get(routers.delete_video(), delete_video);

// Video Detail
videoRouter.get(routers.video_detail(), video_detail);

export default videoRouter;
