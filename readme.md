Tugas Sistem Informasi Santri

** Mysql
** NodeJS 

** tambah file baru 
.env => 
    DB_PASSWORD_DEV=
    JWT_PRIVATE_KEY=

*** isi sesuai kebutuhan

** install sequelize-cli global
    npm i -g sequelize-cli
    npm i

run 
**
    sequelize db:create
    sequelize db:migrate
    sequelize db:seed:all

**
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