# AST of common grammar structurenum

## `import` statements

* `import Module from 'module_name'`

```typescript
ImportDeclaration({
   importClause: ImportClause({
       name: Identifier({
           text: "Module"
       })
   }),
   moduleSpecifier: StringLiteral({
       text: "module_name"
   })
})
```

* `import * as Module from 'module_name'`

```typescript
ImportDeclaration({
    importClause: ImportClause({
        nameBindings: NamespaceImport({
            name: Identifier({
                text: "Module"
            })
        })
    }),
    moduleSpecifier: StringLiteral({
        text: "module_name"
    })
})
```

* `import { Module, Module2 as NewModule2 } form 'module_name'`

```typescript
ImportDeclaration({
    importClause: ImportClause({
        nameBindings: NamedImports({
            elements: [
                ImportSpecifier({
                    name: Identifier({
                        text: "Module"
                    })
                }),
                ImportSpecifier({
                    propertyName: Identifier({
                        text: "Module2"
                    }),
                    name: Identifier({
                        text: "NewModule2"
                    })
                })
            ]
       })
   }),
   moduleSpecifier: StringLiteral({
       text: "module_name"
   })
})
```

## Variable delcartions

* `let PI`

* `let PI: number`

* `let PI: number = 3.1415926`
