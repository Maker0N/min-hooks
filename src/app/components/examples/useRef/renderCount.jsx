import React, { useState, useEffect, useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const RenderCountExample = () => {
  const refCount = useRef(0);
  const [render, setRender] = useState(false);
  const handleClick = () => {
    setRender(!render);
  };
  useEffect(() => {
    refCount.current += 1;
  }, [render]);
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider />
            <p>Render count: {refCount.current}</p>
            <button className="btn btn-primary" onClick={handleClick}>Render</button>
        </CardWrapper>
    );
};

export default RenderCountExample;
