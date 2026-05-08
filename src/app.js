const express = require("express");
const helmet = require("helmet");
const packageInfo = require("../package.json");

const SECURITY_GATES = [
  "SAST with Semgrep Community Edition",
  "Code quality with SonarQube Cloud",
  "Dependency CVE scanning with Trivy filesystem scan",
  "Container image vulnerability scanning with Trivy image scan",
  "Terraform/IaC misconfiguration scanning with Trivy config scan"
];

function createApp() {
  const app = express(); // nosemgrep: javascript.express.security.audit.express-check-csurf-middleware-usage.express-check-csurf-middleware-usage - read-only JSON API with no cookie/session auth or state-changing routes.
  const startedAt = new Date().toISOString();

  app.disable("x-powered-by");
  app.use(helmet());
  app.use(express.json({ limit: "16kb" }));

  app.get("/health", (_req, res) => {
    res.status(200).json({
      status: "ok",
      service: packageInfo.name,
      version: packageInfo.version,
      uptimeSeconds: Math.round(process.uptime()),
      timestamp: new Date().toISOString()
    });
  });

  app.get("/api/status", (_req, res) => {
    res.status(200).json({
      project: "DevSecOps CI/CD Pipeline Demo",
      environment: process.env.NODE_ENV || "development",
      repository: process.env.GITHUB_REPOSITORY || "local",
      commit: process.env.GITHUB_SHA || "local",
      startedAt,
      gates: SECURITY_GATES
    });
  });

  app.use((_req, res) => {
    res.status(404).json({
      error: "Not found",
      message: "Use GET /health or GET /api/status."
    });
  });

  app.use((err, _req, res, _next) => {
    const statusCode = err.statusCode && err.statusCode < 500 ? err.statusCode : 500;
    const message = statusCode < 500 ? "Invalid request payload" : "Internal server error";

    res.status(statusCode).json({
      error: message
    });
  });

  return app;
}

module.exports = {
  SECURITY_GATES,
  createApp
};
