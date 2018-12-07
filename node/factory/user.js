userRepo = require('./userRepository.js');

class User{
    constructor(data){
        this.name = data.name;
    }

    save(){
        console.log('saving user ' + this.name);
        userRepo.save(this); 
    }
}

module.exports =  User;