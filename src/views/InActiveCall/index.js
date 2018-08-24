import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import Timer from '../../components/Timer';
import Avatar from '../../components/Avatar';
import { SET_VIEWS } from  '../../actions/dialer';
import './styles/index.css';

const actionTypeBtn = [ 
  { title: 'Mute', icon: 'microphone-slash' },
  { title: 'Hold', icon: 'pause' },
  { title: 'Keypad', icon: 'th' },
];
class Index extends Component {
  constructor() {
    super();
    this.state = { modalIsOpen: true };
  }
  hangup = () => {
    this.props.dispatch({ type: SET_VIEWS, view: 'KEYPAD' });
  }
  render() {
    return (
      <div>
        <div className="keypad-action avatar"><Avatar /></div>
        <div className="keypad-action">John Smith</div>
        <div className="keypad-action">561-901-5698</div>
        <div className="keypad-action"><Timer /></div>
        <div className="InActiveCallWrapper">
          { actionTypeBtn.map( (data, index) => <Button Key={index} icon={data.icon} title={data.title} color={data.color} />) }
        </div>
        <div className="keypad-action"><Button icon="phone-slash" title='hangup' color='white' bgcolor='red' action={this.hangup} floating /></div>
      </div>
    );
  }
}

Index.propTypes = { 
  dispatch: PropTypes.func
};

function mapStateToProps(state) {
  return {
    dialerIndex: state.getIn(['dialer', 'dialerIndex']),
  };
}
export default connect(mapStateToProps)(Index);
