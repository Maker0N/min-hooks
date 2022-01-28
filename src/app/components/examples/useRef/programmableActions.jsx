import React, { useState, useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const ProgrammableActionsExample = () => {
  const refInput = useRef();
  const refButton = useRef();
  const [width, setWidth] = useState(true);
  const handleFocus = () => {
    refInput.current.focus();
    setWidth(!width);
    width
      ? refButton.current.style.width = "300px"
      : refButton.current.style.width = "100px";
  };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label mx-2">Email</label>
            <input ref={refInput} type="text" id="email" />
            <button ref={refButton} className="btn btn-primary mx-2" onClick={handleFocus}>Focus</button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
