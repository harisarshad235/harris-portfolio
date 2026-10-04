import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: '80%', text: 'fewer project delays'},
  { number: '90%', text: 'faster reporting'},
  { number: 'PKR 103M+', text: 'cost savings delivered'},
  { number: '150+', text: 'sites coordinated'},
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Impact by the numbers</SectionTitle>
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
