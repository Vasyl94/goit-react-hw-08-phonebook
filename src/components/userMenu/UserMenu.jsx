import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Button, Center, Flex } from '@mantine/core';
import { P,Div } from './userMenu.styled';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Center maw={400} h={200} mx="auto">
      <Flex mih={200}>
        <Div>
          <P>Welcome, {user.name}</P>
          <Button type="button" onClick={() => dispatch(logOut())} size="lg" uppercase color="red">
            Logout
          </Button>
        </Div>
      </Flex>
    </Center>
  );
};
