import React from "react";
import styles from "./Slide.module.css";

const Slide = ({ slides }) => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  function slidePrev() {
    if (active > 0) setActive(active - 1)
  }

  function slideNext() {
    if (active < slides.length - 1) setActive(active + 1)
  }

  return (
    <section className={styles.container}>
      <div
        className={styles.content}
        style={{ translate: `${position}px` }}
        ref={contentRef}
      >
        {slides.map((item) => {
          return (
            <div key={item.id} className={styles.item}>
              {item.text}
            </div>
          );
        })}
      </div>
      <nav className={styles.nav}>
        <button onClick={slidePrev}>previous</button>
        <button onClick={slideNext}>next</button>
      </nav>
    </section>
  );
};

export default Slide;
