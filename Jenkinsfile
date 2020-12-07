pipeline {
    agent { lable 'main'}
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