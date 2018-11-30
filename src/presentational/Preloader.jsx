import React from 'react';
import { Segment, Dimmer, Loader } from 'semantic-ui-react';

const Preloader = (props) => {
  const style = {
    height: {
      minHeight: props.height,
    }
  }
  return (
  <div>
    <Segment style={style.height}>
      <Dimmer active>
        <Loader size='large'>Loading...</Loader>
      </Dimmer>
    </Segment>
  </div>
)};

export default Preloader;
