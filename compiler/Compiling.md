# Typescript Compiling

Processing of transpiling Typescript codes:

```
SourceCode ~~ [scanner] ~~> Token Stream ~~ [parser] ~~> AST
    ~~> [binder] ~~> Symbol ~~> [checker] (type checking)
    ~~> [emitter] ~~> Javascript
```

  - scanner (lexical analysis)
  - parser (syntax analysis)
  - type checker, binder, symbol etc (semantic analysis)
  - emitter (code generation)