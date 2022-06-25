const image = document.querySelector('#image');
const name = document.querySelector('#name');
const title = document.querySelector('#title');
const mainText = document.querySelector('#main-text')
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right')
const randomBtn = document.querySelector('#random')

const brandon = new Review('image/src1', 'Brandon Cloutier', 'Janitor', 'Hi im a janitor')
const jason = new Review('image/src2', 'Jason Lee', 'Mall Cop', 'Hi im a mall cop')
const cody = new Review('image/src3', 'Cody Man', 'Web Developer', 'hi im cody')
reviewArray = [brandon, jason, cody]

let reviewIndex = Math.floor(Math.random() * reviewArray.length)
let currentContent;


function Review(imgSrc, name, title, mainText) {
    this.imgSrc = imgSrc
    this.name = name
    this.title = title
    this.mainText = mainText
}

function setContent(object) {
    // image.src = object.imgSrc
    name.textContent = object.name
    title.textContent = object.title
    mainText.textContent = object.mainText
}
leftBtn.addEventListener('click', () => {
    reviewIndex -= 1;
    if (reviewIndex < 0){
        reviewIndex = reviewArray.length - 1
    }
    setContent(reviewArray[reviewIndex])
})
rightBtn.addEventListener('click', () => {
    reviewIndex += 1;
    if (reviewIndex > reviewArray.length - 1 ) {
        reviewIndex = 0;
    }
    setContent(reviewArray[reviewIndex])
})
randomBtn.addEventListener('click', () => {
    currentReviewIndex = reviewIndex;
    reviewIndex = Math.floor(Math.random() * reviewArray.length)
    while (currentReviewIndex === reviewIndex) {
        reviewIndex = Math.floor(Math.random() * reviewArray.length)
    }
    setContent(reviewArray[reviewIndex])
})

setContent(reviewArray[reviewIndex])