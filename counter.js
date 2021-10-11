findCounterBlock()
findCountValue()
bindClickListener()
restorePreviousValue()




function findCounterBlock() {
    return counterBlock =  document.querySelector('.counter')
}

function findCountValue() {
    return countValue =  document.querySelector('#count-value')
}


function bindClickListener() {
    counterBlock.addEventListener('click', () => {
        let currentValue = countValue.innerHTML
        currentValue++
    
        localStorage.setItem('counter-value', currentValue)
        countValue.innerHTML = currentValue
    })
}



function restorePreviousValue() {
    let savedCounterValue = localStorage.getItem('counter-value')
    if(!!savedCounterValue) {
        countValue.innerHTML = savedCounterValue
    }
}