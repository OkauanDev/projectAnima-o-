
// Pegando todos os itens 
let list = document.querySelectorAll('.item')

// Os buttons
let next = document.getElementById('next')
let prev = document.getElementById('prev')


//Contando os items
let count = list.length  // count = 3 {0,1,2}
let active = 0

next.onclick = () => {
    let activeOld = document.querySelector('.active')
        activeOld.classList.remove('active')

            active = active >= count - 1 ? 0 : active + 1
                list[active].classList.add('active')
}

prev.onclick = () => {
    let activeOld = document.querySelector('.active')
        activeOld.classList.remove('active')

            active = active <= 0 ? count - 1 : active - 1
                list[active].classList.add('active')
}


console.log(list)
console.log(next)
console.log(prev)