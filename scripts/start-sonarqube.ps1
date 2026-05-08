$ErrorActionPreference = "Stop"

docker compose -f docker-compose.sonar.yml up -d

Write-Host "SonarQube Community Build is starting at http://localhost:9000"
Write-Host "Default credentials are usually admin/admin, then SonarQube asks you to set a new password."
