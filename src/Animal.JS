function Animal(name, age, kind){
  this.name = name;
  this.age = age;
  this.kind = kind;
  this.awake = false;
}

Animal.prototype.oink = function(){
  if (this.kind === 'Pig'){
    return 'Oink!';
  } else {
    return "I am not a pig!";
  }
};

Animal.prototype.growUp = function(){
  this.age++;
  return this.age;
};

Animal.prototype.feed = function(){
  if(this.awake)
    return 'Munch, munch, munch.';
  return "Leave me be, I am sleeping!";
};

Animal.prototype.wakeUp = function(){
  this.awake = true;
  return this.awake;
};

Animal.prototype.sleep = function(){
  this.awake = false;
  return this.awake;
};



module.exports = Animal;
