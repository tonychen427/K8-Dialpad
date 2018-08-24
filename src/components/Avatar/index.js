import React from 'react';
import UserAvatar from 'react-user-avatar';
import './styles/index.css';

class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState = {
    };
  }
  render() {
    return (
      <UserAvatar size="100"
        name="Will Binns-Smith"
        src="https://vignette.wikia.nocookie.net/recipes/images/1/1c/Avatar.svg/revision/latest?cb=20110302033947"
      />
    );
  }
}

export default Avatar;
