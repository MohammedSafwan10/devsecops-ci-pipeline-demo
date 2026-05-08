# Tooling Reference

| Tool | Purpose | Gate Result |
| --- | --- | --- |
| GitHub Actions | Runs CI/CD on push and pull request | Orchestrates all gates |
| Docker | Builds and runs the API container | Required for image scan and publish |
| Docker Compose | Runs the app and optional SonarQube locally | Local run support |
| Semgrep CE | Static Application Security Testing | Fails on SAST findings |
| Trivy filesystem | Dependency and repository CVE scan | Fails on HIGH/CRITICAL |
| Trivy config | Terraform/IaC misconfiguration scan | Fails on HIGH/CRITICAL |
| Trivy image | Container image vulnerability scan | Fails on HIGH/CRITICAL |
| Terraform CLI | Formats, validates, and plans IaC | Fails on invalid IaC |
| SonarQube Cloud | Code quality and coverage analysis | Fails when quality gate is red |
| GHCR | Public container image registry | Publishes only after gates pass |

## Why SonarQube Cloud and Local SonarQube Both Exist

GitHub-hosted runners cannot access a SonarQube server running on a laptop. SonarQube Cloud solves that for CI quality gates on public repositories. The local SonarQube Community Build container is included for optional local dashboard checks.

## Why Actions Are Pinned

GitHub recommends pinning third-party actions to full commit SHAs for immutable references. This project follows that practice in the workflow and uses pinned scanner/container versions where practical.
