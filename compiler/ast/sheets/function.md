# Function

* `function fun(@log id: number, name: string = 'anyone') {}`

```typescript
FunctionDeclaration({
    name: Identifier({
        text: 'fun'
    }),
    parameters: [
        Parameter({
            name: Identifier({ text: 'id' }),
            type: NumberKeyword,
            decorators: [
                Decorator({
                    expression: Identifier({ text: 'log' })
                })
            ]
        }),
        Parameter({
            name: Identifier({ text: 'name' }),
            type: StringKeyword,
            initializer: StringLiteral({ text: 'anyone' })
        })
    ]
})
```
