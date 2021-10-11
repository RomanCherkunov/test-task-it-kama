const stars = findAllStars()

bindClickListener(stars)

restorePreviousValue(stars)




function findAllStars() {
    let stars = document.querySelectorAll('.stars img')
    return stars

}

function bindClickListener(stars) {
    stars.forEach(star => {
        star.addEventListener('click', (e) => {
            let activeStars = document.querySelectorAll('.stars img.active')
            activeStars.forEach(star => star.classList.remove('active'))
            let clickedStarIDX = 0
            let clickedStar = e.target
            for( let i = 0; i < stars.length; i++) {
                stars[i].classList.add('active')
                if(stars[i] === clickedStar) {
                    clickedStarIDX = i
                    break
                }
            }
            localStorage.setItem('rating-value', clickedStarIDX)
        })
    })
}

function restorePreviousValue(stars) {
   let savedValue = localStorage.getItem('rating-value')
   if(!!savedValue) {
    for( let i = 0; i < stars.length; i++) {
        stars[i].classList.add('active')
        if(i === +savedValue) {
            break
        }
    }
   }

}