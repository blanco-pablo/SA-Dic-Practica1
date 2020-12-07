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
        stage('Run') {
            steps {
                dir("Server"){
                    sh 'npm start' 
                }
                
            }
        }
    }
}