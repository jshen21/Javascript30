const video = document.querySelector('.player__video.viewer')
const togglePlay = document.querySelector('.player__button.toggle')
const volume = document.querySelector('.player__slider')
const playbackRate = document.querySelector('input[name="playbackRate"]')
const skipButtons = document.querySelectorAll('button[data-skip]')
const rangeButtons = document.querySelectorAll('.player__slider')
const progress = document.querySelector('.progress')
const progressBar = document.querySelector('.progress__filled')

function togglePlayPause() {
    if (video.paused || video.ended) {
        video.play();
        togglePlay.textContent = '❚ ❚'
    } else {
        video.pause();
        togglePlay.textContent = '►'
    }
}

function handleSkip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRange() {
    video[this.name] = this.value
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis = `${percent}%`
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = scrubTime
}

video.addEventListener('click', togglePlayPause)
video.addEventListener('timeupdate', handleProgress)
togglePlay.addEventListener('click', togglePlayPause)
skipButtons.forEach(skip => skip.addEventListener('click', handleSkip))
rangeButtons.forEach(range => range.addEventListener('input', handleRange))

let mousedown = false
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)
