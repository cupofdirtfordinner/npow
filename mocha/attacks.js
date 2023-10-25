function weaponSwap(dir) {
    entities[0].currentWeapon += dir
    if (entities[0].currentWeapon > weapons.length - 1) {
      entities[0].currentWeapon = 0;
    }
    if (entities[0].currentWeapon < 0) {
      entities[0].currentWeapon = weapons.length - 1;
    }
  }

  function attack(self, coords) {
    var attackTarget
    if (self === entities[0]) {
      
      attackTarget = {x: entities[0].x, y: entities[0].y}
      const amt = 20 //for animating
      if (dir == 1) {
        ++attackTarget.y
        atkanimy = amt
      }
      if (dir == 3) {
        --attackTarget.y
        atkanimy = -amt
      }
      if (dir == 4) {
        ++attackTarget.x
        atkanimx = amt
      }
      if (dir == 2) {
        --attackTarget.x
        atkanimx = -amt
      }
    } else {
      attackTarget = coords
    }
    
    if (coordsReturnEnt(attackTarget) ) {
      const enemy = coordsReturnEnt(attackTarget)
      enemy.health -= self.damage
      position()
    }
    
  }
  const compass = document.createElement("div");
  minimap.appendChild(compass);
  compass.classList.add('pcompass');
  
  function whichWeapon() {
    if (entities[0].currentWeapon == 3) {
      return "y"
    } else {
      return "x"
    } // this is fucked. fix it later
  }
  
  var rect = {};
  var width = 0;
  var height = 0;
  var x = 0;
  var y = 0;
  var atkanimx = 0;
  var atkanimy = 0;
  const computed = window.getComputedStyle( document.getElementById("minimap") );
  
  var testdiv = document.getElementById("testdiv");
  function compassdir() {
    const minimap = document.getElementById("minimap");
    rect = minimap.getBoundingClientRect();
    width = parseFloat(computed.width);
    height = parseFloat(computed.height);
    x = ( entities[0].x * (width / 7) ) +atkanimx;
    y = ((entities[0].y - 1) * (height / 7)) +atkanimy;
    
    testdiv.style.width = width;
    testdiv.style.height = height;
    testdiv.style.left = rect.left;
    testdiv.style.top = rect.top;
    
    //moving the compass
    compass.style.transform = "translate3d("+ x +"px, "+ y +"px, "+50+"px) rotateZ("+ (dir * 90 + 90) +"deg) rotate"+whichWeapon()+"("+(entities[0].currentWeapon * 90)+"deg) scale(.5)";
    compass.style.backgroundImage = "url(' "+ eval(weapons[entities[0].currentWeapon]) +" ')";

    //animating compass
    const speed = batterysaver / 21;
    atkanimx /= speed;
    atkanimy /= speed;
    if (Math.abs(atkanimx) < 0.5) {
      atkanimx = 0;
    }
    if (Math.abs(atkanimy) < 0.5) {
      atkanimy = 0;
    }
    
    //make this a function instead of an if statement that runs every frame later. for performance
    //i cant tell if i even care about performance anymore
  /*  if (entities[0].effect == 'bleeding') {
        compass.style.filter = ''
    } else if (entities[0].effect == 'poisoned') {
        compass.style.filter = ''
    } else {
        compass.style.filter = 'grayscale(100%)' //doesnt work. idk why and it pisses me off! future laith figure this shit out
    }*/
  }
  
  function deathEffect(whatami) { //whoami //dated vine reference day
    
  }