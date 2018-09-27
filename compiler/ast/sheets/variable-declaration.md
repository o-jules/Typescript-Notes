# Varaible declaration

* `let PI: number = 3.1415926`

```typescript
VariableStatement({
    declarationList: VariableDeclarationList({
        declarations: [
            VariableDeclaration({
                name: Idetifier({
                    text: 'PI'
                }),
                type: NumberKeyword(),
                initializer: NumericLietral({
                    text: '3.1415926'
                })
            })
        ]
    })
})
```

`let PI: number` and `let PI` is similar to `let PI: number = 3.1415926` with correspective missing fields.