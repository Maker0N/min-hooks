import React from "react";
import CardWrapper from "../common/Card";

const withPropsStyles = (SimpleComponent) => (props) => {
  return (
    <CardWrapper>
      <SimpleComponent { ...props }/>
    </CardWrapper>
  );
};

export default withPropsStyles;
