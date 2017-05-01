import React from 'react';

class FirstComponent extends React.Component {
  render() {
    return (
      <div>
        <button className="first-component" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          Your first Component
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
          <li>You know you are using bootstrap, right?</li>
        </ul>
      </div>
    );
  }
}
export default FirstComponent;
