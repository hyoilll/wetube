import { videos_db } from "../db";
import routes from "../routers";

export const home = (req, res) =>
  res.render("home", { pageTitle: "Home", videos: videos_db });

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req; //req.query.term
  res.render("search", {
    pageTitle: "Search",
    searchingBy: searchingBy,
    videos: videos_db,
  });
};

export const videos = (req, res) =>
  res.render("videos", { pageTitle: "Videos" });

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const postUpload = (req, res) => {
  const {
    body: { file, title, description },
  } = req;
  // To Do: Upload and save video
  res.redirect(routes.video_detail(324393));
};

export const video_detail = (req, res) =>
  res.render("video_detail", { pageTitle: "Video_detail" });
export const edit_video = (req, res) =>
  res.render("edit_video", { pageTitle: "Edit_video" });
export const delete_video = (req, res) =>
  res.render("delete_video", { pageTitle: "Delete_video" });
