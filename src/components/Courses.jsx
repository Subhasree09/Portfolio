"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AWS from "../assets/aws.png";
import UCI from "../assets/uci.png";
import GOOGLE from "../assets/google.png";


const Courses = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="courses"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12" data-aos="fade-down">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center">
            COURSES
          </h1>

          <div
            className="EXPERIENCE mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-3"
            data-aos="zoom-in-up"
          >
            <Exp_prop
              img={AWS}
              title="AWS Fundamentals"
              subtitle="Amazon Web Services"
              date="Apr 7, 2024"
              para="Learned cloud computing, AWS services, and deployment."
            />
            <Exp_prop
              img={UCI}
              title="Programming the IOT"
              subtitle="University of California, Irvine"
              date="Apr 15, 2024"
              para="Gained skills in IoT development, sensors, and connectivity."
            />
            <Exp_prop
              img={GOOGLE}
              title="Google Data Analytics"
              subtitle="Google"
              date="Apr 16, 2024"
              para="Mastered data analysis, visualization, and Google Analytics tools."
            />
          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};
export default Courses;
