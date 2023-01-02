const loaderEl = document.querySelector('.loader')

const loaderToggle = (info) => {
    if (info) {
        loaderEl.classList.remove('hidden')
    } else {
        loaderEl.classList.add('hidden')
    }
}

export default loaderToggle