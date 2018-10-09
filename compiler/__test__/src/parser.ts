import * as ts from 'typescript';

function printSourceFile(node: ts.Node, depth: number = 0) {
    console.log(new Array(depth + 1).join('----'), ts.SyntaxKind[node.kind], node.pos, node.end);
    depth ++;
    node.getChildren().forEach(child => printSourceFile(child, depth));  
}

const fileName = 'main.ts';
const sourceCode = `
class Animal {
    private name: string = '';

    public run(): void {
        console.log(this.name + 'is runing');
    }
}`;

const sf = ts.createSourceFile(fileName, sourceCode, ts.ScriptTarget.Latest, true);
printSourceFile(sf);