const { createApp } = require("./app");

const app = createApp();
const port = Number(process.env.PORT || 3000);

const server = app.listen(port, () => {
  console.log(`DevSecOps demo API listening on port ${port}`);
  console.log(`Health: http://localhost:${port}/health`);
  console.log(`Status: http://localhost:${port}/api/status`);
});

function shutdown(signal) {
  console.log(`${signal} received, shutting down HTTP server`);
  server.close(() => {
    process.exit(0);
  });
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
