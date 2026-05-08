# Client Handoff Notes

These are the files and instructions to share with the student/client.

## What to Share

Share the project as a zip file without the `.git` folder.

The zip should contain:

- source code
- tests
- Dockerfile
- Docker Compose files
- Terraform files
- GitHub Actions workflow
- docs
- scripts
- README

Do not include:

- `.git`
- `node_modules`
- `coverage`
- `.env`
- Terraform state files

These are already handled by `.gitignore`, but check the zip once before sending.

## What the Client Needs to Install

For basic local run:

- Node.js 24 LTS
- Docker Desktop
- Git, optional if using zip

For full local security demo:

- Trivy
- Semgrep
- Terraform CLI
- SonarScanner CLI, optional

For full GitHub CI/CD:

- GitHub account
- SonarQube Cloud account
- Public GitHub repository
- `SONAR_TOKEN` secret in GitHub
- `SONAR_ORGANIZATION` and `SONAR_PROJECT_KEY` variables in GitHub

## Simple Message to Send with Zip

```text
Hi, I have attached the DevSecOps CI/CD pipeline project. Please extract the zip and read docs/setup/START_HERE.md first.

For local run, install Node.js 24 LTS and Docker Desktop, then run:

npm ci
npm test
docker compose up --build

For GitHub Actions and SonarQube Cloud setup, follow docs/setup/GITHUB_AND_SONAR_SETUP.md.

The project includes a clean passing pipeline and a failing demo branch idea to show how unsafe builds are blocked.
```

## How to Present It

Tell them to present it as:

```text
An end-to-end DevSecOps CI/CD pipeline that automatically tests, scans, validates, and blocks unsafe builds before Docker image publishing.
```

