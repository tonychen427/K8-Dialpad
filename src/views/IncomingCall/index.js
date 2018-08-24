import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import Avatar from '../../components/Avatar';
import Store from '../../services/store/';
import { SET_VIEWS } from '../../actions/dialer';
import './styles/index.css';

const actionTypeBtn = [ 
  { title: 'Answer', icon: 'phone', color:'white', bgcolor:'green', action: data => { Store.dispatch({ type: SET_VIEWS, view: 'INACTIVECALL', data }) } },
  { title: '', icon: '', action: data => { console.log(data) } },
  { title: 'Reject', icon: 'phone-slash', color:'white', bgcolor:'red', action: data => { console.log(data) } },
];
class Index extends Component {
  constructor() {
    super();
    this.state = { modalIsOpen: true };
  }
  render() {
    return (
      <div>
        <br/><br/>
        <div className="keypad-action avatar"><Avatar /></div>
        <div className="keypad-action">John Smith</div>
        <div className="keypad-action">561-901-5698</div>
        <br/>
        <div className="InActiveCallWrapper">
          { actionTypeBtn.map( (data, index )=> <Button key={index} icon={data.icon} title={data.title} color={data.color} bgcolor={data.bgcolor} action={data.action} />) }
        </div>
      </div>
    );
  }
}

Index.propTypes = {
  dispatch: PropTypes.func,
  dialerIndex: PropTypes.number,
};

function mapStateToProps(state) {
  return {
    dialerIndex: state.getIn(['dialer', 'dialerIndex']),
  };
}
export default connect(mapStateToProps)(Index);
