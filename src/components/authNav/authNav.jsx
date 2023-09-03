import { NavLink } from 'react-router-dom';
import { Center, Flex, Button } from '@mantine/core';

const AuthNav = () => {
  return (
    <div>
<Center> 
      <Flex gap="xl">
        
        <NavLink to="/register">
          <Button
            variant="gradient"
            gradient={{ from: 'teal', to: 'lime', deg: 105 }}
            size='lg'
          >
            Register
          </Button>
        </NavLink>

        <NavLink to="/login">
          <Button
            variant="gradient"
            gradient={{ from: 'teal', to: 'blue', deg: 60 }}
            size='lg'
          >
            Log in
          </Button>
        </NavLink>
        
      </Flex>
      </Center>
    </div>
  );
};

export default AuthNav;
