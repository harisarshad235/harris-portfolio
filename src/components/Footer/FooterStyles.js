import styled from "styled-components"

export const FooterWrapper = styled.section`
	width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;


  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`

export const LinkItem = styled.a`
	font-size: 1.6rem;
	line-height: 2.8rem;
	color: ${(props) => props.theme.colors.muted};
	margin-bottom: 1.6rem;
	transition: .3s ease;
	position: relative;
	left: 0;

	&:hover {
		color: ${(props) => props.theme.colors.accent1};
		left: 6px;
	}

	@media ${props => props.theme.breakpoints.md} {
		font-size: 1.5rem;
		line-height: 2.6rem;
		display: flex;
	}

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 1.35rem;
		line-height: 2.2rem;
		margin-bottom: 0.8rem;
		display: flex;
		align-items: center;
	}
`;

export const SocialIconsContainer = styled.div`
max-width: 1040px;
display: flex;
justify-content: space-between;

@media ${props => props.theme.breakpoints.md}{
  display: flex;
  justify-content: space-between;
}

@media ${props => props.theme.breakpoints.sm}{
  display: flex;
	width: 100%;
  flex-direction: column;
}
`

export const CompanyContainer = styled.div`
  display: flex;
	align-items:baseline;
	flex-wrap: wrap;
	margin-right: auto;
	

	@media ${props => props.theme.breakpoints.md}{
		flex-direction: column;
		align-items: baseline;
	}

	@media ${props => props.theme.breakpoints.sm}{
		display: flex;
		flex-direction: column;
		margin: 0 0 32px;
		align-items: center;
	}
`
export const CompanyContainers = styled.div`
  display: flex;
	align-items:baseline;
	flex-wrap: wrap;
	margin-right: auto;
	

	@media ${props => props.theme.breakpoints.md}{
		flex-direction: column;
		align-items: baseline;
	}

	@media ${props => props.theme.breakpoints.sm}{
		display: flex;
		flex-direction: column;
		margin: 0 0 32px;
		align-items: center;
	}
`


export const CopyRight = styled.div`
		display: flex;
		align-items: center;
		justify-content: center;
			
  


`




export const Slogan = styled.p`
	color: ${(props) => props.theme.colors.muted};
	min-width: 280px;
	letter-spacing: 0.02em;
	font-size: 1.5rem;
	line-height: 2.4rem;
	padding: 1rem;

	@media ${props => props.theme.breakpoints.md}{
		font-size: 1.4rem;
		line-height: 2.2rem;
	}

	@media ${props => props.theme.breakpoints.sm}{
		line-height: 2.0rem;
		font-size: 1.3rem;
		min-width: 100px;
	}
`;

export const SocialContainer = styled.div`
	display: flex;
  align-items: center;

	@media ${props => props.theme.breakpoints.md}{
		justify-content: center;
		padding-right: 16px;
		flex-wrap: wrap;
	}
`


export const LinkList = styled.ul`
	border-top: 1px solid ${(props) => props.theme.colors.border};
  display: grid;
	grid-template-columns: repeat(3, minmax(85px, 220px));
	gap: 40px;
  padding: 40px 0 28px;

	@media ${props => props.theme.breakpoints.lg} {
		padding: 32px 0 16px;
	}

	@media ${props => props.theme.breakpoints.md} {
		width: 100%;
		padding: 32px 0 16px;
		gap: 16px;
	}
	@media ${props => props.theme.breakpoints.sm} {
		width: 100%;
		padding: 32px 4px 16px;
		gap: 5px;
	}
`

export const LinkColumn = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 220px;
	width: 100%;
`
export const LinkTitle = styled.h4`
	font-style: normal;
	font-weight: 700;
	font-size: 1.3rem;
	line-height: 2.4rem;
	text-transform: uppercase;
	letter-spacing: 0.1em;
	color: ${(props) => props.theme.colors.teal};
	margin-bottom: 1.4rem;

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 1.2rem;
		line-height: 2.0rem;
		margin-bottom: 0.8rem;
	}
`;
