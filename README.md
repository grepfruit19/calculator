# Calculator

## Getting Started

Run `npm install`, then `npm run dev`. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Run `npm run test` to run tests.

## Contents

### /calculator/calculator.js

Contains the logic itself.

The `calculate()` function handles order of operations properly. So an expression like
`3 + 2 x 5` evaluates to 13, rather than 25. I didn't add support for parentheses because that seemed like it'd probably be too complex (and it was also out of scope of the assignment).

### /pages/index.js

Contains the UI logic, written in React.

### /test/calculator.spec.js

Contains tests.

## Next steps

Given more time, I would do the following:

- Clean up the calculator display, currently it has commas (because the underlying data structure is an array), so I would remove that, probably by adding/overwriting the toString method use an empty space as a delimiter rather than commas.
- Add input validation to the `calculate()` function, as well as the calculator UI itself, see the bottom of the tests for some validations I would try to add
- Add error handling to the calculator, currently if you provide an invalid expression (i.e., `1,1`) it will throw an unhandled error.

## Libraries Used

The UI framework is Next.js, and was constructed using `create-next-app`.

I also used Material UI as a component library to get things up quickly.

The testing library is Jest.
