import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { MailOutline, Phone, Pinterest, Room } from '@mui/icons-material';
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Logo = styled.h1`

`

const Desc = styled.p`
  margin: 20px 0px;
`

const SocialContainer = styled.div`
  display: flex;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`

const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff5f5" })}

`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

const Payment = styled.img`
  width: 30%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>E-RAIDR.</Logo>
        <Desc>
          There are many variations of passages of Lorem ipsum dolor sit,
          amet consectetur adipisicing elit.
          Porro neque praesentium suscipit ex nostrum.
          Alias debitis laborum consequatur natus vitae
          ducimus nisi voluptatem fugit nostrum molestiae officiis
          tenetur, culpa magni!
        </Desc>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <FacebookIcon />
          </SocialIcon>

          <SocialIcon color="e4405f">
            <InstagramIcon />
          </SocialIcon>

          <SocialIcon color="55acee">
            <TwitterIcon />
          </SocialIcon>

          <SocialIcon color="e60023">
            <Pinterest />
          </SocialIcon>

        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          Carrer del Valencia, 999, Valencia, Spain
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +34 666 66 66 66
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          raidrdev@gmail.com
        </ContactItem>
        <Payment src="https://beehomecompany.co.uk/wp-content/uploads/2021/07/payments.png" />
      </Right>
    </Container>
  )
}

export default Footer
