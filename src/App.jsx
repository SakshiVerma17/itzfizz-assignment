import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./index.css";
import carImg from "./assets/car.png";

export default function App() {
  const carRef = useRef(null);
  const lettersRef = useRef([]);
  const boxesRef = useRef([]);

  const scrollY = useRef(0);
  const smoothScroll = useRef(0);

  useEffect(() => {
    // initial hide
    lettersRef.current.forEach((el) => {
      if (el) {
        el.style.opacity = 0;
        el.style.transform = "translateY(30px)";
      }
    });

    boxesRef.current.forEach((box) => {
      gsap.set(box, { opacity: 0, y: 40 });
    });

    // capture scroll
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    // SMOOTH LOOP
    const animate = () => {
       
      smoothScroll.current += (scrollY.current - smoothScroll.current) * 0.08;

      const progress = Math.min(smoothScroll.current / 800, 1);

      const carWidth = carRef.current.offsetWidth;
      const maxX = window.innerWidth - carWidth + 80;

      // smooth car
      gsap.set(carRef.current, {
        x: progress * maxX,
      });

      const carRect = carRef.current.getBoundingClientRect();

      // smooth text sync
      lettersRef.current.forEach((el) => {
        const rect = el.getBoundingClientRect();

        if (carRect.right > rect.left + 5) {
          el.style.opacity = 1;
          el.style.transform = "translateY(0px)";
        } else {
          el.style.opacity = 0;
          el.style.transform = "translateY(30px)";
        }
      });

      // 📦 smooth boxes
      boxesRef.current.forEach((box, i) => {
        const trigger = 0.25 + i * 0.1;

        if (progress > trigger) {
          gsap.to(box, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          });
        } else {
          gsap.to(box, {
            opacity: 0,
            y: 40,
            duration: 0.6,
            ease: "power3.out",
          });
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const text = "WELCOME-ITZFIZZ".split("");

  return (
    <div className="page">
      <section className="hero">

        {/* TEXT */}
        <div className="text">
          {text.map((char, i) => (
            <span
              key={i}
              ref={(el) => (lettersRef.current[i] = el)}
              className="letter"
            >
              {char}
            </span>
          ))}
        </div>

        {/* CAR */}
        <img ref={carRef} src={carImg} alt="car" className="car" />

        {/* BOXES */}
        <div ref={(el) => (boxesRef.current[0] = el)} className="box top-left green">
          <h2>58%</h2>
          <p>Increase in pickup use</p>
        </div>

        <div ref={(el) => (boxesRef.current[1] = el)} className="box top-right red">
          <h2>27%</h2>
          <p>Improved efficiency</p>
        </div>

        <div ref={(el) => (boxesRef.current[2] = el)} className="box bottom-left blue">
          <h2>23%</h2>
          <p>Fewer customer calls</p>
        </div>

        <div ref={(el) => (boxesRef.current[3] = el)} className="box bottom-right yellow">
          <h2>40%</h2>
          <p>Better performance</p>
        </div>

      </section>
    </div>
  );
}