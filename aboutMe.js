const slides = document.querySelectorAll(".slide")
var count = 0;
slides.forEach(
    (slide,index) => {
        slide.style.left = `${index * 100}%`
    }
)
const SlideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${count * 100}%)`
        }
    )
}
const NextSlide = () =>{
    count++;
    if (count >= slides.length) {
        count = 0; // Reset count if it exceeds the number of slides
    }
    SlideImage()
}
const PrevSlide = () => {
    count--;
    if (count < 0) {
        count = slides.length - 1; // Set count to the last slide index if it becomes negative
    }
    SlideImage()
}


