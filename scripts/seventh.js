let seventhTaskBtn = document.getElementById('seventhTaskBtn'),
    answerBox7 = document.getElementById('seventhTaskAnswerBox');

seventhTaskBtn.onclick = () => {

    answerBox7.style.transform = 'scaleX(1)'

    let seventhTaskInput1 = parseInt(document.getElementById('seventhTaskInput-1').value),
        seventhTaskInput2 = document.getElementById('seventhTaskInput-2').value;

    // =============== js
    let k = seventhTaskInput1,
        arr = seventhTaskInput2.split(',');

    arr = arr.map(el => parseInt(el))

    let res = 0,
        res2 = 0,
        temp = arr.map(el => el);

    function getSameNums(arr) {
        for (let i = 0; i < arr.length; i++) {
            while (arr[i] > 1) {
                if(arr[i] - 1 === 1) {
                    arr[i] -= 1
                    res += 1
                }
                // деление на 2. 
                while(parseInt(arr[i] / 2) >= 1) {

                    if (k > 3 && arr[i] < 11) {
                        while (arr[i] - 1 >= 1) {
                            arr[i] -= 1
                            res += 1
                        }
                        continue
                    }

                    arr[i] = parseInt(arr[i] / 2)
                    res += k
                }
                // минус еденица.
                if (arr[i] - 1 >= 1) {
                    arr[i] -= 1
                    res += 1
                }
            } 
        }
        return res
    }

    function getSameNums2(arr) {
        for (let i = 0; i < arr.length; i++) {
            while (arr[i] > 1) {
                // минус еденица.
                if (arr[i] - 1 >= 1) {
                    arr[i] -= 1
                    res2 += 1
                }
            } 
        }
        return res2
    }   

    answerBox7.innerHTML = k === 0 ? 0 : answerBox7.innerHTML = `Мин-е кол-во <br>энергии = ${Math.min(getSameNums(arr), getSameNums2(temp))}}`
}


