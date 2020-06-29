export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const search = (req, res) =>
  res.render("search", { pageTitle: "Search" });
export const videos = (req, res) =>
  res.render("videos", { pageTitle: "Videos" });
export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const video_detail = (req, res) =>
  res.render("video_detail", { pageTitle: "Video_detail" });
export const edit_video = (req, res) =>
  res.render("edit_video", { pageTitle: "Edit_video" });
export const delete_video = (req, res) =>
  res.render("delete_video", { pageTitle: "Delete_video" });
