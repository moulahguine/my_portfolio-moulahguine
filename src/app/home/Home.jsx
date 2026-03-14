import { Hero, About, Skills, Projects, Experience, Blogs } from "@/sections";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience mode="preview" />
      <Blogs mode="preview" />
    </>
  );
};

export default HomePage;
