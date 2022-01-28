import React, { useState, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const factorial = (n) => {
  return n ? n * factorial(n - 1) : 1;
};

const ComplexCalculateExample = () => {
  const [value, setValue] = useState(100);
  const [buttonColor, setButtonColor] = useState(true);
  const runFactorial = (value) => {
    console.log("run factorial");
    return factorial(value);
  };
  const fact = useMemo(() => runFactorial(value), [value]);
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <Divider />
                <p>{value}</p>
                <p>{fact}</p>
                <button className="btn btn-primary" onClick={() => setValue(prev => prev + 10)}>Inc</button>
                <button className="btn btn-primary mx-2" onClick={() => setValue(prev => prev - 10)}>Dec</button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <Divider />
                <button
                  className={buttonColor ? "btn btn-primary" : "btn btn-secondary"}
                  onClick={() => setButtonColor(!buttonColor)}
                >Button
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
