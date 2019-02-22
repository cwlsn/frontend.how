import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

const StyledSection = styled.section`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	position: relative;
	background: radial-gradient(
			circle at center,
			#024184 1%,
			#820289 56%,
			#68006d 100%
		)
		top center;
`;

const Heading = styled.h1`
	color: rgba(255, 255, 255, 0.9);
	font-family: 'Cardo';
	font-size: 6rem;
	font-weight: bold;
	text-shadow: 0.35rem 0.35rem 0 rgba(0, 0, 0, 0.35);
`;

const Tagline = styled.p`
	color: rgba(255, 255, 255, 0.6);
	font-family: 'Raleway';
	font-size: 2rem;
	text-shadow: 0.2rem 0.2rem 0 rgba(0, 0, 0, 0.25);
`;

const DiagStrip = styled.div`
	background: rgba(255, 255, 255, 0.03);
	width: 35vw;
	height: 500px;
	transform: skew(45deg) rotate(45deg);
	position: absolute;
	pointer-events: none;
`;

const DiagStrip0 = styled(DiagStrip)`
	top: -50px;
	right: -300px;
`;

const DiagStrip1 = styled(DiagStrip)`
	top: 0;
	right: 0;
`;

const DiagStrip2 = styled(DiagStrip)`
	top: 50px;
	right: 300px;
`;

const DiagStrip3 = styled(DiagStrip)`
	top: 100px;
	right: 600px;
`;

const DiagStrip4 = styled(DiagStrip)`
	top: 150px;
	right: 900px;
`;

const DiagStrip5 = styled(DiagStrip)`
	top: 200px;
	right: 1200px;
`;

const DiagStrip6 = styled(DiagStrip)`
	top: 250px;
	right: 1500px;
`;

const Splash = () => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
						description
					}
				}
			}
		`}
		render={({
			site: {
				siteMetadata: { title, description },
			},
		}) => (
			<StyledSection>
				<DiagStrip0 />
				<DiagStrip1 />
				<DiagStrip2 />
				<DiagStrip3 />
				<DiagStrip4 />
				<DiagStrip5 />
				<DiagStrip6 />
				<Heading>{title}</Heading>
				<Tagline>{description}</Tagline>
			</StyledSection>
		)}
	/>
);

export default Splash;
