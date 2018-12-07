let repo = function(){
    let db = "db1";

    let get = function(id){
        console.log(`Getting project from ${db}:  ${id}`);
        return {
            name: `Project from ${db}:  ${id}`
        };
    };

    let save = function(project){
        console.log(`Saving ${project.name} to repository`);
    };

    return {
        get: get,
        save: save
    };
};

module.exports =  repo();