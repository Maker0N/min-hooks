import React, { useState, useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
  const refChangeBlock = useRef();
  const refText = useRef("Блок");
  const [changeBlock, setChangeBlock] = useState(true);
  const handleBlock = () => {
    setChangeBlock(!changeBlock);
    changeBlock
      ? refChangeBlock.current.style.width = "80px"
      : refChangeBlock.current.style.width = "60px";
    changeBlock
      ? refChangeBlock.current.style.height = "150px"
      : refChangeBlock.current.style.height = "40px";
    changeBlock
      ? refText.current = "Text"
      : refText.current = "Блок";
  };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div className="d-flex">
            <div
                ref={refChangeBlock}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small ref={refText}>{refText.current}</small>
            </div>
            <div>
            <button type="button" className="btn btn-primary mx-3 h-3" onClick={handleBlock}>Change</button>
            </div>
            </div>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
