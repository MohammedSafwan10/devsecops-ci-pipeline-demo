const request = require("supertest");
const { SECURITY_GATES, createApp } = require("../src/app");

describe("DevSecOps demo API", () => {
  const app = createApp();

  test("GET /health returns service health", async () => {
    const response = await request(app).get("/health").expect(200);

    expect(response.body).toMatchObject({
      status: "ok",
      service: "devsecops-ci-pipeline-demo",
      version: "1.0.0"
    });
    expect(typeof response.body.uptimeSeconds).toBe("number");
    expect(response.body.timestamp).toBeDefined();
  });

  test("GET /api/status describes pipeline gates", async () => {
    const response = await request(app).get("/api/status").expect(200);

    expect(response.body.project).toBe("DevSecOps CI/CD Pipeline Demo");
    expect(response.body.gates).toEqual(SECURITY_GATES);
    expect(response.body.gates).toHaveLength(5);
  });

  test("unknown routes return a structured 404", async () => {
    const response = await request(app).get("/missing").expect(404);

    expect(response.body.error).toBe("Not found");
  });

  test("malformed JSON returns a structured 400", async () => {
    const response = await request(app)
      .post("/api/status")
      .set("Content-Type", "application/json")
      .send("{bad-json")
      .expect(400);

    expect(response.body.error).toBe("Invalid request payload");
  });
});
