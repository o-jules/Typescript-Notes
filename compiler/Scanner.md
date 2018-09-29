# Scanner

Processing of transpiling Typescript codes:

```
SourceCode ~~ [scanner] ~~> Token Stream ~~ [parser] ~~> AST
```

  - scanner (lexical analysis)
  - parser (syntax analysis)
  - type checker, binder, symbol etc (semantic analysis)
  - emitter (code generation)