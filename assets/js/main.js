/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
      document.body.classList.add('show-menu')
   })
}

/* Hide menu */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
      document.body.classList.remove('show-menu')
   })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link, .nav__contact')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   navMenu.classList.remove('show-menu')
   document.body.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE HEADER STYLES ===============*/
const header = document.getElementById('header')

const changeHeader = () => {
   // Only apply scroll effect on desktop (width >= 1150px)
   if(window.innerWidth >= 1150){
      if(window.scrollY >= 80){
         header.classList.add('bg-header')
      } else {
         header.classList.remove('bg-header')
      }
   }
}
window.addEventListener('scroll', changeHeader)

/*=============== ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
   const scrollDown = window.scrollY

   sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__link[href*=' + sectionId + ']')

      if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
         sectionsClass?.classList.add('active-link')
      } else {
         sectionsClass?.classList.remove('active-link')
      }
   })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATIONS ===============*/
const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2500,
   delay: 400,
})

sr.reveal('.home__content, .home__image', { origin: 'center', interval: 100 })
sr.reveal('.experience__card, .project-card, .testimonial-card, .skills__category, .certification-badge', { interval: 100 })
sr.reveal('.contact__form, .contact__info', { origin: 'left', interval: 50 })

/*=============== SCROLL UP ===============*/
const scrollUp = document.getElementById('scroll-up')

const scrollUpAction = () => {
   if(window.scrollY >= 350){
      scrollUp.classList.add('show-scroll')
   } else {
      scrollUp.classList.remove('show-scroll')
   }
}
window.addEventListener('scroll', scrollUpAction)

if(scrollUp){
   scrollUp.addEventListener('click', (e) => {
      e.preventDefault()
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      })
   })
}

/*=============== EMAIL JS - Send email functionality ===============*/
const contactForm = document.querySelector('.contact__form')

if(contactForm){
   contactForm.addEventListener('submit', (e) => {
      e.preventDefault()

      const name = document.getElementById('name').value
      const email = document.getElementById('email').value
      const subject = document.getElementById('subject').value
      const message = document.getElementById('message').value

      if(name && email && subject && message){
         alert(`Thank you ${name}! Your message has been sent successfully.`)
         contactForm.reset()
      } else {
         alert('Please fill in all fields!')
      }
   })
} 