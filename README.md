### Var Vs Let during variable declaration
- Scope of var upto function
- Scope of let like with other OOP languages only in the same for loop statement.

### Different primitive datatypes in Typescript

- number
- string
- any
- array
- any array
- enum

### Type Assertion

- Two ways to do type assertions: 

1. First one is using angular brackets (<string>name)
2. Second one is using as keyword (name as string)

- Type assertion doesn't change the type of these endsWithC variable and alternativeWay variable at runtime, Its not going to restructure that object in memory.
It is purely a way to tell typescript compiler about the type of variable so we can access the intellisense.

### Arrow Functions

- Arrow Functions are just as same as lambda expression in other OOP
- We use arrow functions in place of function expressions in Javascript.

### Interfaces

- What if we have multiple parameters to pass in a function.
- Simple way to solve this is use a object instead of bunch of parameters and while
accessing the function we pass the object properties as the object parameter for function
- But the problem with this technique is the function parameter can be changed easily and the function will accept
any properties causing error.
- Here, we have two solutions for this.

1. Inline Annotation
- This means we use : to annotate parameters in the arrow function paramter itself.
This technique is also not suitable if we have to use the same object parameter in many places.

2. Interfaces
- Second way is to use interfaces, with this we can define our custom type which can be annotated on any object in a parameter, required.