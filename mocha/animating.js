var frame = 0;

var regexStringifySpriteArrays = /([a-z]+)(\[([	0-9]+)\])/;

function animate() {
  frame += 1;
  for (let i = 0; i < entities.length; i++) {
    var nameOfArray = String(entities[i].sprite).match(regexStringifySpriteArrays)
    if (Array.isArray(nameOfArray)) {
      if (Array.isArray(eval(String(nameOfArray[1])))) { //i realise now, at 1:05 PM 10/6/2023, i could have just base64 encoded gifs. but i did not do that. i made my life expoNENtially harder than it needed to be. like with an exponent. crazy
        frame += 1
        if (frame % entities[i].animdivis === 0) {
          entities[i].animframe += 1
        }
        if (entities[i].animframe > eval(nameOfArray[1]).length - 1) {
          entities[i].animframe = 0
        } //resets animframe to 0 if its more than the ammount of sprites in the sprite array
        var newAnimatedSpriteFrame = String(entities[i].defaultName + '[' + ([entities[i].animframe]) + ']')
        entities[i].sprite = newAnimatedSpriteFrame
        document.getElementById(entities[i].x + '-' + entities[i].y + "bg1").setAttribute("src", eval(newAnimatedSpriteFrame));
      }
    }
  } //this took weeks of my life.
}

setInterval(function() {
  animate();
}, 300); //change this to like 50 after fixing animdivis bug

//////--//////

//anim helper
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
sleep(2000).then(() => {
  const pgloads = document.querySelectorAll('.pageload')
  for (let i = 0; i < pgloads.length; i++) {
    pgloads[i].classList.remove('pageload')
    pgloads[i].classList.add('stopanims')
  }
});