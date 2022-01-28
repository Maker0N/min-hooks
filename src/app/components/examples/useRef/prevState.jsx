import React, { useState, useEffect, useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const PrevStateExample = () => {
  const prevState = useRef("");
  const [currentState, setCurrentState] = useState("false");
  const handleClick = () => {
    setCurrentState((prev) => prev === "false" ? "true" : "false");
  };
  useEffect(() => {
    prevState.current = currentState;
  }, [currentState]);
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <p>Prev State: {prevState.current}</p>
            <p>Current State: {currentState}</p>
            <button className="btn btn-primary" onClick={handleClick}>Render</button>
        </CardWrapper>
    );
};

export default PrevStateExample;
