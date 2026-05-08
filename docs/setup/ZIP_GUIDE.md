# Zip Guide

Use this when preparing the final zip for sharing.

## Before Zipping

Run:

```powershell
npm test
npm run lint
```

Optional full local check:

```powershell
.\scripts\verify-local.ps1
```

## Do Not Include These

- `.git`
- `node_modules`
- `coverage`
- `.env`
- `.terraform`
- `terraform.tfstate`
- `tfplan`

## PowerShell Zip Command

From the parent folder of this project:

```powershell
Compress-Archive -Path .\ci\* -DestinationPath .\devsecops-ci-pipeline-demo.zip -Force
```

This command does not include hidden `.git` by default, but still check the zip once after creating it.

## Safer Manual Method

1. Copy the project folder.
2. Delete `.git` if visible.
3. Delete `node_modules` if present.
4. Delete `coverage` if present.
5. Right-click the folder.
6. Select `Compress to ZIP file`.

## After Zipping

Open the zip and confirm these exist:

- `README.md`
- `docs/setup/START_HERE.md`
- `.github/workflows/devsecops.yml`
- `Dockerfile`
- `docker-compose.yml`
- `infra/main.tf`
- `src/app.js`
- `tests/app.test.js`

