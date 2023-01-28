let fourthTaskBtn = document.getElementById('fourthTaskBtn'),
    answerBox4 = document.getElementById('fourthTaskAnswerBox');

fourthTaskBtn.onclick = () => {

    answerBox4.style.transform = 'scaleX(1)'

    let A = parseInt(document.getElementById('fourthTaskInput-1').value),
    B = parseInt(document.getElementById('fourthTaskInput-2').value),
    t = parseInt(document.getElementById('fourthTaskInput-3').value);

    debugger
    if (A === 0 && B === 0) answerBox4.innerHTML = 0
    else {
        A = (A === 0) ? 999999999999 : A
        B = (B === 0) ? 999999999999 : B

        answerBox4.innerHTML = `Время: ${Math.min(
            t < A ? A - t 
                  : (t % A === 0 ? 0
                  : A - (t % A)),
    
            t < B ? B - t 
                  : (t % B === 0 ? 0
                  : B - (t % B))
        )}`
    }
}


