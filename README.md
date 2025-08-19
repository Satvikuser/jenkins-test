# Jenkins Sample CI/CD (Node.js + Docker)

This is a tiny Node.js app you can use to learn Jenkins pipelines. It builds, tests, dockerizes, and runs a container.

## Project Structure
```
.
├── Jenkinsfile
├── Dockerfile
├── .dockerignore
├── package.json
├── app.js
├── sum.js
└── tests
    └── app.test.js
```

## Quick Start
1) Push this folder to a new Git repository (e.g., GitHub).  
2) In Jenkins: *New Item* → **Pipeline** → **Pipeline script from SCM** → Select **Git** → paste your repo URL → Save.  
3) Click **Build Now**.  
4) After success, open `http://<your-server-ip>:3000` to see the app running.

> Docker image push to Docker Hub is commented out by default. You can enable it later by creating a credential with ID `dockerhub-creds` and uncommenting the stage in `Jenkinsfile`.

