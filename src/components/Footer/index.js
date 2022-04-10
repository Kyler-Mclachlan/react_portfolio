import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./style";
  
const Footer = () => {
  return (
    <Box>
      <Container>
      <h1 style={{ color: "SlateGrey", 
                   textAlign: "center", 
                   fontSize: "15px",
                   marginTop: "-5background: Lavender;px", }}>
         More About Kyler
      </h1>
      
      
        
          <div style={{ display: "Flex",
                    fontSize: "10px", 
                   justifyContent: "center",
                   marginLeft:"-25px", 
                    }}>
            <FooterLink href="https://www.linkedin.com/in/kyler-mclachlan/">LinkedIn</FooterLink>
            <FooterLink href="#">Github</FooterLink>
            <FooterLink href="#">MyEsri</FooterLink>
            </div>
        
            </Container>
    </Box>
  );
};
export default Footer;