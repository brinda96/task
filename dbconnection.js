const Sequelize = require('sequelize');
const sequelize = new Sequelize('register', 'root', 'admin@123', {
  host: '127.0.0.1',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
    
  },

});
sequelize
.authenticate()
.then(() => {
  console.log('CONNECTION ESTABLISHED SUCCESSFULLY');
}).catch(err => {
  console.log(err);
  throw err;
});


module.exports=sequelize;
