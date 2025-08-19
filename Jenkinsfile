pipeline {
  agent any
  options { timestamps() }

  environment {
    APP_NAME = "hello-jenkins"
    IMAGE_TAG = "latest"
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install') {
      steps {
        sh 'node -v'
        sh 'npm -v'
        sh 'npm install --no-audit --no-fund'
      }
    }

    stage('Test') {
      steps {
        sh 'npm test'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t ${APP_NAME}:${IMAGE_TAG} .'
      }
    }

    stage('Run Container') {
      steps {
        sh '''
          docker rm -f ${APP_NAME} || true
          docker run -d --name ${APP_NAME} -p 3000:3000 ${APP_NAME}:${IMAGE_TAG}
        '''
      }
    }

    /* OPTIONAL: Push to Docker Hub
    stage('Push to Docker Hub') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
          sh '''
            echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
            docker tag ${APP_NAME}:${IMAGE_TAG} ${DOCKER_USER}/${APP_NAME}:${IMAGE_TAG}
            docker push ${DOCKER_USER}/${APP_NAME}:${IMAGE_TAG}
          '''
        }
      }
    }
    */
  }

  post {
    always {
      echo 'Pipeline finished.'
    }
  }
}
