# Run Locally

This guide runs the project on a laptop without GitHub Actions.

## 1. Install Packages

Open PowerShell inside the project folder:

```powershell
npm ci
```

## 2. Run Tests

```powershell
npm test
```

Expected result: all tests pass and coverage is shown.

## 3. Run Lint

```powershell
npm run lint
```

Expected result: no lint errors.

## 4. Start the API

```powershell
npm start
```

Open these URLs:

```text
http://localhost:3000/health
http://localhost:3000/api/status
```

`/health` proves the API is running.

`/api/status` shows the security gates used in the project.

Stop the local API before starting Docker in the next step:

```powershell
Ctrl + C
```

## 5. Run with Docker

```powershell
docker compose up --build
```

Then open:

```text
http://localhost:3000/health
```

Stop it with:

```powershell
Ctrl + C
```

## 6. Run Local Security Checks

The easiest way:

```powershell
.\scripts\verify-local.ps1
```

This runs the main local checks one by one.

Manual commands:

```powershell
semgrep scan --config auto --error .
trivy fs --config trivy.yaml --no-progress .
docker build -t devsecops-ci-pipeline-demo:local .
trivy image --ignore-unfixed --severity HIGH,CRITICAL --exit-code 1 --no-progress devsecops-ci-pipeline-demo:local
terraform -chdir=infra fmt -check -recursive
terraform -chdir=infra init -backend=false
terraform -chdir=infra validate
Remove-Item -LiteralPath "infra\tfplan" -Force -ErrorAction SilentlyContinue
trivy config --severity HIGH,CRITICAL --exit-code 1 infra/
terraform -chdir=infra plan -no-color -out=tfplan
Remove-Item -LiteralPath "infra\tfplan" -Force -ErrorAction SilentlyContinue
```

If any command fails, the same type of issue would block the CI/CD pipeline.
