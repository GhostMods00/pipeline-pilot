# CI/CD Pipeline Implementation with GitHub Actions 🚀

[![CI Status](https://github.com/yourusername/pipeline-pilot/actions/workflows/test.yml/badge.svg)](https://github.com/yourusername/pipeline-pilot/actions)
[![Deployment Status](https://github.com/yourusername/pipeline-pilot/actions/workflows/deploy.yml/badge.svg)](https://github.com/yourusername/pipeline-pilot/actions)

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