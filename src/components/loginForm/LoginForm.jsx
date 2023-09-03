import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Button } from '@mantine/core';
import { TextInput, Flex, Center } from '@mantine/core';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
      <Flex mih={200}></Flex>
        <Center maw={400} h={200} mx="auto">
          <TextInput
            label="Email"
            placeholder="abcd@mail.com"
            description="Please enter your email"
            inputWrapperOrder={['label', 'error', 'input', 'description']}
            type="email"
            name="email"
            size="xl"
            withAsterisk
          />
        </Center>
      </label>
      <label>
        <Center maw={400} h={100} mx="auto">
          <TextInput
            label="Password"
            placeholder="123123"
            description="Please enter your password"
            inputWrapperOrder={['label', 'error', 'input', 'description']}
            type="password"
            name="password"
            size="xl"
            withAsterisk
          />
        </Center>
      </label>
      <Center maw={400} h={200} mx="auto">
        <Button type="submit" size="lg">
          Log in
        </Button>
      </Center>
    </form>
  );
};
