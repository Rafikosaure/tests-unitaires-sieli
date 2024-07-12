pipeline {
    agent any
    
    tools {
        nodejs 'nodejs'
    }
    
    stages {
        

        stage('Git Checkout') {
            steps {
                echo "Vérification des credentials SSH"
                
                sshagent(['c6d7f844-01ca-4321-81b2-28c7eec772a5']) {

                    bat 'git clone git@github.com:Rafikosaure/tests-unitaires-sieli.git -b dev'
                }    
            }
        }
        
        
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        
        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }
    }
    post {
        success {
            script { 
                sshagent(['c6d7f844-01ca-4321-81b2-28c7eec772a5']) {
                    bat """
        
                            git config --global user.email "rafikbensadi@live.com"
        
                            git config --global user.name "Rafikosaure"
                            
                            git checkout main 
        
                            git pull origin main
        
                            git merge dev
        
                            git push git@github.com:Rafikosaure/tests-unitaires-sieli.git main 
                    """
                }
            }
        }
        always {// nettoyage
        cleanWs()
        }   
    }
}



// pipeline {
//     agent any
    
//     tools {
//         nodejs: "nodejs"
//     }

//     stages {
//         stage('Git Checkout') {
//             steps {
//                 git branch: 'main', url: 'https://github.com/Rafikosaure/tests-unitaires-sieli.git'
//             }
//         }
//         stage('Install Dependencies') {
//             steps {
//                 bat 'npm install'
//             }
//         }
//         stage('Run Tests') {
//             steps {
//                 bat 'npm test'
//             }
//         }
//     }
// }
