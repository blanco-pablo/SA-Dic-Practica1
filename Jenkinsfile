pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Checkout-git') { 
            steps {
                git poll: true, url: 'git@github.com:blanco-pablo/SA-Dic-Practica1.git' 
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