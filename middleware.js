import routes from "./routers";

//localsMiddleware를 이용하면 지역변수들을 템플릿(pug)에서도 사용할 수 있다. 전역변수화
export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
};
