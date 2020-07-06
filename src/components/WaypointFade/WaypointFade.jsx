import React, { useCallback, useState } from "react";
import { Text } from "./components/Text/Text";
import { useTransition, animated } from "react-spring";

export const WaypointFade = (props) => {
  const [data, setData] = useState([-1]);

  const transition = useTransition(data, (data) => data, {
    from: { transform: `translate3d(50px, 0, 0)`, opacity: 0 },
    enter: { transform: `translate3d(0px, 0, 0)`, opacity: 1 },
    leave: { transform: `translate3d(50px, 0, 0)`, opacity: 0 },
    config: { duration: 500 },
  });

  const addInfo = useCallback(
    (key) => {
      setData((state) => [...state, key]);
    },
    [setData]
  );

  return (
    <>
      <div>hello</div>
      {transition.map(({ item, props, key }, index) => {
        return <Text style={props} index={index} setData={addInfo} />;
      })}
      {props.children}
    </>
  );
};
