terraform {
  required_version = ">= 1.6.0"

  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.6"
    }
  }
}

provider "docker" {}

resource "docker_image" "demo_app" {
  name         = "${var.image_name}:${var.image_tag}"
  keep_locally = true

  build {
    context    = abspath("${path.module}/..")
    dockerfile = "Dockerfile"
  }
}
