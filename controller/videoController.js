import routes from "../routers";
import Video from "../models/Video";

//async 비동기
//async/await - 해당 await구문이 끝나면 다음 문장 진행
//await문이 성공하든 실패하든 상관안함, 그냥 기다릴 뿐 (error가 생겨도 다음 문장 진행)
//그래서 error를 방지하고자 try/catch를 사용
export const home = async (req, res) => {
  //await - 다음 과정이 끝날 때까지 기다림
  //find({}) - 모든 db를 가져옴
  try {
    const videos_db = await Video.find({});
    res.render("home", { pageTitle: "Home", videos: videos_db });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

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
export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title: title,
    description: description,
  });
  console.log(newVideo);
  res.redirect(routes.video_detail(newVideo.id));
};

export const video_detail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    console.log(video);
    res.render("video_detail", { pageTitle: "Video_detail", video: video });
  } catch (error) {
    res.redirect(routes.home);
  }
};
export const edit_video = (req, res) =>
  res.render("edit_video", { pageTitle: "Edit_video" });
export const delete_video = (req, res) =>
  res.render("delete_video", { pageTitle: "Delete_video" });
