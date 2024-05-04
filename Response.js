/* --SHOW MENU-- */
const navMenu = document.getElementById('navigation-menu'),
navToggle = document.getElementById('navigation-toggle'),
navClose = document.getElementById('navigation-close')

/* --MENU SHOW-- */
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    }    
    )
}

/* --MENU HIDDEN-- */
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    }
    )
}

/* --REMOVE MENU MOBILE-- */
const navLink = document.querySelectorAll('.navigation-link')

const linkAction = () =>{
    const navMenu = document.getElementById('navigation-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* --CHANGE BACKGROUND HEADER-- */
const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowHeader)


/* --CONTACT ME (EMAIL)-- */
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')
    
const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_3h3qes5','template_oy2elvq','#contact-form','7q4o0ONDC8FreR1D7')
    .then(() =>{
        contactMessage.textContent = 'Message Sent Successfully 😊'

        setTimeout(() => {
            contactMessage.textContent = ''
        },5000)

        contactForm.reset()
    }, () => {
        contactMessage.textContent = 'Message NOT Sent 😱'
    }
)
}

contactForm.addEventListener('submit', sendEmail)

/* --SCROLL SECTIONS ACTIVE LINK-- */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.navigation-menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll',scrollActive)

/* --SHOW SCROLL UP--  */
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                            : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)


/* --SCROLL REVEAL ANIMATIONS-- */

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true,

})

sr.reveal(`.home-perfil,
           .about-image, 
           .contact-mail`,{origin: 'right'})
sr.reveal(`.home-name, .home-info, 
            .about-container .section__title-1, 
            .about-info,
            .contact-social, .contact-data`,{origin: 'left'})
// sr.reveal('.skills-frontend, .skills-backend' , {origin: 'left'})
sr.reveal(`.skill-card`,{interval: 100})