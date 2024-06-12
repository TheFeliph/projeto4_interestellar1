document.addEventListener('DOMContentLoaded', function () {
    const sectionLogo = document.querySelector('.logo-interstellar')
    const heightSectionLogo = sectionLogo.clientHeight

    let lastPosition = window.scrollY

    window.addEventListener('scroll', function () {
        const currentPosition = window.scrollY
        const rocket = document.querySelector('.rocket')

        if (currentPosition < heightSectionLogo) {
            hiddenRocket()
        } else {
            displayRocket()
        }

        if (currentPosition > lastPosition) {
            rocket.style.transform = 'rotate(180deg)';
        } else {
            rocket.style.transform = 'rotate(0deg)';
        }

        lastPosition = currentPosition
    })

    window.addEventListener('load', function () {
        const logoInterstellar = document.querySelector('.logo-interstellar__item')
        setTimeout(function () {
            logoInterstellar.style.opacity = 1
            logoInterstellar.style.transform = 'scale(1.05)'

        }, 500)
    })
})

function hiddenRocket() {
    const rocket = document.querySelector('.rocket')
    rocket.classList.add('rocket--is-hidden')
}

function displayRocket() {
    const rocket = document.querySelector('.rocket')
    rocket.classList.remove('rocket--is-hidden')
}