function weaponSwap(dir) {
    entities[0].currentWeapon += dir
    if (entities[0].currentWeapon > weapons.length - 1) {
      entities[0].currentWeapon = 0;
    }
    if (entities[0].currentWeapon < 0) {
      entities[0].currentWeapon = weapons.length - 1;
    }
  }

  function attack() {
    const amt = 40
    if (dir == 1) {
      atkanimy = amt
    }
    if (dir == 3) {
      atkanimy = -amt
    }
    if (dir == 4) {
      atkanimx = amt
    }
    if (dir == 2) {
      atkanimx = -amt
    }
  }
  const compass = document.createElement("div");
  minimap.appendChild(compass);
  compass.classList.add('pcompass');
  
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
    compass.style.transform = "translate3d("+ x +"px, "+ y +"px, "+50+"px) rotateZ("+ ( ((dir) * 90)+ 90) +"deg) scale(.75)";
    compass.style.backgroundImage = "url(' "+ eval(weapons[entities[0].currentWeapon]) +" ')";

    //animating compass
    const speed = batterysaver / 25
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