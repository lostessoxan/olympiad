let fifthTaskBtn = document.getElementById('fifthTaskBtn'),
    answerBox5 = document.getElementById('fifthTaskAnswerBox'),
    result, arr

// -------------------------------------

fifthTaskBtn.onclick = () => {

    answerBox5.style.transform = 'scaleX(1)'

    result = 0

    let numberOfPoints = document.getElementById('fifthTaskInput-1'),
        numberOfDinosaurs = document.getElementById('fifthTaskInput-2'),
        cost = document.getElementById('fifthTaskInput-3'),

        requiredPoints = 0,

        p1 = document.getElementById('fifthTaskInput-4'),
        p2 = document.getElementById('fifthTaskInput-5'),
        p3 = document.getElementById('fifthTaskInput-6');

    // ===============================

    arr = [parseInt(p1.value), parseInt(p2.value), parseInt(p3.value)]

    numberOfPoints = parseInt(numberOfPoints.value)
    numberOfDinosaurs = parseInt(numberOfDinosaurs.value)
    cost = parseInt(cost.value)

    requiredPoints = numberOfDinosaurs * cost

    p1 = parseInt(p1.value)
    p2 = parseInt(p2.value)
    p3 = parseInt(p3.value)

    // debugger

    // console.log(111);
    

    if (numberOfPoints >= requiredPoints) result = 0
    else {
        if (p1 === 0 && p2 === 0 && p3 === 0) result = 'not real'
        else {
            for (j = 0; numberOfPoints < requiredPoints;) {
                result++
                numberOfPoints += arr[j]
    
                if (j === 2) {
                    j = 0
                    continue
                }
    
                j++
            }
        }
    }

    answerBox5.innerHTML = `Результат: ${result}`
}




