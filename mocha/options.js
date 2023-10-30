document.getElementById('coord').addEventListener('change', function() {
  if (this.checked === true) {
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
  if (this.checked === true) {
    for (let i = 0; i < document.querySelectorAll('.div').length; i++) {
      document.querySelectorAll('div')[i].classList.add('transitionless')
    }
  } else {
    for (let i = 0; i < document.querySelectorAll('.div').length; i++) {
      document.querySelectorAll('div')[i].classList.remove( 'transitionless' )
    }
  }
})
var batterysaver = 30
document.getElementById('batt').addEventListener('change', function() {
  if (this.checked === true) {
    batterysaver = 240
  } else {
    batterysaver = 30
  }
})
document.getElementById('debu').addEventListener('change', function() {
  if (this.checked === false) {
   document.querySelector(".debug").style.display = "none"
  } else {
   document.querySelector(".debug").style.display = "block"
  }
})