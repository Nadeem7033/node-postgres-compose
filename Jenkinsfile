pipeline {
  agent any

  stages {

    stage('Checkout Code') {
      steps {
        git branch: 'main',
            url: 'https://github.com/<your-username>/node-postgres-compose.git'
      }
    }

    stage('Stop Old Containers') {
      steps {
        sh 'docker compose down || true'
      }
    }

    stage('Build Images') {
      steps {
        sh 'docker compose build'
      }
    }

    stage('Deploy Containers') {
      steps {
        sh 'docker compose up -d'
      }
    }
  }
}
