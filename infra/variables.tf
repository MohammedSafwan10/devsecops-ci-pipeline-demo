variable "image_name" {
  description = "Local Docker image name used by the Terraform demo plan."
  type        = string
  default     = "devsecops-ci-pipeline-demo"
}

variable "image_tag" {
  description = "Local Docker image tag used by the Terraform demo plan."
  type        = string
  default     = "terraform-plan"
}
