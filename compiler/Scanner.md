# Scanner

Processing of transpiling Typescript codes:

```
SourceCode ~~ [scanner] ~~> Token Stream ~~ [parser] ~~> AST
```

  - scanner (lexical analysis)
  - parser (syntax analysis)
  - type checker, binder, symbol etc (semantic analysis)
  - emitter (code generation)

## Scanner API

```typescript

interface Scanner {
    getStartPos(): number;
    getToken(): SyntaxKind;
    getTextPos(): number;
    getTokenPos(): number;
    getTokenText(): string;
    getTokenValue(): string;
    hasExtendedUnicodeEscape(): boolean;
    hasPrecedingLineBreak(): boolean;
    isIdentifier(): boolean;
    isReservedWord(): boolean;
    isUnterminated(): boolean;
    reScanGreaterToken(): SyntaxKind;
    reScanSlashToken(): SyntaxKind;
    reScanTemplateToken(): SyntaxKind;
    scanJsxIdentifier(): SyntaxKind;
    scanJsxAttributeValue(): SyntaxKind;
    reScanJsxToken(): JsxTokenSyntaxKind;
    scanJsxToken(): JsxTokenSyntaxKind;
    scanJSDocToken(): JsDocSyntaxKind;
    scan(): SyntaxKind;
    getText(): string;
    setText(text: string | undefined, start?: number, length?: number): void;
    setOnError(onError: ErrorCallback | undefined): void;
    setScriptTarget(scriptTarget: ScriptTarget): void;
    setLanguageVariant(variant: LanguageVariant): void;
    setTextPos(textPos: number): void;
    lookAhead<T>(callback: () => T): T;
    scanRange<T>(start: number, length: number, callback: () => T): T;
    tryScan<T>(callback: () => T): T;
}

function createScanner(
  languageVersion: ScriptTarget, skipTrivia: boolean, languageVariant?: LanguageVariant,
  textInitial?: string, onError?: ErrorCallback, start?: number, length?: number
): Scanner;

```