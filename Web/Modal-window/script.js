'use strict';

const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const btnCloseModal = document.querySelector(".close-modal")
const btnsOpenModal = document.querySelectorAll(".show-modal")

//creating function for opening and closing the modal window
const openModalFunc = function() {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const closeModalFunc = function() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

//function to handle if any of 3 buttons are pressed
for (let i=0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModalFunc)
}

//using created function above to close the modal window
btnCloseModal.addEventListener('click', closeModalFunc)
overlay.addEventListener('click', closeModalFunc)

//handling an escape key and closing the modal window
document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        if(!modal.classList.contains('hidden')){
            modal.classList.add('hidden')
            overlay.classList.add('hidden')
        }
    }
})
    


