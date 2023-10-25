var dir = 1

document.addEventListener('keydown', function(event) {
  const key = event.key;
  
  if (key == "r") {
    spawn("shotinthedark", 0, 'idc'); //monsters.js
  }
  
  if (!event.repeat) {
    if (key == " ") {
      attack(entities[0]); //V
    }
    
    if (key == ".") {
      weaponSwap(1); //V
    }
    if (key == ",") {
      weaponSwap(-1); //attacks.js
    }
    
    var target = {
      x: entities[0].x,
      y: entities[0].y
    }
    
    if (key == "w") {
      target.y -= 1
    }
    if (key == "a") {
      target.x -= 1
    }
    if (key == "s") {
      target.y += 1
    }
    if (key == "d") {
      target.x += 1
    }
    
    
    if (key == "i") {
      dir = 3
      atkanimy = 7
    }
    if (key == "k") {
      dir = 1
      atkanimy = -7
    }
    if (key == "j") {
      dir = 2
      atkanimx = 7
    }
    if (key == "l") {
      dir = 4
      atkanimx = -7
    }
    
    if (key == " ") {
      attack(); //attacks.js
    }
  }
  

  if (coordsChecker(entities[0], {x: target.x, y: target.y}) === true) { //coordschecker - init.js
        entities[0].x = target.x
        entities[0].y = target.y
        position() //init.js
      }//brokey
  
  cursoropacity() //cursor.js
});
