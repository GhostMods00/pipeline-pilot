# CI/CD Pipeline Implementation with GitHub Actions 🚀

[![CI Status](https://github.com/GhostMods00/pipeline-pilot/actions/workflows/test.yml/badge.svg)](https://github.com/GhostMods00/pipeline-pilot/actions)
[![Deployment Status](https://github.com/GhostMods00/pipeline-pilot/actions/workflows/deploy.yml/badge.svg)](https://github.com/GhostMods00/pipeline-pilot/actions)

### Deploy Action
![Deploy Screenshot](https://i.imgur.com/N6Fq7iD.png)
### Cypress Test Action
![Cypress-Test Screenshot](https://i.imgur.com/IaH9DxC.png)



## 📚 Project Overview

A demonstration of implementing a robust CI/CD pipeline using GitHub Actions for a full-stack TypeScript application. The pipeline automates testing and deployment processes for a Quiz application built with React, Express, and MongoDB.

### 🎯 CI/CD Features

- **Automated Testing** on Pull Requests to `develop` branch
- **Automated Deployment** to Render when merging to `main` branch
- **Branch Protection Rules** to ensure code quality
- **Artifact Storage** for test results
- **MongoDB Integration** testing in pipeline

## 🔄 Pipeline Workflow

### On Pull Request to `develop`:
```yaml
name: Cypress Component Tests

on:
  pull_request:
    branches:
      - develop

jobs:
  test:
    runs-on: ubuntu-latest
    services:
      mongodb:
        image: mongo:6
        ports:
          - 27017:27017
```
### On Push Request to `main`:
```yaml
name: Deploy to Render

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
```
# CI/CD Pipeline Documentation

## 🛠️ Technology Stack

### Version Control & CI/CD
- GitHub
- GitHub Actions
- Render (Deployment Platform)

### Testing Framework
- Cypress
- Component Testing

### Application Stack
- React
- Express.js
- MongoDB
- TypeScript

## 📊 Pipeline Stages

### 1. Testing Stage
The testing phase ensures code quality and functionality:
- Checkout repository
- Setup Node.js environment
- Install dependencies
- Start MongoDB service
- Build server and client
- Run Cypress component tests
- Upload test artifacts

### 2. 🚀 Deployment Stage
The deployment phase manages the release process:
- Verify build process
- Deploy to Render via webhook
- Verify deployment status

### `develop` Branch
- Requires pull request before merging
- Requires status checks to pass
- Required Cypress component tests to pass

### `main` Branch
- Protected from direct pushes
- Requires pull request from `develop`
- Triggers automatic deployment to Render

## 🚀 Getting Started

### Prerequisites
- GitHub account
- Render account
- MongoDB Atlas cluster

### Setting Up CI/CD

#### 1. :octocat: GitHub Repository Setup
1. Create a new repository on GitHub
2. Navigate to Settings > Branches
3. Add branch protection rules:
   - For `develop` branch:
     ```
     ✓ Require pull request reviews
     ✓ Require status checks to pass
     ✓ Require Cypress tests to pass
     ```
   - For `main` branch:
     ```
     ✓ Require pull request reviews
     ✓ Restrict pushes
     ✓ Require merge from develop
     ```

#### 2. ⚙️ Configure Environment Variables
Create the following secrets in your GitHub repository:
```
MONGODB_URI=your_mongodb_connection_string
RENDER_API_KEY=your_render_api_key
NODE_ENV=production
```

#### 3. 🌳 Branch Structure
Initialize your repository with the following structure:
```
main (production)
  ↑
develop (staging)
  ↑
feature branches
```

#### 4. 🤖 Workflow Automation
- Pull requests to `develop` trigger test suite
- Merges to `main` trigger deployment
- Status checks must pass before merging

# 🔍 Monitoring Guide

## 👀 GitHub Actions Dashboard
Monitor your workflows and tests:
- 📊 View workflow runs
- ✅ Check test results
- 📦 Download artifacts
- 🔄 Monitor deployment status

## 📈 Render Dashboard
Track your deployments:
- 🚀 Monitor deployment progress
- 📝 View build logs
- 💡 Check application status
- 📊 Access deployment metrics

## 🔔 Notifications
- GitHub Actions sends notifications for:
  - 🔴 Failed workflows
  - 🟡 Workflow warnings
  - 🟢 Successful deployments

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📫 Contact

Let's connect! Reach out to me through:

- 🌐 **Portfolio**: www.waleedzaryab.com
- 🐱 **GitHub**: https://github.com/GhostMods00
- 📧 **Email**: westendcrew1982@gmail.com

---

Made with ❤️ by Waleed Zaryab | © 2025 All Rights Reserved ✨
