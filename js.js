//dear source-code viewers,
//probably turn off word wrap.
const nothing = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC"
const guy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAKCAYAAAB8OZQwAAAAAXNSR0IArs4c6QAAADNJREFUGFdjZICA/1AaRDEykiwIMwKsE0Qgmwc2DWYmhkqYxSAdcO3IqsASyE6CmY9dEAB9zw0KLa/jmAAAAABJRU5ErkJggg=="
const fistIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAJCAYAAAAPU20uAAAAAXNSR0IArs4c6QAAAERJREFUKFN1j1EOACAIQuP+h645hWFlP2Q+IbHy7NJHQCCIKG7l22SQQ+7vE3EXwCz/UAN+GQK8yTg6ti0crAYEDGvgACvYEwNnsxyfAAAAAElFTkSuQmCC"
const swordIcon = "fuck"
const shieldIcon = "fuck"
const coinIcon = "fuck"
const bat = ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAFCAYAAABmWJ3mAAAAAXNSR0IArs4c6QAAADhJREFUGFdjZICCYssJ/3uPFzDCaMYg46T/IDlFNj2YGob7vy4xMIJ4MEkQe93ZeWAxMIEN4JQAAAboEOxkMfZnAAAAAElFTkSuQmCC",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAFCAYAAABmWJ3mAAAAAXNSR0IArs4c6QAAAC9JREFUGFdjZMABGGHixZYT/vceL2CE0SgSMEUgBYxBxkn/kU1bd3YeWAyuA90qAFxGEewlhNmKAAAAAElFTkSuQmCC"
]
const goblin = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAKCAYAAAB4zEQNAAAAAXNSR0IArs4c6QAAAG1JREFUKFNjZICCwPbo/zD2+sqljCA2mAABkOTjE/cYZC2UGHBKwhSf2XicEUUnTmNhRsOMhNvpbmv230FLGqaR4cC1pww7D59iZARJgBjt6YFw11bOXA8WR5EE6QABkGKwJMwsmAkwGsWf2CQB99BHfQAuyJIAAAAASUVORK5CYII="
const chest = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAAXNSR0IArs4c6QAAAG5JREFUGFdjZGBgYPh/neE/iEYGjJoMjIwgicYyR4aff/8xsDMzwen6rv0MjP8PM/xv7HJkAHFgAKS4vgwqCRM8yXqCwfy3BVwRWGdVuz1DW+VBuCCMz/h/JcP/qoX2KPaB7G+LP8gAlkR3KYwPAJQDNG4apIMUAAAAAElFTkSuQmCC"

const potion = ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAJCAYAAAD+WDajAAAAAXNSR0IArs4c6QAAAGBJREFUKFNjZICC/7vi/8PYjG4LGUFsMPH//3+4BFwBIyMjQvLydJg4A4NuJgNIDiwJ0w3ig0yBiROWBNsZFIQwdt06iLEYEubmDAwnTzIwgBSAJTs7IQLIAC6JKgznAQDMtTf+mFTJrgAAAABJRU5ErkJggg==",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAJCAYAAAD+WDajAAAAAXNSR0IArs4c6QAAAGJJREFUKFNjZICC/7vi/8PYjG4LGUFsMPH//3+4BFwBIyMjQvLydJg4A4NuJgNIDiwJ0w3ig0yBiROWBNsZFMTAYG7OwHDyJAPDunUQY8ESnZ0QQWQAUgDXhSoF0Y3NGzB1AEjEN/56+8h7AAAAAElFTkSuQmCC",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAJCAYAAAD+WDajAAAAAXNSR0IArs4c6QAAAGBJREFUKFNjZICC/7vi/8PYjG4LGUFsMPH//3+4BFwBIyMjQvLydJg4A4NuJgNIDiwJ0w3ig0yBiROWBNvZ2cnAcPIkxJh16yDGgiWCghD2wVggBRiS5uYQE+CSmPrAIgD+tTf+6CbpaAAAAABJRU5ErkJggg=="
]

var playerDefaults = {
  defaultName: 'player',
  name: 'player', //only really matters for enemies and entities that can have duplicates but man i might write some code eventually that checks defaultName and I wouldn't know what was going wrong and id kill myself.
  x: 0,
  y: 0,
  sprite: 'guy',
  health: 10,
  attack: 10,
  magic: 10,
  gold: 0,
  animframe: 0
}
var defaults = {
  bat: {
    defaultName: "bat",
    health: 10,
    attack: 10,
    magic: 10,
    gold: 0,
    animframe: 0,
    animdivis: 1
  },
  goblin: {
    defaultName: "goblin",
    health: 10,
    attack: 10,
    magic: 10,
    gold: 0,
    animframe: 0,
    animdivis: 1
  },
  chest: {
    defaultName: "bat",
    health: 10,
    attack: 10,
    magic: 10,
    gold: 0,
    animframe: 0,
    animdivis: 1
  },
  potion: {
    defaultName: "goblin",
    health: 10,
    attack: 10,
    magic: 10,
    gold: 0,
    animframe: 0,
    animdivis: 1
  },

}

var dir = 1 //direction doesnt exist yet

var entities = []
var frame = 0;

var regexStringifySpriteArrays = /([a-z]+)(\[([	0-9]+)\])/;

function animate() {
  frame += 1;
  for (let i = 0; i < entities.length; i++) {
    var nameOfArray = String(entities[i].sprite).match(regexStringifySpriteArrays)
    if (Array.isArray(nameOfArray)) {
      if (Array.isArray(eval(String(nameOfArray[1])))) { //i realise now, at 1:05 PM 10/6/2023, i could have just base64 encoded gifs. but i did not do that. i made my life expoNENtially harder than it needed to be. like with an exponent. crazy
        frame += 1
        if (frame % entities[i].animdivis == 0) {
          entities[i].animframe += 1
        }
        if (entities[i].animframe > eval(nameOfArray[1]).length - 1) {
          entities[i].animframe = 0
        } //resets animframe to 0 if its more than the ammount of sprites in the sprite array
        var newAnimatedSpriteFrame = String(entities[i].defaultName + '[' + ([entities[i].animframe]) + ']')
        entities[i].sprite = newAnimatedSpriteFrame
        document.getElementById(entities[i].x + '-' + entities[i].y + "bg1").setAttribute("src", eval(newAnimatedSpriteFrame))
      }
    }
  } //this took weeks of my life.
}
setInterval(function() {
  animate();
}, 300);

var globalwidth = 0;
var globalheight = 0;

function gridify(width, height) {
  entities[0] = playerDefaults

  for (let i = 0; i < height; i++) {
    //const br = document.createElement("br")
    y = i
    for (let i = 0; i < width; i++) {
      const map = document.getElementById("minimap")
      const gridspace = document.createElement("div")
      const bg1 = document.createElement("img")
      const ab = document.createElement("div")
      const text = document.createElement("span")
      x = i
      map.appendChild(gridspace)
      gridspace.appendChild(text)
      gridspace.appendChild(ab)
      ab.appendChild(bg1)
      gridspace.id = x + "-" + y
      bg1.id = x + "-" + y + "bg1"
      text.textContent = x + "," + y
      text.classList.add("coords")
      gridspace.classList.add("gridspace", "pageload")
      ab.setAttribute("class", "abs")

    }
    //we used to add a <br> element here, but it doesnt do anything because the css "display: inline-block" on all the divs
  }

  entities[0].x = Math.round((width / 2) - 1)
  entities[0].y = Math.round((height / 2) - 1)
  globalwidth = width
  globalheight = height
  position()
}

//anim helper
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
sleep(3400).then(() => {
  const pgloads = document.querySelectorAll('.pageload')
  for (let i = 0; i < pgloads.length; i++) {
    pgloads[i].classList.remove('pageload')
    pgloads[i].classList.add('stopanims')
  }
});

function position() {

  for (let h = 0; h < globalheight; h++) {
    for (let w = 0; w < globalwidth; w++) {

      document.getElementById(w + "-" + h + "bg1").setAttribute("src", nothing)
      document.getElementById(w + "-" + h + "bg1").parentElement.parentElement.classList.remove("object")
    }
  }

  for (let i = 0; i < entities.length; i++) {
    document.getElementById(entities[i].x + '-' + entities[i].y + "bg1").setAttribute("src", eval(entities[i].sprite)) //I keep seeingthat eval is bad, but whenever I look up why it's bad I seem to be using it in a way that's disclosed as not bad. I think. I also cannot find analternative to eval
    document.getElementById(entities[i].x + '-' + entities[i].y + "bg1").parentElement.parentElement.classList.add('object')
  }
}

//controls
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

  if (coordsChecker(entities[0], {
      x: target.x,
      y: target.y
    }) == true) {
    entities[0].x = target.x
    entities[0].y = target.y
    position()
  }
});

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
          break //this feels like bad code? i have no idea why though. I feel like I shouldn't be using break
        }
      } else {
        if (
          target.x == entities[i].x &&
          target.y == entities[i].y
        ) {
          break
        }
      }
    } else {
      return true
    }
  }
}
//options
document.getElementById('coord').addEventListener('change', function() {
  if (this.checked == true) {
    for (let i = 0; i < document.querySelectorAll('.coords').length; i++) {
      document.querySelectorAll('.coords')[i].style = "display: none"
    }
  } else {
    for (let i = 0; i < document.querySelectorAll('.coords').length; i++) {
      document.querySelectorAll('.coords')[i].style = "display: inherit"
    }
  }
})
document.getElementById('anim').addEventListener('change', function() {
  if (this.checked == true) {
    for (let i = 0; i < document.querySelectorAll('.div').length; i++) {
      document.querySelectorAll('div')[i].classList.add('transitionless')
    }
  } else {
    for (let i = 0; i < document.querySelectorAll('.div').length; i++) {
      document.querySelectorAll('div')[i].classList.remove( 'transitionless' )
    }
  }
})

var rofl = 'bat'
//spawning
function spawn(sx, sy, what) {
  //sex sigh what
  // the"what am i spawning" logic
  if (what == "idc") {
    googleys = ['bat', 'goblin', 'chest', 'potion']
    what = googleys[Math.floor(Math.random() * googleys.length)];
  } else {

  }
  var id = 0

  //id'er
  for (let i = 0; i < entities.length; i++) {
    if (entities[i].defaultName == what) {
      id += 1
    }
  }

  //coord checkifier
  let respawnAttempts = 49;
  var whatAnim = what
  for (let i = 0; i < respawnAttempts; i++) {
    //coord randifier
    if (sx == "shotinthedark") {
      sx = Math.floor(Math.random() * globalwidth)
      sy = Math.floor(Math.random() * globalheight)
    }
    if (coordsChecker("null!!", {
        x: sx,
        y: sy
      }) == true) {
      //anim config
      if (Array.isArray(eval(what))) {
        whatAnim = what + '[0]'
      }
      //evaluating
      var valuefinals = defaults[what]
      entities.push({
        defaultName: what,
        name: what + id,
        x: sx,
        y: sy,
        sprite: whatAnim,
        health: valuefinals.health,
        attack: valuefinals.attack,
        magic: valuefinals.magic,
        gold: valuefinals.gold,
        animframe: 0,
        animdivis: valuefinals.animdivis
      })
      position()
      break
    } else {
      console.log("fucked it already, freddy. for fucks sake")
      sx = 'shotinthedark'
    }
  }
}
