import React, { memo } from "react";
import { Waypoint } from "react-waypoint";
import { animated } from "react-spring";

export const Text = memo((props) => {
  console.log(props);
  return (
    <>
      <animated.div key={props.index} style={{ padding: "20px 0", overflow: "hidden", ...props.style }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod
        mollis urna et accumsan. Nam ut sodales lorem, mattis elementum diam.
        Nunc maximus, nisi id porttitor auctor, orci urna dictum ex, quis
        placerat purus magna sollicitudin lectus. Sed ut tempus augue, at dictum
        lectus. Phasellus ullamcorper, neque sed interdum maximus, nisl urna
        fermentum sem, at vulputate ex leo ut elit. Maecenas quis varius purus.
        Aenean rutrum orci at nisi congue, nec porta felis ultricies. In
        faucibus nec neque in egestas. Phasellus consequat risus massa, vel
        fringilla sem placerat eget. Ut sed mattis nisi. Donec varius, est vel
        laoreet congue, elit risus eleifend erat, ut posuere leo neque at sem.
        Donec euismod tempus orci, ut commodo justo porta eu. Vivamus sodales
        magna nulla, nec volutpat justo faucibus a. Donec cursus porttitor purus
        vel malesuada. Donec commodo nisi nec elementum dictum. Nam erat dolor,
        luctus et varius nec, fringilla non eros. Maecenas a suscipit dui.
        Praesent vitae ligula aliquam, aliquet ligula ut, vehicula magna. Ut
        tempus neque ut tellus gravida, id sagittis leo sodales. Duis eu dolor
        venenatis, auctor libero ut, malesuada purus. Proin nec molestie elit,
        suscipit pharetra libero. Suspendisse mi sem, laoreet nec eleifend at,
        tristique et mi. In sed scelerisque erat. Nulla nisl augue, bibendum
        quis dictum eu, ornare ut magna. Nunc dapibus tortor quis suscipit
        eleifend. Morbi sed risus vel orci ornare scelerisque. Integer in elit
        magna. Fusce quis tortor quis odio efficitur commodo. Nam sit amet justo
        faucibus, venenatis risus non, fermentum dui. Quisque sit amet enim ac
        libero dictum commodo.
      </animated.div>
      <Waypoint onEnter={() => props.setData(props.index)} />
    </>
  );
});
