# Stack Explained

This file explains what each tool does.

| Tool | Simple meaning | Why used here |
| --- | --- | --- |
| Node.js | JavaScript runtime | Runs the API |
| Express | Web API framework | Creates `/health` and `/api/status` endpoints |
| Jest | Testing framework | Runs unit/API tests |
| Supertest | API testing helper | Tests Express routes |
| ESLint | Code linting tool | Catches style and code mistakes |
| Docker | Container tool | Packages the app into an image |
| Docker Compose | Multi-container/local run tool | Runs app and optional local SonarQube |
| GitHub Actions | CI/CD automation | Runs checks automatically on push/PR |
| Semgrep | SAST tool | Finds insecure code patterns |
| Trivy filesystem scan | Dependency scanner | Finds vulnerable npm packages |
| Trivy image scan | Container scanner | Finds vulnerabilities in Docker image |
| Trivy config scan | IaC scanner | Finds Terraform/cloud misconfigurations |
| Terraform | Infrastructure as Code tool | Demonstrates IaC validation and planning |
| SonarQube Cloud | Code quality platform | Gives quality gate, coverage, maintainability checks |
| GHCR | GitHub Container Registry | Stores Docker image after all gates pass |

## Pipeline Flow

The project shows this DevSecOps flow:

1. Developer pushes code.
2. CI pipeline starts automatically.
3. App is tested.
4. Code is scanned for security issues.
5. Dependencies are scanned for CVEs.
6. Terraform files are checked.
7. Docker image is built and scanned.
8. SonarQube checks code quality.
9. If everything passes, the image is published.
10. If anything fails, the build is blocked.
