import styled from 'styled-components';

export const Box = styled.div`
padding: 30px;
background: Lavender;
position: absolute;
bottom: 0;
width: 100%;
justify-content: center;
display:flex;


@media (max-width: 1000px) {
	margin-bottom: -200px;
	padding: 10px 0px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-self:center:
	justify-content: center;
	margin-bottom: -2px;
	margin-right: 100px;
	/* background: red; */
	@media (max-width: 1000px) {
		margin-right: 0px;
	}
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: center;
margin-left: 75px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: SlateGrey;
font-size: 10px;
font-type: Bold;
text-decoration: none;
padding-left: 1vw;
`;

export const Heading = styled.p`
font-size: 10px;
color: #fff;
margin-bottom: 0px;
font-weight: bold;
`;
