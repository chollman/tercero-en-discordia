const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    app.use(
        ["/api", "/auth/google"],
        createProxyMiddleware({
            target:
                process.env.NODE_ENV === "production"
                    ? "https://serene-tor-54135.herokuapp.com/"
                    : "http://localhost:5000",
            changeOrigin: true,
        })
    );
};
