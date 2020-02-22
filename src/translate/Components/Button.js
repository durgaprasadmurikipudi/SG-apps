import React from 'react';

class Button extends React.Component {
  render() {
    const labelSubmit = this.context === 'english' ? 'Submit' : 'voorleggen';
    return (
      <button className="ui primary button">{labelSubmit}</button>
    );
  }
}

export default Button;