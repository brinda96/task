//const logger = require('../utils/logger');
const model = require('../modal/model');
class Users {

  // To Add the users if not exsits
  addUser(userObj) {
    console.log('coming to add user');
    return new Promise(function (resolve, reject) {
      try {
        console.log(userObj.emailId);
        model.isUserAlreadyAdded(userObj.emailId).then(
          
          (result) => {
           // console.log('coming for saving');
            if (result.status == 201) {
              resolve({
                status: result.status,
                 message: "Email already registered User exists"
              });
            } else {
              model.saveUser(userObj).then(
                (result) => {
                  resolve({
                    status: 200
                    , message: result
                  })
                }
              )
            }
          }).catch((err) => {
            reject(err)
          });
      } catch (err) {
        //console.log("try");
        reject(err);
      }
    });
  }

  //To Update the User
  updateUser(userObj) {
    return new Promise(function (resolve, reject) {
      console.log(Object.keys(userObj));
      model.updateUser(userObj).then(
        (result) => {
          resolve({ status: 200, message: result });
        }
      ).catch((err) => {
        reject({ status: 504, message: err });
      });
    });
  }

  //To Delete the User
  deleteUser(userObj) {
    return new Promise(function (resolve, reject) {
      console.log(Object.keys(userObj));
      model.deleteUser(userObj).then(
        (result) => {
          resolve({ message: "Deleted Successfully" });
        }
      ).catch((err) => {
        reject({ status: 504, message: err });
      });
    });
  }

  //To view all the User
  viewUserrAll(userObj) {
    return new Promise(function (resolve, reject) {
      console.log(Object.keys(userObj));
      model.viewUserAll(userObj).then(
        (result) => {
          resolve({ status: 200, message: result });
        }
      ).catch((err) => {
        reject({ status: 504, message: err });
    });
  });
  }
}
module.exports= new Users();