# Project Submission Guide

This guide explains the project files, setup, and suggested demonstration flow.

## Project Title

```text
End-to-End DevSecOps CI/CD Pipeline with Automated Security Gates
```

## Project Summary

This project demonstrates a DevSecOps CI/CD pipeline for a Node.js Express application.

Whenever code is pushed to GitHub, the pipeline automatically runs tests, code quality checks, SAST, dependency vulnerability scanning, Docker image scanning, and Terraform/IaC scanning.

If any serious issue is found, the pipeline fails and blocks the build. The Docker image is published only after all checks pass.

## What to Submit

The project folder includes:

- Source code
- Test cases
- Dockerfile and Docker Compose files
- Terraform demo files
- GitHub Actions workflow
- SonarQube Cloud setup
- Screenshots of successful and failed pipeline runs
- Short explanation notes

## Recommended Screenshots

1. GitHub repository home page.
2. Successful GitHub Actions pipeline.
3. Failed security gate from the demo branch.
4. SonarQube Cloud quality gate.
5. Local API running at `/health`.
6. Docker container running locally.
7. Trivy or Semgrep failure log.
8. Terraform validation/IaC scan step.

## Demonstration Flow

Start with the successful pipeline.

Then show the failed security branch.

This gives a clear story:

```text
Clean code passes all gates and gets published.
Unsafe code fails the pipeline and is blocked.
```

## Short Explanation

```text
This project is a DevSecOps CI/CD pipeline. It uses GitHub Actions to automatically test and scan every code change. Semgrep checks source code security, Trivy checks dependencies, Docker images, and Terraform/IaC files, and SonarQube Cloud checks code quality. If any high-risk issue is detected, the build fails and the Docker image is not published.
```

## Local Demo Commands

```powershell
npm ci
npm test
npm run lint
docker compose up --build
```

Open:

```text
http://localhost:3000/health
http://localhost:3000/api/status
```

## CI/CD Demo

Open GitHub Actions and show the workflow named:

```text
DevSecOps CI/CD
```

The important point is that every check is automatic. No manual scanning is needed after code is pushed.
