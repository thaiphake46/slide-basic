const slider = document.querySelector('.img-slider')
const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')

const heading = document.querySelector('.caption h1')
const description = document.querySelector('.caption p')

const imgs = [
  'img1.avif', 'img2.avif', 'img3.avif'
]

const headings = [
  'New York, USA',
  'Tokyo, Japan',
  'Dubai, UAE'
]

const descriptions = [
  'The city that never sleeps',
  'The city of lights',
  'Home to the tallest skyscraper'
]

// slide id
let id = 0

function slide(id) {
  // set the bg img
  slider.style.backgroundImage = `url(img/${imgs[id]})`

  // add img fade animation
  slider.classList.add('img-fade')

  setTimeout(function() {
    slider.classList.remove('img-fade')
  }, 550)

  heading.inneText = headings[id]
  description.innerText = descriptions[id]
}

arrowLeft.addEventListener('click', function() {
  id--
  if(id < 0) id = imgs.length-1
  slide(id)
})

arrowRight.addEventListener('click', function() {
  id++
  if(id > imgs.length-1) id = 0
  slide(id)
})