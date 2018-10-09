# Binder

## Binder

In order to assist type checking (performed by the checker), the binder (in `binder.ts`) is used to connect the various parts of the source code into a coherent type system that can then be used by the checker. The main responsibility of the binder is to create `Symbol`s. 

## Symbol

Symbols connect declaration nodes in the AST to other declarations contributing to the same entity. Symbols are the basic building blocks of the Semantic system. The symbol constructor is defined in `core.ts`.