const secondTaskBtn = document.getElementById('secondTaskBtn'),
      secondTaskInput1 = document.getElementById('secondTaskInput-1'),
      answerBox = document.getElementById('secondTaskAnswerBox');

// ============================================ js
// ============================================ js
// ============================================ js

let count = 0;

secondTaskBtn.onclick = () => {

    if(count === 0) answerBox.style.transform = 'scaleX(1)'
    else {
        answerBox.style.transform = 'scaleX(0)'
        setTimeout(() => {
            answerBox.style.transform = 'scaleX(1)'
        }, 200)
        count++;
    }
    
    count++

    // ------------------------------------

    let length = parseInt(secondTaskInput1.value)

    function GetNum(toadStep, grasshopperStep) {
        let res = 100,
            time = 0

        for (let i = 0, j = length - 1; ; i += toadStep, j -= grasshopperStep) {
            if (i === j) return res = time
            if(i > j) return res
            time++
        }
        
    }

    let Instance1 = GetNum(2, 1),
        Instance2 = GetNum(3, 1),
        Instance3 = GetNum(2, 2),
        Instance4 = GetNum(3, 2),
        min = Math.min(Instance1, Instance2, Instance3, Instance4);

    min = min === 100 ? -1 : (min === 0 ? -1 : min);
    console.log(`Результат: ${min}`);

    answerBox.innerHTML = min;
}





