const slides = document.querySelectorAll(".offer__slide"),
      prev = document.querySelector(".offer__slider-prev"),
      next = document.querySelector(".offer__slider-next"),
      slidesWrapper = document.querySelector('.offer__slider-wrapper'),  
      width = window.getComputedStyle(slidesWrapper).width,            
      slidesField = document.querySelector('.offer__slider-inner')
      
      let slideIndex = 1            

showSlides(slideIndex)        
function showSlides(n) {     
    if (n > slides.length) {  
        slideIndex = 1         
    }
    if (n < 1){                
        slideIndex = slides.length
    }
    slides.forEach(item =>{
        item.style.display = 'none'    
    })
    slides[slideIndex - 1].style.display = 'block' 
}
    prev.addEventListener('click', function(){   
        showSlides(slideIndex +=-1);  
    });

    next.addEventListener('click', function(){
        showSlides(slideIndex +=1);
    });
