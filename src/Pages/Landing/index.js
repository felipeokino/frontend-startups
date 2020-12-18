import React from 'react';
import rocket from '../../assets/images/rocket.png';
import { Box, ButtonLink, Container, Image, Line, SimpleText, Title } from './styles';


export default function Landing() {
  return (
    <Box>
      <Image src={rocket} />
      <Container>
        <SimpleText>
          Vem aí!
      </SimpleText>
        <Title>
          THE
        <br />
        STARTUP
        <br />
        FEST - #1
      </Title>
        <SimpleText>
          Venha conhecer as startups participantes!
      </SimpleText>
        <Line />
        <ButtonLink to="/startups">
          START
       </ButtonLink>
      </Container>
    </Box>
  )
}
