let left = null,
    right = null,
    oper = null,
    res = false;

function save() {
    const inp = document.getElementById("top-input");
    const value = ""

    if (left === null)
        return;
    value += left + " "
    inp.value = value // 결과값

    if (oper === null)
        return;
    value += oper + " "
    inp.value = value // 결과값

    if (right === null)
        return;
    value += right + " "
    inp.value = value // 결과값

    if (res) { // 참이면
        let res = "";
        switch (oper) { // 사칙연산
            case "+":
                res = parseInt(left) + parseInt(right)
                break;
            case "-":
                res = parseInt(left) - parseInt(right)
                break;
            case "*":
                res = parseInt(left) * parseInt(right)
                break;
            case "/":
                res = parseInt(left) / parseInt(right)
                break;
        }

        value += `= ` + res;
        inp.value = value // 결과값
    }
}

function inputNum(num) {
    if (oper === null) {
        if (left === null) {
            left = `${num}` // formatting (or num.toString())
        }
        else {
            if (num === 0 && parseInt(left) === 0)
                return;
            left += `${num}`
        }
        console.log("flag1", left)
    }
    else {
        if (right === null) {
            right = `${num}`
        }
        else {
            if (num === 0 && parseInt(right) === 0)
                return;
            right += `${num}`
        }
    }
    save(); // input한다음 save 호출, 바로 대응
}