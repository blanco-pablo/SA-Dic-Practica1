pipeline {
    agent any
    stages {
        stage('install') {
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
    }
}