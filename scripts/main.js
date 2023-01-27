let boxArr = document.querySelectorAll('.box')
let navBtns = document.querySelectorAll('nav .navbar-btn')

boxArr.forEach(el => {
    el.style.display = 'none'
})

boxArr[0].style.display = 'block'
boxArr[0].style.opacity = 1

navBtns.forEach(el => {
    el.addEventListener('click', () => {
        let str = el.getAttribute('id').slice(7, el.length)

        boxArr.forEach(el => {
            el.style.display = 'none'
            el.style.opacity = 0
        })

        boxArr.forEach(el => {
            if (el.getAttribute('id') === str) {
                el.style.display = 'block'
                setTimeout(() => {
                    el.style.opacity = 1
                }, 0)
            }
        })
    })
})
