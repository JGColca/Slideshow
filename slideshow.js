let container = document.getElementById('container')

i = 0;
function slideshow() {
    
    
    container.innerHTML = `<img src="${slides[i]}">`
    console.log(slides[i])
    i = i + 1;
    if (i === slides.length) {
        i = 0;
    }
    return i;
    
    }


setInterval(slideshow, 2000)
