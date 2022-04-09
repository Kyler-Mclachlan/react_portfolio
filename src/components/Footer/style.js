import styled from 'styled-components';

export const Box = styled.div`
padding: 30px 60px;
background: Lavender;
position: absolute;
bottom: 0;
width: 100%;


@media (max-width: 1000px) {
	padding: 10px 0px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000vw;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
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



&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 10px;
color: #fff;
margin-bottom: 0px;
font-weight: bold;
`;
