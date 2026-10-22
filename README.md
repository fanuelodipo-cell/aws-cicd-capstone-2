# AWS CI/CD Capstone Project

## Project Overview

This project implements an end-to-end Continuous Integration and Continuous Deployment (CI/CD) pipeline on AWS for a containerized Node.js web application. The pipeline automates source retrieval, testing, Docker image building, image storage, and controlled deployment to Amazon ECS using blue/green deployments.

## Application Features

- Web homepage served by Node.js and Express.
- Health-check endpoint at `/health`.
- Automated tests using Node.js Test Runner and Supertest.
- Docker containerization.
- Automated build and deployment through AWS services.

## Technologies

- Node.js and Express
- Supertest
- Docker
- Git and GitHub
- Amazon ECR
- Amazon ECS with AWS Fargate
- AWS CodeBuild
- AWS CodePipeline
- AWS CodeDeploy
- Application Load Balancer (ALB)
- Amazon CloudWatch
- Amazon SNS

## Repository Structure

- `app.js` — application source code.
- `app.test.js` — automated application tests.
- `package.json` and `package-lock.json` — dependencies and scripts.
- `Dockerfile` — container image configuration.
- `buildspec.yml` — CodeBuild build and image publishing instructions.
- `taskdef.json` — ECS task definition template.
- `appspec.yml` — CodeDeploy ECS deployment configuration.
- `pipeline-diagram.png` — CI/CD architecture diagram.
- `README.md` — project documentation.

## Run Locally

Install dependencies:

```bash
npm ci
```

Run automated tests:

```bash
npm test
```

Start the application:

```bash
npm start
```

Open `http://localhost:3000` in your browser.

Health check: `http://localhost:3000/health`

## Run with Docker

Build the image:

```bash
docker build -t aws-cicd-capstone-2:latest .
```

Run the container:

```bash
docker run -d --name aws-cicd-capstone-2 -p 3000:3000 aws-cicd-capstone-2:latest
```

## AWS CI/CD Architecture

1. **Source:** AWS CodePipeline retrieves application changes from the GitHub repository.
2. **Build and Test:** AWS CodeBuild runs the build process and automated tests, builds the Docker image, and pushes it to Amazon ECR.
3. **Approval:** A manual approval stage controls whether the release proceeds to deployment.
4. **Deployment:** AWS CodeDeploy manages blue/green deployments to Amazon ECS on AWS Fargate.
5. **Traffic Management:** An Application Load Balancer routes HTTP traffic to the application.
6. **Monitoring:** Amazon CloudWatch monitors ECS running-task counts. An alarm publishes notifications through Amazon SNS when the configured threshold is breached.

## AWS Resources

- **Region:** Europe (London), `eu-west-2`
- **CodePipeline:** `aws-cicd-capstone-2-pipeline`
- **CodeBuild:** `aws-cicd-capstone-2-build`
- **ECR repository:** `myapp-repo`
- **ECS cluster:** `aws-cicd-capstone-2-cluster`
- **ECS service:** `aws-cicd-capstone-2-service`
- **CodeDeploy application:** `aws-cicd-capstone-2-app`
- **CodeDeploy deployment group:** `aws-cicd-capstone-2-dg`
- **CloudWatch alarm:** `aws-cicd-capstone-2-ecs-running-tasks-low`
- **SNS topic:** `aws-cicd-capstone-2-alerts`

## Project Status

The Node.js application and automated tests have been verified. The Docker image is stored in Amazon ECR. The CodePipeline stages have completed successfully, and a CodeDeploy blue/green deployment has succeeded. The ECS service is running, the CloudWatch alarm is currently in the OK state, and the SNS email subscription has been confirmed.

## Future Improvements

- Add a dedicated CodeDeploy test listener if required by the deployment design.
- Expand monitoring with additional application and deployment metrics.
- Review deployment rollback settings and document recovery procedures.
