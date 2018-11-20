import React from 'react';
import { Segment, Dimmer, Loader } from 'semantic-ui-react';

const Preloader = (props) => (
  <div>
    <Segment style={{minHeight: props.height}}>
      <Dimmer active>
        <Loader size='large'>Loading...</Loader>
      </Dimmer>
    </Segment>
  </div>
);

export default Preloader;
