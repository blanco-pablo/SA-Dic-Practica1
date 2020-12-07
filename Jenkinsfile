pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                dir("Server"){
                    sh 'npm install'
                }
                
            }
        }
        stage('Test Proyect') {
            steps {
                dir("Server"){
                    sh 'npm test' 
                }
                
            }
        }
        stage('Pre-Build') {
            steps {
                steps{
                    sh 'docker stop $(docker ps -aq)'
                    sh 'docker rm $(docker ps -aq)'
                }
            }
        }
        stage('Building image') {
            steps{
                sh 'docker build -t imagen:latest .' 
            }
        }
        stage('Run image') {
            steps{
                sh 'docker run -p 3000:3000 -d imagen:latest' 
            }
        }
    }
}