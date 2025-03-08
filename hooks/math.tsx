import React, { createContext, ReactNode, useContext, useState } from "react";
import { doMath } from "./lib";
const mathContext = createContext({
  expression: [] as string[],
  handlePress: (text: string) => {},
});
const MathContextProvider = ({ children }: { children: ReactNode }) => {
  const initial: string[] = [];

  const [expression, setExpression] = useState(initial);
  const parseExp = (exToParse: string[]) => {
    const braceResolver = (exp: string[]) => {
      const checkBraceError = (toBraceChecker: string[]) => {
        let counter = 1;
        for (let i = 0; i < toBraceChecker.length; i++) {
          if (toBraceChecker[i] === "(") {
            counter++;
          }
          if (toBraceChecker[i] === ")") {
            counter--;
          }
        }
        return counter === 0;
      };
      checkBraceError(exp) ? setExpression(["Bad Expression!"]) : "";

      return doMath(exp);
    };
    return braceResolver(exToParse);
  };
  const handlePress = (text: string) => {
    setExpression((expression) => {
      switch (text) {
        case "=":
          return parseExp(expression);
        case "DEL":
          expression.pop();
          return [...expression];

        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
          if (
            expression.length === 0 ||
            (expression.length === 1 && expression[0] === "0")
          )
            return [text];
          if (
            ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(
              expression[expression.length - 1].split("").pop() || ""
            )
          ) {
            let lastChar = expression.pop() + text;
            return [...expression, lastChar];
          }
          return [...expression, text];
        case "+":
        case "-":
        case "X":
        case "%":
        case "/":
          if (
            expression.length === 0 ||
            (expression.length === 1 && expression[0] === "0")
          )
            return [];
          if (
            ["+", "-", "X", "/", "%"].includes(
              expression[expression.length - 1]
            )
          ) {
            expression.pop();
            return [...expression, text];
          }
          return [...expression, text];
        case "(":
        case ")":
          return [...expression, text];
        default:
          return [...expression];
      }
    });
  };
  return (
    <mathContext.Provider value={{ expression: expression, handlePress }}>
      {children}
    </mathContext.Provider>
  );
};

export default MathContextProvider;

export function useMath() {
  return useContext(mathContext);
}

// const doMath = (customExp: string[]) => {
//   return "10";
// };
// if (exp.slice(initialBraceIndex, finalBraceIndex - 1).length === 0) {
//   return [...doMath(exp)];
// } else
//   return [
//     ...exp.slice(0, initialBraceIndex - 1),
//     ...doInsideBrace(
//       exp.slice(initialBraceIndex, finalBraceIndex - 1)
//     ),
//     ...exp.slice(finalBraceIndex, 0),
//   ];
