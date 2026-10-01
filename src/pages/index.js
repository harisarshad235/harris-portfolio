import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { HeroStage } from '../components/Hero/HeroStyles';

const Home = () => {
  return (
    <Layout>
      <HeroStage>
        <Hero />
        <BgAnimation />
      </HeroStage>
      <Projects />
      <Technologies />
      <Timeline />
    </Layout>
  );
};

export default Home;
