let firstTaskBtn = document.getElementById('firstTaskBtn'),
    answerBox1 = document.getElementById('firstTaskAnswerBox');

firstTaskBtn.onclick = () => {
    
    answerBox1.style.transform = 'scaleX(1)'

    let firstTaskInput1 = document.getElementById('firstTaskInput-1').value,
        firstTaskInput2 = document.getElementById('firstTaskInput-2').value;

    let firstDateArr = firstTaskInput1.split('.')
        secondDateArr = firstTaskInput2.split('.')

    let date1 = new Date(`${firstDateArr[2]}-${firstDateArr[1]}-${firstDateArr[0]}`)
    let date2 = new Date(`${secondDateArr[2]}-${secondDateArr[1]}-${secondDateArr[0]}`)

    // console.log(`${firstDateArr[2]}-${firstDateArr[1]}-${firstDateArr[0]}`);
    // console.log(`${secondDateArr[2]}-${secondDateArr[1]}-${secondDateArr[0]}`);

    let diffDays = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24))
    console.log(answerBox1);
    answerBox1.innerHTML = diffDays;
}


