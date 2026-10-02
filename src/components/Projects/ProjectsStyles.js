import styled from 'styled-components';

export const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: ${(props) => props.theme.colors.softSurface};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  background: ${(props) => props.theme.colors.controlBackground};
  transition: transform 320ms ease;
`

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-auto-rows: 1fr;
  align-items: stretch;
  padding: 3rem 0;
  column-gap: 2rem;
  row-gap: 3rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    padding: 2rem;
    padding-bottom: 0;
  }
`

export const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin: 0 0 1rem;
`;

export const FilterButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 3px;
  background: ${(props) => props['aria-pressed'] ? props.theme.colors.primary1 : 'transparent'};
  color: ${(props) => props['aria-pressed'] ? props.theme.colors.background1 : props.theme.colors.primary1};
  font: inherit;
  font-size: 1.4rem;
  cursor: pointer;
  transition: background 180ms ease, color 180ms ease, border-color 180ms ease;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary1};
  }

  &:focus-visible {
    outline: 3px solid rgba(26, 135, 129, 0.35);
    outline-offset: 2px;
  }
`;

export const FilterCount = styled.span`
  color: inherit;
  font-size: 1.2rem;
  opacity: 0.72;
`;

export const FilterStatus = styled.p`
  min-height: 1.8rem;
  color: ${(props) => props.theme.colors.muted};
  font-size: 1.3rem;
`;

export const BlogCard = styled.div`
  background: ${(props) => props.theme.colors.background2};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  box-shadow: 0 14px 35px rgba(29, 42, 45, 0.08);
  text-align: center;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 220ms ease, box-shadow 220ms ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 42px rgba(29, 42, 45, 0.14);

    img {
      transform: scale(1.025);
    }
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
  color: ${(props) => props.theme.colors.primary1};
  padding: .5rem 0 0;
  margin: 0;
  font-size: ${(props) => props.$large ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 52px;
  height: 3px;
  margin: 1.4rem auto 1.8rem;
  border: 0;
  background: ${(props) => props.theme.colors.accent1};
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.muted};
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 2.2rem;
  color: ${(props) => props.theme.colors.muted};
  font-size: 1.5rem;
  line-height: 1.6;
  text-align: left;
  margin: 0 0 1.2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 1.2rem;
  }
`;

export const ProjectImpact = styled.p`
  width: 100%;
  padding: 0 2.2rem;
  margin: 0 0 1.2rem;
  color: ${(props) => props.theme.colors.teal};
  font-size: 1.35rem;
  line-height: 1.5;
  text-align: left;

  strong {
    color: ${(props) => props.theme.colors.primary1};
  }

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
  margin: auto 0 2.5rem;
`;

export const ExternalLinks = styled.a`
color:${(props) => props.theme.colors.background1};
font-size: 1.6rem;
padding:1rem 1.5rem;
background: ${(props) => props.theme.colors.primary1};
border-radius: 3px;
transition: 0.5s;
&:hover{
  background: ${(props) => props.theme.colors.accent1};

}

&:focus-visible {
  outline: 3px solid #1A8781;
  outline-offset: 3px;
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
  color: ${(props) => props.theme.colors.teal};
  font-size: 1.3rem;
  line-height: 1.4;
  white-space: normal;
  text-align: center;
`