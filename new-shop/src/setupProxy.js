/*로컬 환경에서 http://localhost:3000/api로 시작되는 요청을
라이브러리가 http://localhost:5000/api 로 프록싱 해주게 된다.
따라서 브라우저는 클라이언트와 서버의 출처가 다르지만 
같은 것으로 받아들이게 되어 CORS 문제를 일으키지 않는다. */
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};
