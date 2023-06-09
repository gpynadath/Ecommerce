import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  
`;

const Login = () => {
  return (
    <Container>
      {" "}
      <Wrapper>
        <Title>Create an Account</Title>
        <Form>
          <Input placeholder="Username" />

          <Input placeholder="Password" />

          <Button>Create</Button>
          <Link>Forgot Password?</Link>
          <Link>Create an account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
