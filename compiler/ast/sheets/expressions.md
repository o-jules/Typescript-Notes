
# Expresssions

* `a > b`

```typescript
BinaryExpression({
    left: Identifier({ text: 'a' }),
    right: Identifier({ text: 'b' }),
    operatorToken: GreaterThanToken()
})
```

* `a && b`

```typescript
BinaryExpression({
    left: Identifier({ text: 'a' }),
    right: Identifier({ text: 'b' }),
    operatorToken: AmpersandAmpersandToken()
})
```

* `a ? b : c`

```typescript
ConditionalExpression({
    condition: Identifier({ text: 'a' }),
    questionToken: QuestionToken(),
    whenTrue: Identifier({ text: 'b' }),
    colonToken: ColonToken(),
    whenFalse: Identifier({ text: 'c' })
})
```
