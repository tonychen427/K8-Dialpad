import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactModal from 'react-modal-resizable-draggable';
import { INCOMINGCALL, KEYPAD, INACTIVECALL } from '../common/constants';
import InActiveCall from './InActiveCall';
import IncomingCall from './IncomingCall';
import Keypad from './Keypad';


class Index extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <ReactModal 
          disableResize 
          initWidth={260}
          initHeight={400}
          top={window.innerHeight - 420 }
          left={window.innerWidth - 300 }
          onRequestClose={this.closeModal} 
          isOpen={this.props.openDialer && this.props.view !== ''}
        >
          { this.props.view === KEYPAD && <Keypad /> }
          { this.props.view === INCOMINGCALL && <IncomingCall/> }
          { this.props.view === INACTIVECALL && <InActiveCall/> }
        </ReactModal>
      </div>
    );
  }
}

Index.propTypes = {
  openDialer: PropTypes.bool,
  view: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    view: state.getIn(['dialer', 'view']),
  };
}
export default connect(mapStateToProps)(Index);
