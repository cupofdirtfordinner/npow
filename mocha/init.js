const testspan = document.querySelectorAll(".testspan");
var entities = [];

var globalwidth = 0;
var globalheight = 0;
function gridify(width, height) {
  
  //save all initial variables for debug menu
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
      text.textContent = gridspace.id;//x + "," + y;
      text.classList.add("coords");
      gridspace.classList.add("gridspace", "pageload");
      gridspace.setAttribute("onclick", "path("+x+", "+y+")");
      ab.setAttribute("class", "abs");
    }
    //we used to add a <br> element here, but it doesnt do anything because the css "display: inline-block" on all the divs. that means no support for bigger grids, but im not sure who that would really help anyways. sorry
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
      //clear board
      whateverthisis.setAttribute("src", eval(entities[i].sprite)); //I keep seeing that eval is bad, but whenever I look up why it's bad I seem to be using it in a way that's disclosed as not bad. I think. I also cannot find analternative to eval
      whateverthisis.parentElement.parentElement.classList.add('object');
      
      for (let o = 0; o < entities[0].moveto.length; o++) {
        if ( !(entities[0].moveto[o].x == x && entities[0].moveto[o].y == y)) {
        whateverthisis.parentElement.parentElement.classList.remove("pathSuccess");
        }
      }
    } else {
      //remove entity from existence
      entities.splice(i, 1);
      position();
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
        return entities[i];
      }
  }
}

function pathoverlap(xr, yr) {
  const moveto = entities[0].moveto;
  var checks = 0;
  for (let i = 0; i < entities[0].moveto.length; i++) {
    if (entities[0].moveto[i].x == xr && entities[0].moveto[i].y == yr) {
      checks += 1
    }
  }
  if ( checks > 0 ) {
    return false
  } else {
    return true
  }
}
function path(x, y) {
  var xref = entities[0].x;
  var yref = entities[0].y;
  var pathd = false;
  if (entities[0].moveto.length > 0) {//if this is not the start of the path/nothing in the player's current path
    xref = entities[0].moveto[entities[0].moveto.length - 1].x;
    yref = entities[0].moveto[entities[0].moveto.length - 1].y;
    pathd = true
  } else {
    pathd = false;
  }
  if (
    ((x>=xref-1 && x<=xref+1 && y==yref) || (y>=yref-1 && y<=yref+1 && x==xref)) && //if the player's coords share a coord with the target
    coordsChecker('null', {x:x, y:y} ) && //if the target isn't occupied by an enemy
    entities[0].instructions - 2 > 0 //if the player has enough instructions left // also probably shouldnt hardcode the cost per move but whatever
    ) {
      if ( ( pathd && pathoverlap(x, y) ) || (!pathd) ) {
        entities[0].moveto.push( { x:x, y:y } );
        entities[0].instructions -= 2;
      //animating tiles
        document.getElementById(x+"-"+y).classList.remove("pathSuccess");
        document.getElementById(x+"-"+y).classList.add("pathSuccess");
      }
      else {
      //get coords + create buttons to choose what attack/action to do on that tile
    }
    } else {
      //testspan[1].textContent = "did shit work? nope2";
    }
    
  testspan[2].textContent = x +":"+ y;
  testspan[3].textContent = entities[0].x +":"+ entities[0].y;
}

const timer = ms => new Promise(res => setTimeout(res, ms));
async function executepath() {
  const pathlength = entities[0].moveto.length
  if (pathlength > 0) {
  for (var i = 0; i < pathlength; i++) {
    await timer(300);
    entities[0].x = entities[0].moveto[0].x;
    entities[0].y = entities[0].moveto[0].y;
    entities[0].moveto.shift();
    position();
  }
  pathFinish()
}}

function pathFinish() {
  testspan[5].textContent = "lol"
  spawn("shotinthedark", 0, 'idc');
  entities[0].moveto = [];
  entities[0].instructions = entities[0].instructionsdefault;
}

var myFunction = function() {
  setTimeout(myFunction, batterysaver);
  cursorcolorer(); //cursor.js
  compassdir(); //attacks.js
  //testspan[0].textContent = "instructions: " + entities[0].instructions
  testspan[0].textContent = JSON.stringify(entities[0].moveto);
  document.getElementById('instructionsCounter').textContent = entities[0].instructions;
  var variables = "";
  
  for (var name in this) { //for debug console
    if (document.getElementById('debu').checked === true && (name.includes(document.getElementById("debugfilter").value)) && (!(name.includes(document.getElementById("debugexclude").value))||(document.getElementById("debugexclude").value === "") ) ) {
        variables += "<span style='color:lightblue'>"+ JSON.stringify(name).replace('"', '').replace('"', '') +":</span> "+ eval(name) + "<span style='color:royalblue'> /br</span><br> ";
      }
  }
  document.getElementById('debugtext').innerHTML = variables;
  document.getElementById('filterhelper').textContent = "hiding" +document.getElementById("debugfilter").value=="b"?"gwag":"glorb"
};
setTimeout(myFunction, batterysaver);