import styles from "./style.module.scss";
import Image from "next/image";
import Rounded from "../../common/RoundedButton";
import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import Magnetic from "../../common/Magnetic";

export default function Contact() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <motion.div style={{ y }} ref={container} className={styles.contact}>
      <div className={styles.body}>
        <div className={styles.title}>
          <p className="text-8xl font-bold uppercase">Get in touch</p>

          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <div className={styles.nav} id="contact">
          <Rounded>
            <p>thaivduy01@gmail.com</p>
          </Rounded>
          <Rounded>
            <p>+84 932 518 350</p>
          </Rounded>
          <Rounded>
            <p>Ho Chi Minh City</p>
          </Rounded>
        </div>
        <div className={styles.info}>
          <div>
            <span>
              <p className="text-6xl font-bold">
                2024 © <br /> THAI VAN DUY
              </p>
            </span>
          </div>
          <div>
            <Magnetic>
              <a target="_blank" href="http://github.com/duyn12">
                <p>Github</p>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/duy-th%C3%A1i-v%C4%83n-339690298/"
              >
                <p>Linkedin</p>
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
