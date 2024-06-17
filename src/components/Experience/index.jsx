"use client";

import styles from "./style.module.scss";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import Lenis from "lenis";

// Card Component
const CardProps = ({ i, title, description, color, url }) => {
  return (
    <div className={styles.cardContainer}>
      <motion.div
        style={{ backgroundColor: color, top: `calc(-12vh + ${i * 100}px)` }}
        className={styles.card}
      >
        <h2>{title}</h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <p>{description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Home Page Component
const Card = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])
  const projects = [
    // {
    //   title: "Web Development",
    //   description: "I create unique, custom-coded websites that are tailored to your brand. I focus on scalability, performance, accessibility, and engaging animations for a memorable experience.",
    //   url: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/"
    // },
    {
      title: "Front-End Developer",
      description:
        "I am a passionate front-end developer with a keen eye for detail and a commitment to creating intuitive, user-friendly web applications. With a strong foundation in HTML, CSS, and JavaScript, I build responsive and accessible websites that deliver seamless experiences across all devices. My expertise includes working with modern frameworks and libraries such as React, Vue.js, and NextJs, ensuring efficient and scalable code. I continuously stay updated with the latest industry trends and best practices to craft visually appealing and high-performance websites.",
      url: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    },
    {
      title: "Responsive Design",
      description:
        "Creating websites that work seamlessly on any device, from desktops to smartphones, utilizing CSS media queries and responsive frameworks to adapt layouts to different screen sizes.",
      url: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    },
    {
      title: "Performance Optimization",
      description:
        "Reducing file sizes by minifying CSS, JavaScript, and HTML files to improve load times. Breaking down code into smaller chunks to load only necessary components, enhancing load efficiency. Implementing best practices for optimizing web performance, including lazy loading, code splitting, and minimizing HTTP requests.",
      url: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
    },
    {
      title: "UI/UX Design",
      description:
        "Collaborating with designers to transform UI/UX designs into interactive web experiences. Applying principles of user-centered design to enhance usability and accessibility.",
      url: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
    },
  ];

  return (
    <div ref={container} className={styles.main}>
      <h2>WHATIDO/</h2>
      <div>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <CardProps
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
      </div>
      <motion.div  style={{ height }} className={styles.expContainer}>
        <div className={styles.circleexp}></div>
      </motion.div>
    </div>
  );
};

export default Card;
