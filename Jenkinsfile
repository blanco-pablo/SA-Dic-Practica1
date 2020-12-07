pipeline {
    agent any
    stages {
        stage('Install dependencies') {
            steps {
                dir("Server"){
                    sh 'npm install'
                }
                
            }
        }
        stage('test') {
            steps {
                dir("Server"){
                    sh 'npm test' 
                }
                
            }
        }
        stage('Building image') {
            steps{
                script {
                    dockerImage = docker.build dockerRegistry + ":$BUILD_NUMBER"
                }
            }
        }
    }
}