import React, { useEffect, useRef, useState } from "react";
import styles from "../Styles/FullMenu.module.css";

export const FullMenu = () => {
  const [position, setPosition] = useState("");
  const ref = useRef();

  const clickHandle = (e) => {
    ref.current
      .querySelectorAll("button")
      .forEach((cl) => cl.classList.remove(styles.active));
    e.target.classList.add(styles.active);

    const { top } = e.target.getBoundingClientRect();
    const left = e.target.offsetLeft;
    const height = e.target.offsetHeight;
    const width = e.target.offsetWidth;
    setPosition({
      left,
      top,
      width,
      height,
    });
  };

  useEffect(() => {
    // const element = ref.current.querySelector(`.${styles.active}`);
    const element = ref.current.querySelector("." + styles.active);
    // const element = ref.current.querySelector(".active");
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
    <nav className={styles.menu_full} ref={ref}>
      {position && (
        <div
          style={{
            "--left": position.left + "px",
            "--top": position.top + "px",
            "--width": position.width + "px",
            "--height": position.height + "px",
          }}
          className={styles.divider_full}
        ></div>
      )}
      <button onClick={clickHandle} className={styles.menu_item_full}>
        About
      </button>
      <button onClick={clickHandle} className={styles.menu_item_full}>
        Contact
      </button>
      <button
        onClick={clickHandle}
        className={`${styles.menu_item_full} ${styles.active} `}
        // className="active"
      >
        Blog
      </button>
      <button onClick={clickHandle} className={styles.menu_item_full}>
        Articles
      </button>
      <button onClick={clickHandle} className={styles.menu_item_full}>
        Lesson
      </button>
    </nav>
  );
};
