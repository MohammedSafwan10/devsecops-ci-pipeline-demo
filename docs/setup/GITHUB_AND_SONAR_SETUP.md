# GitHub and SonarQube Cloud Setup

This part is needed only when the project is uploaded to GitHub and the CI/CD pipeline must run.

## 1. Create a GitHub Repository

Create a public GitHub repository.

Public is recommended because GitHub Actions and GitHub Container Registry are easier to use without paid settings.

If the project was received as a zip, extract it first. Then open PowerShell inside the extracted folder and push it to the new repository:

```powershell
git init
git add .
git commit -m "Initial DevSecOps CI/CD project"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

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
SONAR_ORGANIZATION=<your SonarQube Cloud organization key>
SONAR_PROJECT_KEY=<your SonarQube Cloud project key>
```

These values must match the SonarQube Cloud project that was created from the GitHub repository.

Optional:

```text
SONAR_BRANCH_NAME=<branch name used as the main branch in SonarQube Cloud>
```

Most new GitHub repositories use `main`, so this optional variable is usually not needed. Add it only if SonarQube Cloud shows a different main branch name.

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

For most new repositories, GitHub and SonarQube Cloud will both use `main`. If SonarQube Cloud shows a different branch name, add the optional `SONAR_BRANCH_NAME` GitHub Actions variable so the scan points to the correct branch.
