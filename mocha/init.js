const testspan = document.querySelectorAll(".testspan");
var entities = [];

var globalwidth = 0;
var globalheight = 0;

function gridify(width, height) {
  entities[0] = playerDefaults;

  for (let i = 0; i < height; i++) {
    //const br = document.createElement("br")
    y = i;
    for (let i = 0; i < width; i++) {
      const map = document.getElementById("minimap");
      const gridspace = document.createElement("div");
      const bg1 = document.createElement("img");
      const ab = document.createElement("div");
      const text = document.createElement("span");
      x = i;
      map.appendChild(gridspace);
      gridspace.appendChild(text);
      gridspace.appendChild(ab);
      ab.appendChild(bg1);
      gridspace.id = x + "-" + y;
      bg1.id = x + "-" + y + "bg1";
      text.textContent = x + "," + y;
      text.classList.add("coords");
      gridspace.classList.add("gridspace", "pageload");
      ab.setAttribute("class", "abs");

    }
    //we used to add a <br> element here, but it doesnt do anything because the css "display: inline-block" on all the divs
  }

  entities[0].x = Math.round((width / 2) - 1);
  entities[0].y = Math.round((height / 2) - 1);
  globalwidth = width;
  globalheight = height;
  position();
}

function position() {

  for (let h = 0; h < globalheight; h++) {
    for (let w = 0; w < globalwidth; w++) {
      
      const whateverthisis = document.getElementById(w + "-" + h + "bg1");
      whateverthisis.setAttribute("src", nothing);
      whateverthisis.parentElement.parentElement.classList.remove("object");
    }
  }

  for (let i = 0; i < entities.length; i++) {
    const whateverthisis = document.getElementById(entities[i].x + '-' + entities[i].y + "bg1");
    whateverthisis.setAttribute("src", eval(entities[i].sprite)); //I keep seeing that eval is bad, but whenever I look up why it's bad I seem to be using it in a way that's disclosed as not bad. I think. I also cannot find analternative to eval
    whateverthisis.parentElement.parentElement.classList.add('object');
  }
}


function coordsChecker(selfEnt, target) {
  for (let i = 0; i < (entities.length + 1); i++) {
    if (i < entities.length) {
      if (entities[i].name == selfEnt.name) {
        if (!(
            target.x < globalwidth &&
            target.x >= 0 &&
            target.y < globalheight &&
            target.y >= 0
          )) {
          break; //this feels like bad code? i have no idea why though. I feel like I shouldn't be using break
        }
      } else {
        if (
          target.x == entities[i].x &&
          target.y == entities[i].y
        ) {
          break;
        }
      }
    } else {
      return true;
    }
  }
}

//
var myFunction = function() {
    setTimeout(myFunction, batterysaver);
    cursorcolorer();
    compassdir();
};
setTimeout(myFunction, batterysaver);
//

function weaponSwap(dir) {
  entities[0].currentWeapon += dir
  if (entities[0].currentWeapon > weapons.length - 1) {
    entities[0].currentWeapon = 0;
  }
  if (entities[0].currentWeapon < 0) {
    entities[0].currentWeapon = weapons.length - 1;
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

//get player coords, set position to coords * map width or something
function compassdir() {
  const minimap = document.getElementById("minimap");
  rect = minimap.getBoundingClientRect();
  width = (rect.right - rect.left);
  height = (rect.bottom - rect.top);
  x = ( entities[0].x * (width / 7) ) +atkanimx;
  y = ((entities[0].y - 3.5) * (height / 7)) +atkanimy;
  
  testdiv.style.width = width;
  testdiv.style.height = height;
  testdiv.style.left = rect.left;
  testdiv.style.top = rect.top;
  
  //animating attacks
  const speed = batterysaver / 25
  atkanimx /= speed;
  atkanimy /= speed;
  if (Math.abs(atkanimx) < 0.5) {
    atkanimx = 0;
  }
  if (Math.abs(atkanimy) < 0.5) {
    atkanimy = 0;
  }
  
  //moving the compass
  compass.style.transform = "translate3d("+ x +"px, "+ y +"px, "+50+"px) rotateZ("+ ( ((dir) * 90)+ 90) +"deg) scale(.75)";
  compass.style.backgroundImage = "url(' "+ eval(weapons[entities[0].currentWeapon]) +" ')";
  compassBase.style.backgroundImage = "url(' "+ eval(weapons[entities[0].currentWeapon]) +" ')";
  
  
  
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
  
  testspan[0].textContent = "lol"
}