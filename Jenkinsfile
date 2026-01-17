pipeline {
    agent any

    environment {
        // Name of your Docker Compose project
        COMPOSE_PROJECT_NAME = "node-postgres-ci-cd"
    }

    stages {

        stage('Checkout Code') {
            steps {
                // Checkout your GitHub repository
                git branch: 'main', url: 'https://github.com/Nadeem7033/node-postgres-compose.git'
            }
        }

        stage('Stop Old Containers') {
            steps {
                script {
                    // Stop and remove any running containers from previous runs
                    sh "docker compose -p ${COMPOSE_PROJECT_NAME} down || true"
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    // Build images defined in docker-compose.yml
                    sh "docker compose -p ${COMPOSE_PROJECT_NAME} build"
                }
            }
        }

        stage('Deploy Containers') {
            steps {
                script {
                    // Start containers in detached mode
                    sh "docker compose -p ${COMPOSE_PROJECT_NAME} up -d"
                }
            }
        }

    }

    post {
        success {
            echo 'CI/CD Pipeline finished successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the logs for errors.'
        }
    }
}
