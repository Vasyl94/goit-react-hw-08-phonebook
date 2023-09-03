import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button } from '@mantine/core';
import { TextInput, Flex, Center } from '@mantine/core';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Flex mih={200}>  </Flex>
      <Center maw={400} h={100} mx="auto">
        <label>
          <TextInput
            label="Name"
            placeholder="Aleks"
            withAsterisk
            description="Please enter your name"
            inputWrapperOrder={['label', 'error', 'input', 'description']}
            type="text"
            name="name"
            size="xl"
          />
        </label>
      </Center>
      <label>
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
            label="Custom layout"
            placeholder="Custom layout"
            description="Description below the input"
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
          Register
        </Button>
      </Center>
    </form>
  );
};
