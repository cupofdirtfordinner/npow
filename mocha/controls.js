var dir = 1

document.addEventListener('keydown', function(event) {
  const key = event.key;

  var target = {
    x: entities[0].x,
    y: entities[0].y
  }

  if (key == "r") {
    spawn("shotinthedark", 0, 'idc')
  }

  if (key == "w") {
    target.y -= 1
  }
  if (key == "s") {
    target.y += 1
  }
  if (key == "a") {
    target.x -= 1
  }
  if (key == "d") {
    target.x += 1
  }


  if (key == "i") {
    direction = 3
  }
  if (key == "k") {
    direction = 1
  }
  if (key == "j") {
    direction = 2
  }
  if (key == "l") {
    direction = 4
  }

  if (coordsChecker(entities[0], {
      x: target.x,
      y: target.y
    }) == true) {
    entities[0].x = target.x
    entities[0].y = target.y
    position()
  }
  
  cursoropacity()
});
