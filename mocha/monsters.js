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
