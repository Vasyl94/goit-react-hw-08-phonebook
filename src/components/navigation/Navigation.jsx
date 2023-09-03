import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Button, Center, Flex } from '@mantine/core';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Center h={100}>
        <Flex mih={50} gap="xl">
          <NavLink to="/">
            <Button
              variant="gradient"
              gradient={{ from: 'indigo', to: 'cyan' }}
              size="lg"
              uppercase
            >
              Home
            </Button>
          </NavLink>
          {isLoggedIn && (
            <NavLink to="/contacts">
              <Button
                variant="gradient"
                gradient={{ from: 'indigo', to: 'cyan' }}
                size="lg"
                uppercase
              >
                Contacts
              </Button>
            </NavLink>
          )}
        </Flex>
      </Center>
    </nav>
  );
};
