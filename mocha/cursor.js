//init
var mousex = 0
var mousey = 0

const cursorelem = document.querySelector('.cursor');
const outlineelem = document.querySelector('.outline');
cursorify("blue")

//move custom cursor
window.addEventListener('mousemove', function(event) {
  mousey = event.clientY - 5
  mousex = event.clientX - 4
  cursorelem.style.top = `${mousey}px`
  cursorelem.style.left = `${mousex}px`
  outlineelem.style.top = `${mousey}px`
  outlineelem.style.left = `${mousex}px`
  cursorunopacity()
})

// change cursor color
function cursorify(huh) {
  cursorelem.setAttribute('src', cursors[huh])
  outlineelem.setAttribute('src', cursors.outline)
}

function cursorcolorer() {
  if (document.elementFromPoint(mousex, mousey) ) {  //otherwise this outputs like a billion errors in the console
    if (document.elementFromPoint(mousex, mousey).classList.contains('object') ) {
      cursorify("red")
    } else {
    cursorify("blue")
    }
  }
}

//hide or show if inside page
document.addEventListener("mouseover", mouseInPage);
document.addEventListener("mouseout", mouseOutPage); //I have the theme from #1 best flash game of all time "Dad N' Me" stuck in my head. i just thought you should know that, code comment reader
function mouseInPage() {
    cursorelem.style.display = "inline"
    outlineelem.style.display = "inline"
}
function mouseOutPage() {
    cursorelem.style.display = "none"
    outlineelem.style.display = "none"
}

//hide after pressing keys
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