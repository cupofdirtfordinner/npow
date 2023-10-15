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
const cursors= {
  red:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAMCAYAAACwXJejAAAAAXNSR0IArs4c6QAAAMtJREFUKFNjZCACMILUvLt3/7+QkiKYjQ2AJZ7tO/j/z6dPDHIBvlgVggUfLFry/9/nLwwgrFJRgqEQLHC7tfM/w5fPDAxfvzH8+/KZQX3ebBSFEEW5Bf//f/7MwPTtOwPD1y8MzN+/Myju2w1XCFEUHP6f6ds3BsZvXxmYv30DKwJhybu3wPJg4r6d43+QJNP37wysPyAK2H7+YGD9+YOB88sXRojvNHX+wxQIv3iG3eHvxCX/g3TyfHiPOwh+sbP/Z/v5E39gEooZAGM8XQ3RjtBLAAAAAElFTkSuQmCC",
  blue:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAMCAYAAACwXJejAAAAAXNSR0IArs4c6QAAALVJREFUKFNjZCACMILUvP30+b8wHy+YjQ2AJR6+eP3/5+8/DGqyklgVggWv3H/8/9efvwy/fv9hsNBSwVAIFjh+9fb/X79/M4AU/vz9m8HH0ghFIZiz68xlsKLfYEV/GH79+cMQ52YLVwhmrD14EmLdnz9gK2GKC0M9wfJgYuHOQ2CHwxSAFP///x/s0YooP0awosnrdoIV/fn7FyyIHgxggY5lm8DasCmAWwdShEsBXBGhmAEAKxxqDRA+MBQAAAAASUVORK5CYII=",
  outline:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAMCAYAAACwXJejAAAAAXNSR0IArs4c6QAAAElJREFUKFOV0VEKACAIA9B5/0MbCoLZVIqgjx6pSxRQABDffIkhA3Eydl128HmBQVqmwraXDMeGA47IJnVY60duOYq/CNYwt285lGssCa3n2h0AAAAASUVORK5CYII="
}
const weapons = ["fistIcon","swordIcon","shieldIcon"]