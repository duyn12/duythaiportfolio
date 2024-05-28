/* eslint-disable react/no-unescaped-entities */
"use client";
import styles from "./page.module.scss";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import useMousePosition from "../utils/useMousePosition";
import Image from "next/image";
import Lenis from "lenis";
import Picture1 from "../../../public/images/front-end-logo-black.png";
import Picture2 from "../../../public/images/front-end-logo-black.png";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className={styles.about}>
      {/* <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0 }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          Hello! I'm a <span>front-end developer</span>with a passion for
          creating professional online experiences. With extensive experience in
          front-end development, I've worked on innovative and challenging
          projects, from developing websites to creating dynamic web
          applications.
        </p>
      </motion.div> */}

      <div className={styles.body}>
        <p>
          Hello! I'm a <span>front-end developer</span> with a passion for
          creating professional online experiences. With extensive experience in
          front-end development, I've worked on innovative and challenging
          projects, from developing websites to creating dynamic web
          applications.
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="h-[10vh]" />
        <div ref={container}>
          <Slide
            src={Picture1}
            direction={"left"}
            left={"-40%"}
            progress={scrollYProgress}
          />
          <Slide
            src={Picture2}
            direction={"right"}
            left={"-25%"}
            progress={scrollYProgress}
          />
          <Slide
            src={Picture2}
            direction={"left"}
            left={"-75%"}
            progress={scrollYProgress}
          />
        </div>
      </div>
      <div className="py-24">
        <div className="flex w-10/12 m-auto gap-20">
          <div className={styles.name}>
            <h1 className="text-white">THAI VAN DUY</h1>
            <p>thaivduy01@gmail.com</p>
            <p>+84 932 518 350</p>
            <p>Ho Chi Minh City</p>
            <Image
              src="/images/me.jpg"
              alt="img"
              width={300}
              height={300}
              className="mt-10 ml-24 rounded-lg"
            />
          </div>
          <div className="w-6/12">
            <p className="text-white text-4xl font-bold uppercase">
              Skills Summary
            </p>

            <div class="flex w-full flex-col gap-y-4 divide-y pt-14 mb-10 text-h5 md:text-h4 2xl:text-h3">
              <span className={styles.skill}>VueJs, NextJs</span>
              <span className={styles.skill}>
                Tailwind CSS, Shadcn/ui, Vuetify, CSS, SCSS
              </span>
              <span className={styles.skill}>On-Page Optimization</span>
              <span className={styles.skill}>JavaScript, Typescript</span>
              <span className={styles.skill}>Responsive</span>
              <span className={styles.skill}>Git, Figma</span>
            </div>
            <p className="text-white text-4xl font-bold uppercase">
              SOFT SKILLS
            </p>

            <div class="flex w-full gap-y-4 divide-y pt-14 text-h5 md:text-h4 2xl:text-h3">
              <span className={styles.skill}>Adaptability, Self-research skills, Time Management, Proactively update more, Proactively update more in-depth knowledge</span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="py-24 flex justify-center gap-10">
        <section class="flex justify-center items-center">
          <button
            href="/"
            class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#0077b5] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1.1em"
              viewBox="0 0 512 512"
              stroke-width="0"
              fill="currentColor"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path>
            </svg>
            <span class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
              Linkedin
            </span>
          </button>
        </section>
        <section class="flex justify-center items-center">
          <button
            class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 15 15"
              class="w-5"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                fill="currentColor"
                d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
              ></path>
            </svg>
            <span class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
              GitHub
            </span>
          </button>
        </section>
        <section class="flex justify-center items-center">
          <button
            href="/"
            class="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#316FF6] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1.1em"
              viewBox="0 0 448 512"
              stroke-width="0"
              fill="currentColor"
              stroke="currentColor"
              class="w-5"
            >
              <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
            </svg>
            <span class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
              Facebook
            </span>
          </button>
        </section>
      </div> */}
    </div>
  );
}

const Slide = (props) => {
  const direction = props.direction == "left" ? -1 : 1;
  const translateX = useTransform(
    props.progress,
    [0, 1],
    [150 * direction, -150 * direction]
  );
  return (
    <motion.div
      style={{ x: translateX, left: props.left }}
      className="relative flex whitespace-nowrap"
    >
      <Phrase src={props.src} />
      <Phrase src={props.src} />
      <Phrase src={props.src} />
    </motion.div>
  );
};

const Phrase = ({ src }) => {
  return (
    <div className={"px-5 flex gap-5 items-center"}>
      <p className="text-[4.5vw] text-[#afa18f]">Front End Developer</p>
      <span className="relative h-[5.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image style={{ objectFit: "cover" }} src={src} alt="image" fill />
      </span>
    </div>
  );
};
