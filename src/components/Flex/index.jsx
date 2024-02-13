import React from "react";

const directions = {
  row: "flex-row",
  col: "flex-col",
};

const justifies = {
  start: "justify-start",
  end: "justify-end",
  around: "justify-around",
  between: "justify-between",
  center: "justify-center",
};

const aligns = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
};

const gaps = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  7: "gap-7",
  8: "gap-8",
  9: "gap-9",
};

function Flex({ children, direction, gap, justify, align, className }) {
  return (
    <div
      className={`flex ${directions[direction]} ${gaps[gap]} ${justifies[justify]} ${aligns[align]} ${className}`}
    >
      {children}
    </div>
  );
}

export default Flex;

Flex.defaultProps = {
  direction: "row",
  justify: "start",
  align: "start",
  gap: "0",
};
