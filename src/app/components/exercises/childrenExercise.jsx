import React, { useEffect } from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ChildrenComponents = ({ children }) => {
  useEffect(() => {
    console.log(React.Children.toArray(children));
  });
  return React.Children.map(children, (child, index) => {
    return <div className="d-flex"><div>{`${index + 1}. `}</div>{child}</div>;
  });
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
          <ChildrenComponents>
            <Component />
            <Component />
            <Component />
          </ChildrenComponents>
        </CollapseWrapper>
    );
};

ChildrenComponents.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
