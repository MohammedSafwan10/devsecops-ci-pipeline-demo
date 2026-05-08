# Start Here

This project is a DevSecOps CI/CD pipeline.

The Node.js API is the application checked by the pipeline. Whenever code is pushed to the configured GitHub branches or opened as a pull request, the pipeline checks code quality, security issues, dependency vulnerabilities, Docker image vulnerabilities, and Terraform/IaC mistakes. If a serious issue is found, the build fails and the Docker image is not published.

## What to Show First

1. Open the GitHub repository.
2. Open the `Actions` tab.
3. Show the latest successful `DevSecOps CI/CD` run.
4. Explain that every green tick is one automated gate.
5. Open the failed pull request or failing branch run.
6. Explain that unsafe code is blocked before publishing.

## Main Folders

| Path | What it contains |
| --- | --- |
| `src/` | Express API source code |
| `tests/` | API tests |
| `infra/` | Terraform files |
| `.github/workflows/` | GitHub Actions CI/CD pipeline |
| `docs/` | Explanation and screenshot notes |
| `scripts/` | Helpful local verification scripts |

## Main Commands

```powershell
npm ci
npm test
npm run lint
docker compose up --build
.\scripts\verify-local.ps1
```

## Important Note

The project can run locally without GitHub Actions, but the full CI/CD automation needs a GitHub repository and a SonarQube Cloud token.
