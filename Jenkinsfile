pipeline {
    agent any

    stages {

        stage('Deploy') {
            steps {
                sh '''
                pwd
                ls -la

                docker compose down
                docker compose build
                docker compose up -d
                '''
            }
        }

        stage('Verify') {
            steps {
                sh '''
                docker ps
                '''
            }
        }

    }
}