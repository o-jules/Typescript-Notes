# AST of common grammar structurenum

## `import` statements

* `import Module from 'module_name'`

```
ImportDeclaration {
   importClause: ImportClause {
       name: Identifier {
           text: "Module"
       }
   }
   moduleSpecifier: StringLiteral {
       text: "module_name"
   }
}
```

* `import { Module } form 'module_name'`

* `import { Module as NewModule } form 'module_name'`

* `import Module as module from 'module_name'`

* `import * as Module from 'module_name'`

## Variable delcartions

* `let PI`

* `let PI: number`

* `let PI: number = 3.1415926`
