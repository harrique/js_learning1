let repo = function(){
let db = "db1";

    let get = function(id){
        console.log(`Getting task from ${db}:  ${id}`);
        return {
            name: `Task from ${db}:  ${id}`
        };
    };

    let save = function(task){
        console.log(`Saving ${task.name} to repository`);
    };

    return {
        get: get,
        save: save
    };
};

module.exports =  repo();