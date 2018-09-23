
// scanner, i.e. parser
//

import * as ts from 'typescript';

interface TokenItem {
    type: number;
    value: string;
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
        const text = scanner.getTokenText();
        tokenList.push( {
            type: token,
            value: text,
        });
        token = scanner.scan();
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
    console.log(syntaxKindToName(token.type), token.value);
});