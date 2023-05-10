# Angular Architecture

### 1. Components
- Components are the building blocks that compose an angular application. 
- A component is written using typescript programming language.
- The @Component() decorator specifies the following Angular-specific information:
    - A tag selector that defines how the component should be called to be used as a template.
    - A HTML template of elements
    - A CSS design of the HTML elements.
- Angular's component model offers:
    - A strong encapsulation
    - A good interface for unit tests
    - A good level of code readability

### 2. Components' HTML Templates
- Every component has an HTML template that declares how that component renders.
- You define this template either inline or by file path.
- Angular adds syntax elements that extend HTML so you can insert dynamic values from your component.
- Angular automatically updates the rendered DOM when your component's state changes.

### 3. Dependency Injection of Services
- Dependency injection lets you declare the dependencies of TypeScript classes without taking care of their instantiation.
    - Angular handles the instantiation for you.
- This design pattern lets you write more testable and flexible code.
- Understanding dependency injection is not critical to start using Angular, but it is strongly recommended as a best practice.
    - Many aspects of Angular take advantage of it to some degree.

### 4. Angular Schematics that Simplify Development
- Automated scaffolding
- Automated refactoring 
- Update tools
