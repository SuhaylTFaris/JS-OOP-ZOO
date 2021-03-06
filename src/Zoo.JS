var Animal = require("./animal");

function Zoo(name, location){
  this.name = name;
  this.location = location;
  this.status = 'We are closed.';
  this.animals = [];
}

Zoo.prototype.changeLocation = function(location){
  this.location = location;
  return this.location;
};

Zoo.prototype.open = function(){
  this.status = 'Open!';
  return this.status;
};

Zoo.prototype.close = function(){
  this.status = 'We are closed.';
  return this.status;
};

Zoo.prototype.isOpen = function(){
  return this.status;
};

Zoo.prototype.addAnimal = function(animal){
  if(this.status==='Open!' &&
     animal instanceof Animal &&
     this.animals.indexOf(animal)===-1){

    this.animals.push(animal);
    return true;
  }
  return false;
};

Zoo.prototype.removeAnimal = function(animal){
  if(this.status === 'Open!'){
    this.animals.splice(animal);
    return true;
  }
  return false;
};

module.exports = Zoo;
