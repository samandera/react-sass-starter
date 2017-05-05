import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class BootstrapComponent extends React.Component {
  render() {
    return (
      <DropdownButton bsStyle={'first-component'} title={'Your first Component'} id={'first-component'}>
        <MenuItem eventKey="1">You know you are using bootstrap, right?</MenuItem>
      </DropdownButton>
    );
  }
}
export default BootstrapComponent;
