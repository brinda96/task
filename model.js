  const Sequelize = require('sequelize');
  const db = require('./dbconnection');
//const config = require('../config');

const User = db.define('userProfile', {
    user_id: {type:Sequelize.INTEGER,autoIncrement:true,primaryKey:true},
    user_name: Sequelize.STRING(128),
    dateofbirth: Sequelize.STRING(128),
    phone: Sequelize.BIGINT(10),
    email_id: Sequelize.STRING(128),
    address: Sequelize.STRING(128),
    zip:Sequelize.BIGINT(30)
});

class UserModel {
    constructor() { }
    getUserDetails() {
        return User;
    };

    isUserAlreadyAdded(emailId) {

        console.log('coming to model'+emailId);
        return new Promise(function (resolve, reject) {
            try {
                let User = new UserModel().getUserDetails();
               // console.log(User);
                User.sync({}).then(() => {
                    console.log('coming to try block'+emailId);
                    User.count({ where: { email_id: emailId} }).then(
                        (count) => {
                            if (count >= 1)
                                resolve({ status: 201, message: "Email Already Registered User exists" });
                            else
                                resolve({ status: 200, message: "Add User" });
                        }
                    )
                }).catch((err) => {
                    reject(err);
                });

            }
            catch (err) {
                reject(err);
            }
        })
    }

    saveUser(userObj) {
        return new Promise(function (resolve, reject) {
            try {
                let User = new UserModel().getUserDetails();
                        User.sync({}).then(
                            () => {
                                let jsonObj = {

                                    user_name: userObj.userName,
                                    dateofbirth:userObj.userdateofbirth,
                                    phone: userObj.phonePrimary,
                                    email_id: userObj.emailId,
                                    address:userObj.address,
                                    zip:userObj.zip
                                }
                                console.warn(JSON.stringify(jsonObj));  
                                User.create(jsonObj).then(
                                    (res) => { resolve(res); }
                                )
                            }
                        )

            }   
            catch (err) {
                reject(err);
            }
        });
    }

}

    module.exports=new UserModel();


    