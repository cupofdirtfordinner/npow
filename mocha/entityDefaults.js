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
  animframe: 0,
  currentWeapon: 0,
  effect: '',
  damage: 5,
  moveto: [],
  instructions: 15,
  instructionsdefault: 15
}

var defaults = {
  bat: {
    defaultName: "bat",
    health: 6,
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
    defaultName: "chest",
    health: 1,
    attack: 10,
    magic: 10,
    gold: 0,
    animframe: 0,
    animdivis: 1
  },
  potion: {
    defaultName: "potion",
    health: 1,
    attack: 10,
    magic: 10,
    gold: 0,
    animframe: 0,
    animdivis: 1 //change animdivis later, right now there's a weird bug with it.
  },

}