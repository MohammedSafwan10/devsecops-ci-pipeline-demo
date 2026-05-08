# Explanation Notes

## What is this project?

This is a DevSecOps CI/CD pipeline project.

It uses an Express API as the application that is checked by the pipeline. The pipeline runs automatically when code is pushed to the configured branches or opened as a pull request.

## Why is the API not large?

The API is focused on the endpoints needed to test, scan, containerize, and publish the application.

The API endpoints make it easy to verify that the app is running and that the pipeline metadata is available.

## What is CI/CD?

CI means Continuous Integration.

It checks code automatically when developers push changes.

CD means Continuous Delivery or Deployment.

It prepares or publishes the application after checks pass.

In this project, the Docker image is published only when all gates pass.

## What is DevSecOps?

DevSecOps means adding security into the DevOps pipeline.

Security is not checked manually at the end. It is checked automatically during the configured push and pull request workflow.

## What are security gates?

Security gates are checks that can stop the build.

Examples in this project:

- Semgrep finds insecure source code.
- Trivy finds vulnerable dependencies.
- Trivy scans Docker images.
- Trivy scans Terraform/IaC misconfigurations.
- SonarQube checks quality gate.

If a gate fails, the pipeline fails.

## Why use Docker?

Docker packages the app with its runtime so it can run the same way on different systems.

It also lets us scan the final container image before publishing.

## Why use Terraform?

Terraform is used to show Infrastructure as Code validation.

This project does not create paid cloud resources. It demonstrates formatting, validation, planning, and IaC security scanning.

## Why use SonarQube Cloud?

GitHub-hosted runners cannot access a SonarQube server running on a laptop.

SonarQube Cloud is used so GitHub Actions can run the quality gate online.

## What happens if unsafe code is pushed?

The pipeline fails.

The build is blocked.

The Docker image is not published.

That is the main goal of the project.
