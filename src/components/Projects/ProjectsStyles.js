import styled from 'styled-components';

export const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: #f3f4f6;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
padding: 3rem 0;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  background: #FFFFFF;
  border: 1px solid rgba(29, 42, 45, 0.12);
  border-radius: 4px;
  box-shadow: 0 14px 35px rgba(29, 42, 45, 0.08);
  text-align: center;
  width: min(100%, 360px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 1px;
  color: #1D2A2D;
  padding: .5rem 0 0;
  margin: 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 52px;
  height: 3px;
  margin: 1.4rem auto 1.8rem;
  border: 0;
  background: #E5674F;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 2.2rem;
  color: #687372;
  font-size: 1.5rem;
  line-height: 1.6;
  text-align: left;
  margin: 0 0 1.2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 1.2rem;
  }
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#FFFFFF;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #1D2A2D;
border-radius: 3px;
transition: 0.5s;
&:hover{
  background: #E5674F;

}
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem 0.9rem;
  padding: 0 1.5rem 1.2rem;
  margin: 0;
  list-style: none;
`;

export const Tag = styled.li`
  color: #1A8781;
  font-size: 1.3rem;
  line-height: 1.4;
  white-space: normal;
  text-align: center;
`