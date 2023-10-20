var dir = 1

document.addEventListener('keydown', function(event) {
  const key = event.key;

  var target = {
    x: entities[0].x,
    y: entities[0].y
  }

  if (key == "r") {
    spawn("shotinthedark", 0, 'idc'); //monsters.js
  }

  if (key == "w") {
    target.y -= 1; //V
  }
  if (key == "s") {
    target.y += 1; //V
  }
  if (key == "a") {
    target.x -= 1; //V
  }
  if (key == "d") {
    target.x += 1; //init.js
  }
  
  if (key == ".") {
    weaponSwap(1); //V
  }
  if (key == ",") {
    weaponSwap(-1); //attacks.js
  }


  if (key == "i") {
    dir = 3
  }
  if (key == "k") {
    dir = 1
  }
  if (key == "j") {
    dir = 2
  }
  if (key == "l") {
    dir = 4
  }
  
  if (key == " ") {
    attack(); //attacks.js
  }

  if (coordsChecker(entities[0], { //coordschecker - init.js
      x: target.x,
      y: target.y
    }) === true) {
    entities[0].x = target.x
    entities[0].y = target.y
    position() //init.js
  }
  
  cursoropacity() //cursor.js
});
