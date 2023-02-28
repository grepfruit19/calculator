import { Paper, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { calculate } from "../calculator/calculator";

const styles = {
  parent: {
    display: "flex",
    padding: "3rem",
    flexDirection: "column",
    alignItems: "center",
  },
  paper: {
    width: "350px",
    height: "350px",
    padding: "3rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
};

export function CalculatorButton(props) {
  const { onClick, operator } = props;
  return (
    <Button
      variant="outlined"
      onClick={() => {
        onClick(operator);
      }}
    >
      {operator}
    </Button>
  );
}

export default function Home() {
  const [expression, setExpression] = useState([]);

  const onPress = (input) => {
    // The slice is necessary because simply pushing to the array does not rerender.
    // This is because the reference to the array did not change, so React
    // does not recognize it as a true state change.
    const newExpression = expression.slice();
    newExpression.push(input);
    setExpression(newExpression);
  };

  const clearExpression = () => {
    setExpression([]);
  };

  const submitExpression = (input) => {
    // Wrap result in an array to maintain consistency.
    // This allows new expressions to be constructed after calculation.
    setExpression([calculate(expression)]);
  };

  return (
    <>
      <div style={styles.parent}>
        <Paper style={styles.paper} elevation={3}>
          <div style={styles.row}>
            <TextField
              value={expression}
              InputProps={{
                readOnly: true,
              }}
            />
            <Button variant="contained" onClick={clearExpression}>
              C
            </Button>
          </div>
          <div style={styles.row}>
            <CalculatorButton operator={7} onClick={onPress} />
            <CalculatorButton operator={8} onClick={onPress} />
            <CalculatorButton operator={9} onClick={onPress} />
            <CalculatorButton operator={"/"} onClick={onPress} />
          </div>
          <div style={styles.row}>
            <CalculatorButton operator={6} onClick={onPress} />
            <CalculatorButton operator={5} onClick={onPress} />
            <CalculatorButton operator={4} onClick={onPress} />
            <CalculatorButton operator={"x"} onClick={onPress} />
          </div>
          <div style={styles.row}>
            <CalculatorButton operator={3} onClick={onPress} />
            <CalculatorButton operator={2} onClick={onPress} />
            <CalculatorButton operator={1} onClick={onPress} />
            <CalculatorButton operator={"-"} onClick={onPress} />
          </div>
          <div style={styles.row}>
            <CalculatorButton operator={0} onClick={onPress} />
            <CalculatorButton operator={"+"} onClick={onPress} />
            <Button variant="contained" onClick={submitExpression}>
              =
            </Button>
          </div>
        </Paper>
      </div>
    </>
  );
}
