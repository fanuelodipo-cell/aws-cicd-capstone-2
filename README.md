# AWS CI/CD Capstone Project

## Project Overview

This project implements a Continuous Integration and Continuous Deployment (CI/CD) pipeline on AWS for a containerized Node.js web application.

## Application Features

- Web homepage served by Node.js and Express.
- Health-check endpoint at /health.
- Automated tests using Node.js Test Runner and Supertest.
- Docker containerization.

## Technologies

- Node.js
- Express.js
- Supertest
- Docker
- Git and GitHub
- Amazon ECR
- Amazon ECS with AWS Fargate
- AWS CodeBuild
- AWS CodePipeline
- AWS CodeDeploy
- Amazon CloudWatch
- Amazon SNS

## Run Locally

Install dependencies:

    npm ci

Run the tests:

    npm test

Start the application:

    npm start

Open http://localhost:3000 in your browser.

Health check: http://localhost:3000/health

## Run with Docker

Build the image:

    docker build -t aws-cicd-capstone-2:latest .

Run the container:

    docker run -d --name aws-cicd-capstone-2 -p 3000:3000 aws-cicd-capstone-2:latest

## Planned AWS Deployment

The target architecture includes Amazon ECR for container image storage, Amazon ECS Fargate behind an Application Load Balancer, CodePipeline for automation, CodeBuild for testing and building, and CodeDeploy for blue/green deployments.

CloudWatch alarms, SNS notifications, and a manual approval stage will support monitoring and controlled releases.

## Project Status

The Node.js application, automated tests, Docker image, local container, and initial GitHub repository have been verified. AWS deployment and CI/CD pipeline configuration are pending.
