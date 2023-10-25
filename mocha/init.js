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
    if (entities[i].health > 0) {
      whateverthisis.setAttribute("src", eval(entities[i].sprite)); //I keep seeing that eval is bad, but whenever I look up why it's bad I seem to be using it in a way that's disclosed as not bad. I think. I also cannot find analternative to eval
      whateverthisis.parentElement.parentElement.classList.add('object');
    } else {
      //remove entity from existence
      testspan[0].textContent = '$entities'
      testspan[1].textContent = '$entities[i]'
      entities.splice(i, 1)
      testspan[3].textContent = '$entities'
      position()
    }
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

function coordsReturnEnt(target) {
  for (let i = 0; i < (entities.length); i++) {
    if (
        entities[i].x == target.x &&
        entities[i].y == target.y
      ) {
        return entities[i]
      }
  }
}

//
var myFunction = function() {
    setTimeout(myFunction, batterysaver);
    cursorcolorer(); //cursor.js
    compassdir(); //attacks.js
};
setTimeout(myFunction, batterysaver);
//
