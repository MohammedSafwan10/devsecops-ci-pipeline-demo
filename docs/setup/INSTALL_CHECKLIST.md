# Install Checklist

Use this checklist before running the project on a new laptop.

## Required for Local Run

| Tool | Why it is needed |
| --- | --- |
| Git | To clone or download the project |
| Node.js 24 LTS | To run the Express API and tests |
| npm | Comes with Node.js, installs packages |
| Docker Desktop | To build/run the container and use Docker Compose |

## Required for Full Local Security Demo

| Tool | Why it is needed |
| --- | --- |
| Trivy | Dependency, Docker image, and Terraform/IaC scanning |
| Semgrep | Static code security scanning |
| Terraform CLI | Terraform format, validate, and plan |
| SonarScanner CLI | Optional local SonarQube scan |

## Required for CI/CD Automation

| Account/Tool | Why it is needed |
| --- | --- |
| GitHub account | To host the repository and run GitHub Actions |
| SonarQube Cloud account | To run the code quality gate in CI |
| Docker Desktop | Needed locally; GitHub runners already have Docker |

## Quick Version Checks

Run these commands:

```powershell
git --version
node --version
npm --version
docker --version
docker compose version
trivy --version
semgrep --version
terraform version
sonar-scanner --version
```

If the app only needs to run locally, Node.js and Docker Desktop are enough. If the full security checks need to run locally, install all tools in the table.
