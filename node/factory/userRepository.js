let repo = function(){
    let db = "db1";

    let get = function(id){
        console.log(`Getting user from ${db}:  ${id}`);
        return {
            name: `User from ${db}:  ${id}`
        };
    };

    let save = function(user){
        console.log(`Saving ${user.name} to repository`);
    };

    return {
        get: get,
        save: save
    };
};

module.exports =  repo();