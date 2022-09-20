let left = null,
    right = null,
    oper = null,
    res = false,
    resValue = null;

function save() {
    const inp = document.getElementById("top-input");
    let value = ""

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
        // let resValue = "";
        switch (oper) { // 사칙연산
            case "+":
                resValue = parseInt(left) + parseInt(right)
                break;
            case "-":
                resValue = parseInt(left) - parseInt(right)
                break;
            case "*":
                resValue = parseInt(left) * parseInt(right)
                break;
            case "/":
                resValue = parseInt(left) / parseInt(right)
                break;
        }

        value += `= ` + resValue;
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

// 연산자의 경우, null일 때는 input이 안되어야 함
function inputOper(op) {
    // 음수일 경우 (parseInt 시 음수로 표시)
    if(left === null && op === "-") {
        left = "-"
        save();
        return;
    }
    // left가 null은 아닌데 마이너스일 경우
    if(left === "-" && op === "-") {
        return;
    }
    // 연산자가 마이너스인데 기존의 값이 존재하고(null이 아닐 때) right가 null이면
    if(op === "-" && op !== null && right === null) {
        right = "-"
        save();
        return;
    }
    // null이 아니면 연산자에 담아준다
    oper = op;
    save();
}

function inputEqu() {
    // 결과값 res를 도출하기 위해 사칙연산 부분의 res를 전역변수로 변경 (resValue)
    // =을 누르면 결과값 계산
    // 계산된 상태에서 =을 한번 더 누르면 계산식과 연산자는 모두 초기화 후 resValue만 보여줌
    if(res) {
        left = resValue
        right = null
        resValue = null
        oper = null
        res = false
    }
    // 결과값 res는 true, save 호출
    else {
        res = true
    }
    save();
}