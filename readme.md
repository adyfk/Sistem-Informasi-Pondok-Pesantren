Tugas Sistem Informasi Santri

sequelize model:create --name App --attributes roleId:string,description:string
sequelize model:create --name Role --attributes title:string,description:string
sequelize model:create --name RoleDetail --attributes roleId:string,appId:string
sequelize model:create --name User --attributes username:string,password:string,roleId:string
sequelize model:create --name UserDetail --attributes userId:string,latestLogin:date
sequelize model:create --name Board --attributes userId:string,name:string,dateOfBirth:date,gender:string,address:string,dorp:string,district:string,regency:string,province:string,postCode:integer,phoneNumber:integer,email:string
sequelize model:create --name BoardDocument --attributes boarId:string,fcKK:string,fcKTP:string,fcAkte:string,photo:string,npwp:string 
sequelize model:create --name Student --attributes userId:string,name:string,dateOfBirth:date,gender:string,address:string,dorp:string,district:string,regency:string,province:string,postCode:integer,phoneNumber:integer,email:string
sequelize model:create --name StudentDetail --attributes studentId:string,generationId:string
sequelize model:create --name StudentDocument --attributes studentId:string,fcKK:string,fcKTP:string,fcAkte:string,photo:string
sequelize model:create --name Parent --attributes studentId:string,name:string,dateOfBirth:date,address:string,dorp:string,district:string,regency:string,province:string,postCode:integer,phoneNumber:integer,email:string,fcKTP:string
sequelize model:create --name Generation --attributes title:string
sequelize model:create --name GenerationDetail --attributes generationId:string,title:string,description:string,cost:integer
sequelize model:create --name Class --attributes title:string
sequelize model:create --name ClassDetail --attributes classId:string
sequelize model:create --name StudentClass --attributes studentId:string,classId:string,studentIn:date,studentOut:date
sequelize model:create --name Payment --attributes studentId:string,paymentType: string,description:string,bill:Number,integerdAt:date 
sequelize model:create --name PaymentType --attributes description:string
sequelize model:create --name PaymentDetail --attributes paymentTypeId:string,description:string,paid:number,createdAt:date
sequelize model:create --name Bedroom --attributes title:string,gender:string,capacity:integer
sequelize model:create --name StudentBedroom --attributes studentId:string,studentIn:date,studentOut:date
