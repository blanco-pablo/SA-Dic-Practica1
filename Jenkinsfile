pipeline {
    agent { label 'main'}
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