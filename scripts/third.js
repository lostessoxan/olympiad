const thirdTaskBtn = document.getElementById('thirdTaskBtn'),
      thirdTaskInput1 = document.getElementById('thirdTaskInput-1'),
      thirdTaskInput2 = document.getElementById('thirdTaskInput-2'),
      answerBox3 = document.getElementById('thirdTaskAnswerBox');

// ==================================== js
// ==================================== js
// ==================================== js

let counter = 0;

thirdTaskBtn.onclick = () => {
    if(counter === 0) answerBox3.style.transform = 'scaleX(1)'
    else {
        answerBox3.style.transform = 'scaleX(0)'
        setTimeout(() => {
            answerBox3.style.transform = 'scaleX(1)'
        }, 200)
        counter++;
    }
    counter++
    
    // ------------------------------------

    let n = parseInt(thirdTaskInput1.value),
        m = parseInt(thirdTaskInput2.value),
        count = 0;
    let packsArr = []

    function secondFunc(k) {
        if (m === 0) {
            packsArr = [0]
            return
        }
        if(k / m < 1) while (k / m < 1) m--;
        else if (count + m > n) return;
        else initFunc(k / m);
        
        if(packsArr[packsArr.length - 1] != m && m != 0) {
            packsArr.push(m)
            return
        }
    }
    
    function initFunc(k) {
        // debugger
        for (let i = 0; i < k; i++) {
            // console.log(i);
            packsArr.push(m)
            count += m--
        }
    
        secondFunc(n - count)
    }
    
    debugger
    if (n <= m) packsArr.push(n)
    if (m <= n / 2) packsArr = [0]
    else if (n > m) initFunc(parseInt(n / m))
    
    // console.log(packsArr);

    // =================

    if(packsArr.length === 0) answerBox3.innerHTML = 0;
    else {
        // if(packsArr[packsArr.length - 1] === 0) packsArr.length -= 1
        answerBox3.innerHTML = packsArr;
    }
}



