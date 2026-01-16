pipeline {
  agent any

  stages {
    stage('Clone Repo') {
      steps {
        git 'https://github.com/your-username/node-postgres-compose.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker compose build'
      }
    }

    stage('Run Containers') {
      steps {
        sh 'docker compose up -d'
      }
    }
  }
}
