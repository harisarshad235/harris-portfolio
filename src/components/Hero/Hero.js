import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My personal Portfolio

      </SectionTitle>
      <SectionText>
        The pupose of this portfolio is to showcase my development skills to everyone who is interested in my skills and wants to give me an opportunity to work with them or have to learn from my skill set.<br/>
        i have skills in <br/>
        -Javavascript<br/>
        -Reactjs<br/>
        -Python development
      </SectionText>
      <Button onclick={() => window.location= "https://google.com"}> Learn More</Button>
    </LeftSection>

  </Section>
);

export default Hero;