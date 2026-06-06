pipeline {
    agent any

    stages {

        stage('Pull Latest Code') {
            steps {
                sh '''
                git config --global --add safe.directory /workspace/HomemadeMeals

                cd /workspace/HomemadeMeals
                git pull origin main
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                cd /workspace/HomemadeMeals

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