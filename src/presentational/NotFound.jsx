import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  Icon,
} from 'semantic-ui-react';
import './styles/NotFound.css';

const NotFound = () => (
  <Container textAlign='center' className="not-found">
    <Header as='h1' icon>
      <Icon name='question circle outline' />
      Oh dear!
    </Header>
    <Header as='h2'>
      We couldn't find that page.
    </Header>
    <Link className='ui button' to='/'>Let's go Home</Link>
  </Container>
);

export default NotFound;
