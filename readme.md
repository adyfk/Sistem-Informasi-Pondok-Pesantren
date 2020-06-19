Tugas Sistem Informasi Santri

** Mysql
** NodeJS 

** tambah file baru di root folder bernama .env 

    DB_PASSWORD_DEV=sesuai_pass_db
    JWT_PRIVATE_KEY=bebas
    AUTH_MIDDLEWARE=0

*** isi sesuai kebutuhan

** install sequelize-cli global
    
**run terminal

    npm i -g sequelize-cli
    npm i

    sequelize db:create
    sequelize db:migrate
    sequelize db:seed:all

    npm run start

code formater dengan eslint

________________________________________________________________________________________________________

catatan : 








sequelize model:create --name App --attributes roleId:string,description:string


role: 
1: 'board_admin',
2: 'student_admin',
3: 'student_treasurer',



sequelize-cli seed:generate --name role

https://stackoverflow.com/questions/42870374/node-js-7-how-to-use-sequelize-transaction-with-async-await/48675466   

http://localhost:9000/document/student-document-fcKtp-1592501025557.pdf

new data