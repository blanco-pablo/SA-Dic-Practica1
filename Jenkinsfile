pipeline {
    agent { label 'principal'}
    stages {
        stage('install') {
            steps {
                dir("Server"){
                    sh 'npm install' 
                }
                
            }
        }
    }
}