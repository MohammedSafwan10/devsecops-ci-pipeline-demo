$ErrorActionPreference = "Stop"

Write-Host "Installing dependencies"
npm ci

Write-Host "Running lint"
npm run lint

Write-Host "Running unit tests"
npm test

Write-Host "Building Docker image"
docker build -t devsecops-ci-pipeline-demo:local .

Write-Host "Scanning filesystem with Trivy"
trivy fs --config trivy.yaml --no-progress .

Write-Host "Scanning Docker image with Trivy"
trivy image --ignore-unfixed --severity HIGH,CRITICAL --exit-code 1 --no-progress devsecops-ci-pipeline-demo:local

Write-Host "Checking Terraform"
terraform -chdir=infra fmt -check -recursive
terraform -chdir=infra init -backend=false
terraform -chdir=infra validate
Remove-Item -LiteralPath "infra\tfplan" -Force -ErrorAction SilentlyContinue
trivy config --severity HIGH,CRITICAL --exit-code 1 infra/
terraform -chdir=infra plan -no-color -out=tfplan
Remove-Item -LiteralPath "infra\tfplan" -Force -ErrorAction SilentlyContinue

Write-Host "Local verification complete"
