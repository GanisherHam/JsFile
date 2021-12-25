const slides = document.querySelectorAll(`.slide`)

slides.forEach(slide => {
    slide.addEventListener(`click`, function() {
        removeActive(slides);
        this.classList.add(`active`);
    })
    console.log(slide);
})

// this  в обработчике события обращается к элементу на который вушаем обработчик события.

function removeActive(array) {
    array.forEach(item => {
        item.classList.remove(`active`)
    })
}