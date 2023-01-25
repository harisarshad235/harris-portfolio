import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 7, text: 'Open Source Projects'},
  { number: 3, text: 'years of experience in front end', },
  { number: "500 ", text: 'linkedin Followers', },
  // { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acheivements</SectionTitle>
    <Boxes>
      {data.map((card,index) =>(
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>

        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
