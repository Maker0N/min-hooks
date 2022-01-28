import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const UseCallBackExample = () => {
  const [data, setData] = useState({});
  const refWithoutCallback = useRef(0);
  const refWithCallback = useRef(0);

  const handleChange = ({ target }) => {
    setData((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const validateWithoutCallback = (data) => {
    console.log(data);
  };
  const validateWithCallback = useCallback((data) => {
    console.log(data);
  }, []);

  useEffect(() => {
    validateWithoutCallback(data);
    validateWithCallback(data);
  }, [data]);

  useEffect(() => {
    console.log(refWithoutCallback.current += 1);
  }, [validateWithoutCallback]);

  useEffect(() => {
    console.log(refWithCallback.current += 1);
  }, [validateWithCallback]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <Divider />
            <p>{`Without useCallback: ${refWithoutCallback.current}`}</p>
            <p>{`With useCallback: ${refWithCallback.current}`}</p>
            <label htmlFor="email" className="form-label mx-2">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={data.email || ""}
              onChange={handleChange}
              />
        </CardWrapper>
    );
};

export default UseCallBackExample;
