const hamburger=document.querySelector('#hamburger')
const ul=document.querySelector('#mobile-menu')
hamburger.addEventListener('click',()=>{
    ul.classList.toggle('top-[-3000px]')
    ul.classList.toggle('top-[100px]')
    document.body.classList.toggle('overflow-hidden')
})