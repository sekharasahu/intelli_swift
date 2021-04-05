# intelli_swift
This is a POC for creating a backend server app using bellow technology and concepts.

1. Node.js (Express.js)
2. Sequelize (ORM)
3. Sql Server (Data base)

* It should support token authentication mechanisimh. (jsonwebtoken).

* It should support pagination.

* It should support multi-column and multi-condition filteration.

* Propper test suits has to be mantained. (mocha and chai)


## Dependencies
---------------
This app is containerized so the basic dependecies are

1. Docker engine . ([Docker](https://docs.docker.com/engine/install/))

2. As its a multi container app we also require docker-compose. ([docker-compose](https://docs.docker.com/compose/install/))

please make sure docker is in active state in the host machine.

## Steps to run
---------------
1. Clone the repo from https://github.com/sekharasahu/intelli_swift.git.

2. Move into the folder. ($cd intelli_swift).

3. Assuming docker is runiing and docker-compose is installed. Run the command  $ sudo docker-compose build

4. Once complete run $sudo docker-compose up -d
Here -d stands to run in ditached mode.

5. Now go to chorome or any other browser and hit the url as http://localhost:8000

6. We can expect response as "Server is running" which indicates that app is running successfully.


## Step to test
-------------------
1. Once the app is up and running simply go inside the root folder and run the command 
$ sudo npm i. This will install the node_modules in local. Than $ sudo npm run test.

This should execute the test suits automatically.
Based on the OS of host machine commnads may very.