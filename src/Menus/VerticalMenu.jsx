import React, { useEffect, useRef, useState } from "react";
import styles from "../Styles/Vertical.module.css";

export const VerticalMenu = () => {
  const [position, setPosition] = useState("");
  const ref = useRef();

  const setProps = (e) => {
    const top = e.target.offsetTop;
    const height = e.target.offsetHeight;
    setPosition({
      top,
      height,
    });
  };

  const clickHandle = (e) => {
    setProps(e);
  };

  useEffect(() => {
    const element = ref.current.querySelector(`.${styles.active}`);
    const top = element.offsetTop;
    const height = element.offsetHeight;

    setPosition({
      top,
      height,
    });
  }, []);

  return (
    <nav className={styles.menu_vertical} ref={ref}>
      {position && (
        <div
          style={{
            "--left": position.left + "px",
            "--top": position.top + "px",
            "--width": position.width + "px",
            "--height": position.height + "px",
          }}
          className={styles.divider_vertical}
        ></div>
      )}
      <button onClick={clickHandle} className={styles.menu_item_vertical}>
        About
      </button>
      <button onClick={clickHandle} className={styles.menu_item_vertical}>
        Contact
      </button>
      <button
        onClick={clickHandle}
        className={`${styles.menu_item_vertical} ${styles.active} `}
      >
        Blog <br />
        Topics <br />
        okay
      </button>
      <button onClick={clickHandle} className={styles.menu_item_vertical}>
        Articles
      </button>
      <button onClick={clickHandle} className={styles.menu_item_vertical}>
        Lesson
      </button>
    </nav>
  );
};
