var name = 'Grawie';
var age = 72;
var marital_status = 'taken';
const owner = 'Vivi the Perfect';
var a = true;

const getProperties = (name, age, marital_status, owner) =>{
    return ('This stinker is named '+name+'. He is a '+age+' year old grandpa. Currently, his status is "'+marital_status+' by '+owner+'". However that status is not permanent as he can be thrown away anytime. But he will always be owned by '+owner+'.\nPS: He has given his complete consent on being owned by', owner, 'forever.');
};

console.log(getProperties(name, age, marital_status, owner));