const app = require("../backend/src/server");

// Ensure Express sees the /api prefix regardless of how Vercel forwards the path
module.exports = (req, res) => {
  try {
    if (typeof req.url === "string" && !req.url.startsWith("/api")) {
      req.url = `/api${req.url}`;
    }
    return app(req, res);
  } catch (err) {
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
};
