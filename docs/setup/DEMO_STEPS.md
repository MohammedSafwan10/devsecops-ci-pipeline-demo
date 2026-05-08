# Demo Steps

Use this flow during a project demo or viva.

## Green Pipeline Demo

1. Open the GitHub repository.
2. Click `Actions`.
3. Open the latest successful `DevSecOps CI/CD` run.
4. Show these jobs:
   - `Install, Lint, Test`
   - `SAST - Semgrep CE`
   - `Dependency CVE Scan - Trivy`
   - `Terraform Validate and IaC Scan`
   - `Container Image Scan - Trivy`
   - `Code Quality - SonarQube Cloud`
   - `Publish Image to GHCR`
5. Explain that publishing happens only after all checks pass.

## Local App Demo

Run:

```powershell
docker compose up --build
```

Open:

```text
http://localhost:3000/health
http://localhost:3000/api/status
```

Explain:

- `/health` shows the API is alive.
- `/api/status` lists the DevSecOps gates.

## Failed Security Demo

The project has a separate branch:

```text
demo/failing-security-gates
```

This branch has intentional bad examples. It is used only for screenshots and demo.

Open a pull request from that same repository branch to `main`.

Use a same-repository branch for the demo, not a forked pull request, because SonarQube Cloud needs the GitHub repository secret during the workflow.

Expected result:

- Some security jobs fail.
- The unsafe build is blocked.
- The Docker image is not published.

## Short Demo Script

Say this:

```text
This project shows a DevSecOps CI/CD pipeline. When code is pushed, GitHub Actions automatically runs testing, SAST, dependency scanning, Docker image scanning, Terraform/IaC scanning, and SonarQube quality checks. If any serious issue is found, the pipeline fails and blocks the build. Only clean code on the main branch is allowed to publish a Docker image to GHCR.
```
