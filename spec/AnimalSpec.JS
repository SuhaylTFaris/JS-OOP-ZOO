var Animal = require('../src/Animal.JS');

var animal;

describe('Animal', function(){

  beforeEach(function(){
    animal = new Animal("Albert", 12, "Pig");
  });

  describe('#oink', function(){
    it('Should Oink! If it is a pig', function(){
      expect(animal.oink()).toEqual('Oink!');
    });
    it('Should not Oink! If it is not pig.', function(){
      animal.kind = 'lion';
      expect(animal.oink()).toEqual('I am not a pig!');
    });
  });

  describe('#growUp', function(){
    it('Function should increase age by an increment of 1.', function(){
      expect(animal.growUp()).toBe(13);
    });
  });

  describe('#awake', function(){
    it('Should initially be off.', function(){
      expect(animal.awake).toBe(false);
    });
  });

   describe('#wakeUp', function(){
    it('This function should wake the animal up.', function(){
      expect(animal.wakeUp()).toBe(true);
    });
  });

  describe('#sleep', function(){
    it('The animal should intially be sleeping.', function(){
      expect(animal.sleep()).toBe(false);
    });
  });

  describe('#feed', function(){
    it('The function should feed the animal if they are awake.', function(){
      animal.wakeUp();
      expect(animal.feed()).toBe('Munch, munch, munch.');
    });
    it('Will not be fed; if asleep.', function(){
      expect(animal.feed()).toBe("Leave me be, I am sleeping!");
    });
  });

});
