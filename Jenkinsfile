pipeline {
    agent any
    environment {
        PRODUCCION_URL = ''
    }
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
                echo 'Deploy'
                ansiblePlaybook credentialsId: 'private-key', disableHostKeyChecking: true, installation: 'ansible', inventory: 'dev.inv', playbook: 'playbook-desarrollo.yml'
            }
        }
    }
}