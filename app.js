
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>AWS CI/CD Capstone</title>
      </head>
      <body>
        <h1>AWS CI/CD Capstone Project</h1>
        <p>Application deployed with an automated CI/CD pipeline.</p>
        <p>Technologies: Node.js, Docker, Amazon ECR, Amazon ECS Fargate, CodePipeline and CodeDeploy.</p>
        <p>Status: Application is running.</p>s
      </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    application: "aws-cicd-capstone-2"
  });
});

if (require.main === module) {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Application listening on port ${PORT}`);
  });
}

module.exports = app;


