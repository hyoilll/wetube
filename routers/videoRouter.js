import express from "express";
import routers from "../routers";
import {
  videos,
  upload,
  video_detail,
  edit_video,
  delete_video,
} from "../controller/videoController";

const videoRouter = express.Router();

videoRouter.get(routers.videos, videos);
videoRouter.get(routers.upload, upload);
videoRouter.get(routers.video_detail, video_detail);
videoRouter.get(routers.edit_video, edit_video);
videoRouter.get(routers.delete_video, delete_video);

export default videoRouter;
