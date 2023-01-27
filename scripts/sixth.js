let sixthTaskBtn = document.getElementById('sixthTaskBtn'),
    answerBox6 = document.getElementById('sixthTaskAnswerBox');

sixthTaskBtn.onclick = () => {

    // debugger
    
    let sixthTaskInput1 = parseInt(document.getElementById('sixthTaskInput-1').value),
        sixthTaskInput2 = parseInt(document.getElementById('sixthTaskInput-2').value);
    
    answerBox6.style.transform = 'scaleX(1)'


    // =========================================== js >>

    const getNum = (a, b, n) => {
        if (a + b >= n) return a + b - n
        return a + b  
    }
    
    const getCountOfJumps = () => {
        let n = sixthTaskInput1,
            k = sixthTaskInput2,
    
            boolArr = [],
            zeroArr = [];
    
        boolArr.length, zeroArr.length = n
    
        for (let i = 0; i < n; i++) {
            boolArr[i] = false
            zeroArr[i] = 0
        }
    
        let step1 = k % n,
            step2 = (k + 1) % n

            // console.log(step1);
            // console.log(step2);
     
        boolArr[step1], boolArr[step2] = true
        
        let q = []
        for (let i = 0; i < n * 10; i++) q[i] = 0
        q[0] = step1
        q[1] = step2
     
        let top = 0, back = 2
     
        zeroArr[step1] = 1
        zeroArr[step2] = 1
    
        while (!boolArr[0]) {
            let node = q[top]
            top += 1
    
            if (!boolArr[getNum(node, step1, n)]) {
                boolArr[getNum(node, step1, n)] = true
                zeroArr[getNum(node, step1, n)] = zeroArr[node] + 1
                q[back] = (getNum(node, step1, n))
                back += 1
            }
    
            if (!boolArr[getNum(node, step2, n)]) {
                boolArr[getNum(node, step2, n)] = true
                zeroArr[getNum(node, step2, n)] = zeroArr[node] + 1
                q[back] = (getNum(node, step2, n))
                back += 1
            }
        }
    
        return zeroArr[0]
    }

    // debugger
    
    answerBox6.innerHTML = `Прыжки = ${getCountOfJumps()}`
}
