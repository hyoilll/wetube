import routes from "../routers";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
}; //두 번째 인자로 해당 템플릿에 정보 전달

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 },
  } = req; //req.body.name
  if (password !== password2) {
    res.status(400); //error code
    res.render("join", { pageTitle: "Join" });
  } else {
    //To Do: Register User
    //TO DO: Log user in
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  // To Do: Process Log Out
  res.redirect(routes.home);
};

export const users = (req, res) => res.render("users", { pageTitle: "Users" });
export const user_detail = (req, res) =>
  res.render("user_detail", { pageTitle: "User_detail" });
export const edit_profile = (req, res) =>
  res.render("edit_profile", { pageTitle: "Edit_profile" });
export const change_password = (req, res) =>
  res.render("change_password", { pageTitle: "Change_password" });
