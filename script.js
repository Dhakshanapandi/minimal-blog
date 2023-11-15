const mobileMenu = document.querySelector('.mobile-menu')

mobileMenu.addEventListener('click',()=>{
    document.querySelector('.menu').classList.toggle('show')
})

const scrollbtn = document.querySelector(".scroll-top")

// to show btn
window.addEventListener('scroll',()=>{
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        scrollbtn.style.display = 'block'
    }
    else{

        scrollbtn.style.display = 'none'
    }
        
})

// to Top
scrollbtn.addEventListener('click',()=>{
    document.documentElement.scrollTop = 0
})