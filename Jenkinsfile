pipeline {
    agent any
    stages {
        stage('install') {
            steps {
                dir("Server"){
                    sh 'cat package.json'
                    sh 'npm install' 
                }
                
            }
        }
    }
}