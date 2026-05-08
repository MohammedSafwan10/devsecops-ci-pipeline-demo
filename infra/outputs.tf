output "planned_image" {
  description = "Docker image name that Terraform would build if apply were approved."
  value       = docker_image.demo_app.name
}
