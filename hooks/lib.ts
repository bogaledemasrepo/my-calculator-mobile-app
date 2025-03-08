function calc(op: string, arr: string[]) {
  let controler = 0;
  let index = arr.indexOf(op);
  if (index) {
    controler =
      op === "X"
        ? parseFloat(arr[index - 1]) * parseFloat(arr[index + 1])
        : op === "/"
        ? parseFloat(arr[index - 1]) / parseFloat(arr[index + 1])
        : op === "%"
        ? parseFloat(arr[index - 1]) % parseFloat(arr[index + 1])
        : op === "+"
        ? parseFloat(arr[index - 1]) + parseFloat(arr[index + 1])
        : parseFloat(arr[index - 1]) - parseFloat(arr[index + 1]);
    arr = [
      ...arr.slice(0, index - 2),
      controler.toString(),
      ...arr.slice(index + 2),
    ];
  }
}
function calcSol(a: string, b: string, c: string) {
  let oprand1 = parseFloat(b);
  let oprand2 = parseFloat(c);
  if (a === "X") {
    return (oprand1 * oprand2).toString();
  } else if (a === "/") {
    return (oprand1 / oprand2).toString();
  } else if (a === "%") {
    return (oprand1 % oprand2).toString();
  } else if (a === "+") {
    return (oprand1 + oprand2).toString();
  } else {
    return (oprand1 - oprand2).toString();
  }
}
function braceFreeCalc(bfexparam: string[]) {
  ["X", "/", "%", "+", "-"].forEach((oprater) => {
    if (bfexparam.includes(oprater)) {
      let count = 0;
      while (bfexparam.length >= 3 && count < 50) {
        count++;
        let index = bfexparam.indexOf(oprater);
        let befforIndex = bfexparam.slice(0, index >= 2 ? index - 2 : 0);
        let affterIndex = bfexparam.slice(index + 2);
        let newVal = calcSol(
          oprater,
          bfexparam[index - 1],
          bfexparam[index + 1]
        );
        bfexparam = [...befforIndex, newVal, ...affterIndex];
      }
    }
  });
  return bfexparam;
}
export const doMath = (exparam: string[]) => {
  if (exparam.length === 1) return exparam;
  else if (!exparam.includes("(")) return braceFreeCalc(exparam);
  else {
    while (exparam.includes("(")) {
      let firstIndexRightBrace = exparam.indexOf(")");
      let lastIndexLeftBrace = exparam.indexOf("(");
      let befforSelected = exparam.slice(0, lastIndexLeftBrace);
      let affterSelected = exparam.slice(firstIndexRightBrace + 1);
      let betweenBrace = exparam.slice(
        lastIndexLeftBrace + 1,
        firstIndexRightBrace
      );
      if (betweenBrace.length === 1)
        exparam = [...befforSelected, betweenBrace[0], ...affterSelected];
      else if (betweenBrace.length === 2) exparam = ["Bad expression"];
      else {
        exparam = braceFreeCalc([
          ...befforSelected,
          ...braceFreeCalc(betweenBrace),
          ...affterSelected,
        ]);
      }
      console.log(exparam);
    }
    return exparam;
  }
};
