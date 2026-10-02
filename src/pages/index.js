import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import TechStack from '../components/TechStack/TechStack';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { HeroStage } from '../components/Hero/HeroStyles';

const Home = () => {
  return (
    <Layout>
      <HeroStage data-reveal>
        <Hero />
        <BgAnimation />
      </HeroStage>
      <Timeline />
      <TechStack />
      <Projects />
      <Technologies />
    </Layout>
  );
};

export default Home;
