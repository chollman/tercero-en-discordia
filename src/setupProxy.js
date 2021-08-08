const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    app.use(
        ["/api", "/auth/google"],
        createProxyMiddleware({
            target: process.env.API_URL || "http://localhost:5000",
            changeOrigin: true,
        })
    );
};
