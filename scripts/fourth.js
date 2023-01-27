
let 
    fourthTaskBtn = document.getElementById('fourthTaskBtn'),
    answerBox4 = document.getElementById('fourthTaskAnswerBox'),
    timeWhenFirstBegin,
    timeWhenSecondBegin;

fourthTaskBtn.onclick = () => {

    answerBox4.style.transform = 'scaleX(1)'

    let firstFilmTime = parseInt(document.getElementById('fourthTaskInput-1').value),
    secondFilmTime = parseInt(document.getElementById('fourthTaskInput-2').value),
    t = parseInt(document.getElementById('fourthTaskInput-3').value);

    timeWhenFirstBegin = t < firstFilmTime ? firstFilmTime - t 
                                        : (t % firstFilmTime === 0 ? 0
                                        : firstFilmTime - (t % 3)); 

    timeWhenSecondBegin = t < secondFilmTime ? secondFilmTime - t 
                                        : (t % secondFilmTime === 0 ? 0
                                        : secondFilmTime - (t % 3)); 

    //console.log(`Время: ${Math.min(timeWhenFirstBegin, timeWhenSecondBegin)}`);

    answerBox4.innerHTML = `Время: ${Math.min(timeWhenFirstBegin, timeWhenSecondBegin)}`
}


