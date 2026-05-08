# Screenshot Checklist

Useful screenshots to capture:

1. GitHub repository home page.
2. Successful GitHub Actions run on `main`.
3. Failed GitHub Actions run from `demo/failing-security-gates`.
4. Semgrep failure log showing source-code issue.
5. Trivy filesystem or image failure log showing HIGH/CRITICAL gate.
6. Terraform validate or Trivy IaC scan step.
7. SonarQube Cloud project dashboard with quality gate.
8. Local API response from `/health`.
9. Docker Desktop showing the running app container.
10. Optional local SonarQube Community Build dashboard at `localhost:9000`.

Recommended flow: show the successful pipeline first, then show the unsafe branch being blocked.
