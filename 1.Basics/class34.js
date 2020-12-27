//class on javascript
function Animal(type,live){
    this.type = type;
    this.live = live;
    
  }
  class Human extends Animal{
    constructor(name){
      super('mammal',true);
      this.name = name;
    }
  }
  var mehedi = new Human("mehedi");
  console.log(mehedi.type);
  console.log(mehedi.name);
  