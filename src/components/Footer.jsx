import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 5px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  margin-right:20px;
`;

const Payment = styled.img`
  width: 100%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Geo</Logo>
        <Description>
          There are many variations of Lorem Ipsum available
        </Description>
        <SocialContainer>
          <SocialIcon color="blue">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="red">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="lightblue">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Mens Fashion</ListItem>
          <ListItem>Women's Fashion</ListItem>
          <ListItem>Kid's Fashion</ListItem>
          <ListItem>Contact Us</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room /> 622 Dixie Path
        </ContactItem>
        <ContactItem>
          <Phone />
          +1 829 282
        </ContactItem>
        <ContactItem>
          <MailOutline />
          contact@mail.com
        </ContactItem>
        <Payment />
      </Right>
    </Container>
  );
};

export default Footer;
