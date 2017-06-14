import React from 'react';
import { CoreRouter } from '../router';
import LocationStepper from './LocationStepper';
import { Container, Heading } from '../helpers/container';

const ApplicationPage = ({history}) => {
  return (
    <Container>
      <Heading>Member Application</Heading>
      <LocationStepper />
      <CoreRouter history={history} />
    </Container>
  );
}

export default ApplicationPage;
