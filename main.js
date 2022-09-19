let left = null, right = null, oper = null;

function inputNum(num) {
  if(oper === null) {
    if(left === null) {
      left = `${num}`
    }
    else {
      if(num === 0 && parseInt(left) === 0)
        return;
      left += `${num}`
    }
  }
  else {
    if(right === null) {
      right = `${num}`
    }
    else {
      right += `${num}`
      if(num === 0 && parseInt(right) === 0)
        return;
    }
  }

  console.log(left);
}