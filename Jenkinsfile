pipeline {
    agent any
    stages {
        stage('Checkout-git') { 
            steps {
                git poll: true, url: 'https://github.com/blanco-pablo/SA-Dic-Practica1.git' 
            }
        }
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('RunApp') { 
            steps {
                sh 'npm start' 
            }
        }
    }
}