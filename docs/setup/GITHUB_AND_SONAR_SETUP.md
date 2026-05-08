# GitHub and SonarQube Cloud Setup

This part is needed only when the project is uploaded to GitHub and the CI/CD pipeline must run.

## 1. Create a GitHub Repository

Create a public GitHub repository.

Public is recommended because GitHub Actions and GitHub Container Registry are easier to use for a student project.

Upload the project files to the repository.

## 2. Create SonarQube Cloud Project

1. Go to SonarQube Cloud.
2. Sign in with GitHub.
3. Create or select the organization.
4. Import the GitHub repository.
5. Keep the free plan.

## 3. Create Sonar Token

1. Go to SonarQube Cloud.
2. Open profile or avatar.
3. Open `My Account`.
4. Open `Security`.
5. Under `Generate Tokens`, enter a token name.
6. Click `Generate Token`.
7. Copy the token immediately.

Do not share this token in chat, screenshots, or project files.

## 4. Add GitHub Secret

In GitHub repository:

`Settings` > `Secrets and variables` > `Actions` > `Secrets`

Add:

```text
SONAR_TOKEN=<copied Sonar token>
```

## 5. Add GitHub Variables

In GitHub repository:

`Settings` > `Secrets and variables` > `Actions` > `Variables`

Add:

```text
SONAR_ORGANIZATION=mohammedsafwan10
SONAR_PROJECT_KEY=mohammedsafwan10_devsecops-ci-pipeline-demo
```

If the repository belongs to a different user or organization, these values must match that SonarQube Cloud project.

## 6. Run Pipeline

Push code to GitHub or open the `Actions` tab and run:

```text
DevSecOps CI/CD
```

Expected result on clean code:

- tests pass
- Semgrep passes
- Trivy dependency scan passes
- Terraform/IaC scan passes
- Docker image scan passes
- SonarQube quality gate passes
- image publishes to GHCR on push to `main`

## Note About Main Branch

In this submitted project, SonarQube Cloud was using `master` internally while GitHub used `main`. A small compatibility setup is included in the workflow so the CI/CD pipeline works correctly.

