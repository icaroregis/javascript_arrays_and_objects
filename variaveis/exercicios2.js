let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

//1 forma
let newVarA = varA;
varA = varB;
varB = varC;
varC = newVarA;

//2 forma
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
