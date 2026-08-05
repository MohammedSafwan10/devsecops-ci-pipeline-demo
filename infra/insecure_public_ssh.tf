resource "aws_security_group" "demo_public_ssh" {
  name        = "demo-public-ssh"
  description = "Intentionally unsafe resource for the failing demo branch."

  ingress {
    description = "Unsafe SSH access from the public internet."
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
