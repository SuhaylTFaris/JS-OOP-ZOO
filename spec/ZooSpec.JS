var Animal = require('../src/Animal.JS'),
Zoo = require('../src/Zoo.JS');

var animal;
var zoo;

describe('Zoo', function(){

  beforeEach(function(){
    zoo = new Zoo("Bronx","NYC");
    pig = new Animal("Arnold",13,"Pig");
    lion = new Animal("Wilson",13,"Lion");
  });

  describe('#changeLocation', function(){
    it('Change locations.', function(){
      expect(zoo.changeLocation('Denver')).toBe('Denver');
    });
  });

  describe('#open', function(){
    it('Should set the zoo status to open.', function(){
      expect(zoo.open()).toBe('Open!');
    });
  });


  describe('#isOpen', function(){
    it('Check if the zoo is open.', function(){
      zoo.open();
      expect(zoo.isOpen()).toBe('Open!');
    });
    it('Check if the zoo is closed.', function(){
      expect(zoo.isOpen()).toBe('We are closed.');
    });
  });

  describe('#animals', function(){
    it('Zoo should start empty.', function(){
      console.log(zoo.animals);
      expect(zoo.animals).toEqual([]);
    });
  });


  describe('#addAnimal', function(){
    it('Add animals only when zoo is open.', function(){
      expect(zoo.addAnimal('pig')).toBe(false);
    });
    it('Should add an animal to the array.', function(){
      zoo.open();
      expect(zoo.addAnimal('pig')).toBe(true);
    });

    it('Make an animal instance.', function(){
      expect(zoo.addAnimal('pig')).toBe(false);
    });

    it('Will not add duplicates.', function(){
      zoo.addAnimal(pig);
      expect(zoo.addAnimal(pig)).toBe(false);
    });
  });

  describe('#removeAnimal', function(){
    it('Will remove an animal while the zoo is open.', function(){
      expect(zoo.removeAnimal(pig)).toBe(false);
    });
  });
});
