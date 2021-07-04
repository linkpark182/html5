/*menu show and hidden*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*show menu*/

if(navToggle){
    navToggle.addEventListener('click',()=>{
        //console.log('aqui')
        navMenu.classList.add('show-menu')
        //console.log('aqui 2')
    })
}

/*hidde menu*/ 
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*remove menu mobile*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*accordion skills */

const skillsContent = document.getElementsByClassName('skills__content'),
      skillHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    
    let itemClass = this.parentNode.className
    console.log('hey'+itemClass)

    for(i=0; i<skillsContent.length; i++){
        skillsContent[i].className='skills__content skills__close'
    }
    if(itemClass == 'skills__content skills__close'){
       
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillHeader.forEach((el)=>{
    el.addEventListener('click',toggleSkills)
})

/*qualification tabs*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })

        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })

        tab.classList.add('qualification__active')
    })
})

/*services modal*/

const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn,i)=>{
    modalBtn.addEventListener('click', () =>{
        //console.log('valor '+ i)
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click',()=>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal')
        })
    })
})

/*portfolio swiper*/
let swiper = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    }
  });

  /*testimonial swiper*/
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView:2,

        }
    }
  });


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            // error
            console.log('valor')
            console.log(sectionId)
            
            //if(!document.querySelector('.nav__menu a[href*=' + sectionId + ']') === null){
                console.log(document.querySelector('.nav__menu a[href*=' + sectionId + ']'))
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
            //}
            //document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else
        {
            console.log(document.querySelector('.nav__menu a[href*=' + sectionId + ']'))
            //Error
            //if(!document.querySelector('.nav__menu a[href*=' + sectionId + ']') === null){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
            //}
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header_scroll_val')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); 
    else nav.classList.remove('scroll-header')
    
}
window.addEventListener('scroll', scrollHeader)
