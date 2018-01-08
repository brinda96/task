var user=require('../dbconnection');
user
.authenticate()
.then(() => {
  console.log('CONNECTION ESTABLISHED SUCCESSFULLY');
});
