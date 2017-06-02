import React from 'react';
import { CoreRouter } from '../router';
import LocationStepper from './LocationStepper';

const ApplicationPage = ({history}) => {
  return (
    <div>
      <LocationStepper />
      <CoreRouter history={history} />
    </div>
  );
}

export default ApplicationPage;
