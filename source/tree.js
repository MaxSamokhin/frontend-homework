'use strict';

function getMultiplyString(str, operand) {
    let resultString = '';
    for (let i = 1; i <= operand; i++) {
        resultString += str;
    }
    return resultString;
}

function getLevelTree(numberIteration, heightTree) {
    let currentSymbolTree = '*';
    if (numberIteration == heightTree-1) { // reached the root
        currentSymbolTree = '|';
        numberIteration = 0;
    }
    let currentLine = '';
    const countSpace = heightTree - numberIteration - 2; // 2 - difference between two levels of a tree
    const countSymbolTree = 2 * numberIteration + 1;

    currentLine += getMultiplyString(' ', countSpace);
    currentLine += getMultiplyString(currentSymbolTree, countSymbolTree);
    currentLine += getMultiplyString(' ', countSpace) + '\n';

    return currentLine;
}

function tree(heightTree) {
    if (heightTree < 3) {
        return null;
    }
    let resultTree = '';

    for (let i = 0; i <= heightTree-1; i++) {
        resultTree += getLevelTree(i, heightTree);
    }

    return resultTree;
}