import React, { useEffect } from "react";
import About from "../HomeTwoComponents/About";
import About2 from "../../Components/About";
import Achivement from "../HomeTwoComponents/Achivement";
import BlogArticle from "../HomeTwoComponents/BlogArticle";
import Categories from "../HomeTwoComponents/Categories";
import Counter from "../HomeTwoComponents/Counter";
import Courses from "../../Components/Courses";
import Footer from "../Footer";
import HomeTwoHeader from "../HomeTwoComponents/HomeTwoHeader";
import Video from "../HomeTwoComponents/Video";
import WhyChoose from "../HomeTwoComponents/WhyChoose";
import Accordion from "../HomeThreeComponents/Accordion";
import Platform from "../Platform";

const HomeTwo = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <section className="font-gilroy font-medium text-gray text-lg leading-[27px]">
      <HomeTwoHeader />
      <Platform />
      <Counter />
      {/* <About /> */}
      <WhyChoose />
      <About2></About2>
      {/* <Accordion /> */}
      {/* <BlogArticle /> */}
      <Footer />
    </section>
  );
};

export default HomeTwo;
