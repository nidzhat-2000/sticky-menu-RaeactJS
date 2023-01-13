import React, { useEffect, useRef, useState } from "react";
import styles from "../Styles/Menu.module.css";

export const Menu = () => {
  const [position, setPosition] = useState("");
  const ref = useRef();

  const clickHandle = (e) => {
      // console.log(e.target.getBoundingClientRect());
    const { top, width, height } = e.target.getBoundingClientRect();
    const left = e.target.offsetLeft;
    setPosition({
      left,
      top,
      width,
      height,
    });
  };

  useEffect(() => {
    const element = ref.current.querySelector(`.${styles.active}`);
    const { top, width, height } = element.getBoundingClientRect();
    const left = element.offsetLeft;

    setPosition({
      left,
      top,
      width,
      height,
    });
  }, []);

  return (
    <nav className={styles.menu} ref={ref}>
      {position && (
        <div
          style={{
            "--left": position.left + "px",
            "--top": position.top + "px",
            "--width": position.width + "px",
            "--height": position.height + "px",
          }}
          className={styles.divider}
        ></div>
      )}
      <button onClick={clickHandle} className={styles.menu_item}>
        About
      </button>
      <button onClick={clickHandle} className={styles.menu_item}>
        Contact
      </button>
      <button
        onClick={clickHandle}
        className={`${styles.menu_item} ${styles.active}`}
      >
        Blog
      </button>
      <button onClick={clickHandle} className={styles.menu_item}>
        Articles
      </button>
      <button onClick={clickHandle} className={styles.menu_item}>
        Lesson
      </button>
    </nav>
  );
};
