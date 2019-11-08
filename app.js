let x = 0
let bool = false
let interval

const rotate = () => {
  const cubes = document.querySelectorAll('.cube')
  Array.from(cubes).forEach(cube => {
    cube.style.transform = `rotateY(${x}deg)`
  })
}

const playPause = () => {
  if (!bool) {
    interval = setInterval(() => {
      x -= 90
      rotate()
    }, 3000)
    changePlayPause()
    bool = true
  } else {
    clearInterval(interval)
    changePlayPause()
    bool = false
  }
}

const changePlayPause = () => {
  const i = document.querySelector('.play-pause i')
  const cls = i.classList[1]
  if (cls === 'fa-play') {
    i.classList.remove('fa-play')
    i.classList.add('fa-pause')
  } else {
    i.classList.remove('fa-pause')
    i.classList.add('fa-play')
  }
}

document.querySelector('.left-arrow').addEventListener('click', () => {
  x += 90
  rotate()
  if (bool) {
    playPause()
  }
})

document.querySelector('.right-arrow').addEventListener('click', () => {
  x -= 90
  rotate()
  if (bool) {
    playPause()
  }
})

document.querySelector('.play-pause').addEventListener('click', () => {
  playPause()
})
