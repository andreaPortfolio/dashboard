import { useState, ChangeEvent } from "react";
import {useNavigate} from 'react-router-dom';
import { Flex, InputForm, Box, Text, Button } from "../..";
import {ROUTES, EMAIL_REGEX, PASSWORD_REGEX} from '../../../utils';


const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();

  const onClickButton = (): void | null => {
    if (!EMAIL_REGEX.test(email)) {
      setEmailError(true);
    }
    if (!PASSWORD_REGEX.test(password)) {
      setPasswordError(true);
    }
    if (!EMAIL_REGEX.test(email) || !PASSWORD_REGEX.test(password)) {
      return null;
    }
    navigate(ROUTES.home);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, id } = event.target;  
    if (id === "email") {
      setEmailError(false);
      return setEmail(value);
    }
    setPasswordError(false);
    return setPassword(value);
  };

  return (
  
      <Flex
        height="582px"
        width="380px"
        backgroundColor="white"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        paddingBottom="40px"
        paddingTop="40px"
        paddingLeft="32px"
        paddingRight="32px"
      >
        <Text fontSize="19px" fontWeight="700" color="tertiary">
          Dashboard Kit
        </Text>
        <Box height="32px" />
        <Text fontSize="24px" color="black">
          Log In to Dashboard Kit
        </Text>
        <Box height="12px" />
        <Text color="mediumText">Enter your email and password below</Text>
        <Box height="48px" />
        <InputForm
          type="email"
          name="email"
          id="email"
          labelText="login"
          placeholder="Email address"
          error={emailError ? "email non valida" : ""}
          onChange={handleChange}
          value={email}
          width='100%'
        />
        <Box height="24px" />
        <InputForm
          type="password"
          name="password"
          id="password"
          labelText="password"
          placeholder="Password"
          onChange={handleChange}
          value={password}
          error={passwordError ? "password non valida" : ""}
    
        />
        <Box height="24px" />
        <Button type="submit" width="100%" onClick={onClickButton}>
          Log in
        </Button>
      </Flex>
  );
};

export default Login;
