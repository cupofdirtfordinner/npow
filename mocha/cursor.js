var mousex = 0
var mousey = 0

const cursorelem = document.querySelector('.cursor');
const outlineelem = document.querySelector('.outline');
cursorify("blue")
window.addEventListener('mousemove', function(event) {
  mousey = event.clientY
  mousex = event.clientX
  cursorelem.style.top = `${mousey}px`
  cursorelem.style.left = `${mousex}px`
  outlineelem.style.top = `${mousey}px`
  outlineelem.style.left = `${mousex}px`
  cursorunopacity()
})

function cursorify(huh) {
  cursorelem.setAttribute('src', cursors[huh])
  outlineelem.setAttribute('src', cursors.outline)
}

function cursorcolorer() {
  if (document.elementFromPoint(mousex, mousey).classList.contains('object') ) {
    cursorify("red")
    console.log('docelemfrompointmosexmoseycontained object')
  } else {
   cursorify("blue")
  }
}

function cursoropacity() {
  if (cursorelem.style.opacity == 1) {
    cursorelem.style.opacity = "0.5"
    outlineelem.style.opacity = "0.5"
    setTimeout(cursornopacity, 3000) //maybe use classes and set animations to look cleaner?
  }
}
//fix these, break timers and stuff
function cursorunopacity() {
  cursorelem.style.opacity = "1"
  outlineelem.style.opacity = "1"
}
function cursornopacity() {
  cursorelem.style.opacity = "0.05"
  outlineelem.style.opacity = "0.05"
}