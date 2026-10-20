const { test } = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");
const app = require("./app");

test("GET / returns the application homepage", async () => {
  const response = await request(app).get("/");

  assert.equal(response.status, 200);
  assert.match(response.text, /AWS CI\/CD Capstone Project/);
});

test("GET /health returns healthy status", async () => {
  const response = await request(app).get("/health");

  assert.equal(response.status, 200);
  assert.equal(response.body.status, "healthy");
  assert.equal(response.body.application, "aws-cicd-capstone-2");
});