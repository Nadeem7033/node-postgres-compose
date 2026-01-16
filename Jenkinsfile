pipeline {
  agent any

  stages {

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
