import React from 'react';
import { CoreRouter } from 'src/router';
import LocationStepper from 'src/components/LocationStepper';
import { Container, Heading } from 'src/helpers/container';

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
