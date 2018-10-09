
// scanner, i.e. tokenizer
//

import * as ts from 'typescript';

interface TokenItem {
    type: number;
    value: string;
    startPos: number;
    endPos: number;
}

const scanner = ts.createScanner(ts.ScriptTarget.Latest, true);

function sourceCodeToTokenList(text: string) {
    scanner.setText(text);
    scanner.setOnError((message) => {console.error(message);});
    scanner.setScriptTarget(ts.ScriptTarget.ES2016);
    scanner.setLanguageVariant(ts.LanguageVariant.Standard);

    const tokenList: Array<TokenItem> = [];
    let token = scanner.scan();
    while (token != ts.SyntaxKind.EndOfFileToken) {
        const value = scanner.getTokenText();
        const type = token;
        const startPos = scanner.getStartPos();
        token = scanner.scan();
        const endPos = scanner.getStartPos();
    
        tokenList.push({
            type,
            startPos,
            endPos,
            value,
        });
    }
    return tokenList;
}

function syntaxKindToName(kind) {
    return ts.SyntaxKind[kind];
}

sourceCodeToTokenList(`let PI: number = 3.1415926;`).forEach(token => {
    console.log(syntaxKindToName(token.type), token.value);
});

console.log('\n');

sourceCodeToTokenList(`interface Node<T> {left: Node<T>|null; right: Node<T>|null; value: T;}`).forEach(token => {
    console.log(syntaxKindToName(token.type), token.value, token.startPos, token.endPos);
});