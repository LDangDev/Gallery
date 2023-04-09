let images = document.querySelectorAll('.image img')
let gallery = document.querySelector('.gallery')
let galleryImage = document.querySelector('.gallery__img img')
let closeBtn = document.querySelector('.gallery__close')
let prevBtn = document.querySelector('.gallery__prevbtn')
let nextBtn = document.querySelector('.gallery__nextbtn')

let currentIndex = 0

function showImage(){
    if(currentIndex === 0){
        prevBtn.classList.add('hide')
    }else if(currentIndex === images.length - 1){
        nextBtn.classList.add('hide')
    }else{
        prevBtn.classList.remove('hide')
        nextBtn.classList.remove('hide')
    }
    galleryImage.src = images[currentIndex].src
    gallery.classList.remove('hide')
}

images.forEach(function(image, index){
    image.addEventListener('click', function(){
        currentIndex = index
        showImage()
    })
})

prevBtn.addEventListener('click', function(){
    if(currentIndex > 0){
        currentIndex--;
        showImage()
    }
})

nextBtn.addEventListener('click', function(){
    if(currentIndex < images.length){
        currentIndex++;
        showImage()
    }
})

closeBtn.addEventListener('click', function(){
    gallery.classList.add('hide')
})
