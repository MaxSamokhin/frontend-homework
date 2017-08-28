'use strict';


function getLevelTree(numberIteration, heightTree) {
    let currentSymbolTree = '*';

    if (Number.isNaN(numberIteration) || Number.isNaN(heightTree)) {
        throw new TypeError('Invalid variable type!');
    }

    if (numberIteration >= heightTree - 1) { // reached the root
        currentSymbolTree = '|';
        numberIteration = 0;

    }

    const countSpace = heightTree - numberIteration - 2; // 2 - difference between two levels of a tree
    const countSymbolTree = 2 * numberIteration + 1;

    let currentLine = '';

    currentLine += ' '.repeat(countSpace);
    currentLine += currentSymbolTree.repeat(countSymbolTree);
    currentLine += ' '.repeat(countSpace) + '\n';

    return currentLine;
}


function tree(heightTree) {
    if (heightTree < 3) {
        return null;
    }
    let resultTree = '';

    for (let i = 0; i < heightTree; i++) {
        resultTree += getLevelTree(i, heightTree);
    }

    return resultTree;
}
