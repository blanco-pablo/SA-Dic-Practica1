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
        stage('Building and PUSH image') {
            steps{
                sh '''
                docker build -t pjblanco/practica .
                cat ~/pass.txt | docker login --username pjblanco --password-stdin
                docker push pjblanco/practica
                '''                
            }
        }
        stage('Deploy image') {
            steps{
              echo 'PRin'
            }
        }
    }
}