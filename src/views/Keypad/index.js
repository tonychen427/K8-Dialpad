import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import InputTextField from '../../components/InputTextField';
import './styles/keys.css';

const keycode = {
  shift: 16,
  enter: 13,
  deleteBack: 8,
  deleteFront: 46,
};
const keys = [
  { val: '1', txt: '\u00a0' }, { val: '2', txt: 'ABC' }, { val: '3', txt: 'DEF' },
  { val: '4', txt: 'GHI' }, { val: '5', txt: 'JKL' }, { val: '6', txt: 'MNO' },
  { val: '7', txt: 'PQRS' }, { val: '8', txt: 'TUV' }, { val: '9', txt: 'WXYZ' },
  { val: '*', txt: '\u00a0' }, { val: '0', txt: '+' }, { val: '#', txt: '\u00a0' },
];

export class Index extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      showAreaCodeList: false,
      activeKey: '',
    };
  }
  componentDidMount() {
    // this.dialpadInputBox.focus();
  }

  onAreaCodeClick = () => {
    this.setState({ showAreaCodeList: !this.state.showAreaCodeList });
  };

  onClearInputBox = () => {
    this.setState({ inputValue: '' });
  };

  onInputValue = evt => {
    const asYouType = this.inputValueCleanup(evt.target.value);
    this.setState({ inputValue: asYouType });
  };

  onKeyDown = e => {
    if (!this.props.allowDelete &&
        ((e.keyCode === keycode.deleteFront) || (e.keyCode === keycode.deleteBack))) {
      e.preventDefault();
    } else if ((this.props.allowEnterKey) && (e.keyCode === keycode.enter)) {
      this.onSubmitCalling();
    } else {
      const value = this.inputValueCleanup(e.key.substr(-1));
      if ((value !== '') && (value !== '+')) {
        this.props.onKeyPadInputValue((value));
      }
    }
  };

  onMouseDown = e => {
    this.setState({ activeKey: e.currentTarget.dataset.ref });
    const currentKeyValue = `${this.state.inputValue}${e.currentTarget.dataset.ref}`;
    const asYouType = this.inputValueCleanup(currentKeyValue);
    this.setState({ inputValue: asYouType });
    this.props.onDialPadKey(e.currentTarget.dataset.ref, false);
  };

  onMouseUp = e => {
    this.dialpadInputBox.focus();
    this.setState({ activeKey: '' });
    this.props.onDialPadKey(e.currentTarget.dataset.ref, true);
  };

  onSubmitCalling = () => {
    if (!this.props.showCallButton) { return; }
    if (!(this.state.inputValue === '')) {
      this.props.onSubmitPhoneNumber(this.state.inputValue);
      this.setState({ inputValue: '' });
    } else {
      this.setState({ inputValue: this.props.lastCallNumber });
    }
  };

  onUpdateAreaCodeClick = data => {
    this.setState({ selectedAreaCode: data });
  };

  onPasteHandler = e => {
    this.props.allowPaste ? e : e.preventDefault();
  }

  inputValueCleanup = value => value.replace(/[^0-9+*#,]/g, '');
  
  render() {
    return (
      <div>
        <br/><br/>
        <div><InputTextField /></div>
        <div id="keypad">
            {
              keys.map((data, index) =>
                <div
                  key={index}
                  className={`key ${this.state.activeKey === data.val ? 'active' : ''}`}
                  data-ref={data.val}
                  onMouseDown={this.onMouseDown}
                  onMouseUp={this.onMouseUp}
                >{data.val}<span>{data.txt}</span></div>
              )
            }
        </div>
        <div className="keypad-action"><Button icon="phone" color='white' bgcolor='green' action={() => { this.props.dispatch({ type: 'SET_VIEWS', view: 'INACTIVECALL'})}} /></div>
      </div>
    );
  }
}

Index.propTypes = {
  dispatch: PropTypes.func,
  onDialPadKey: PropTypes.func,
  onKeyPadInputValue: PropTypes.func,
  onSubmitPhoneNumber: PropTypes.func,
  lastCallNumber: PropTypes.string,
  removeCallButton: PropTypes.bool,
  showCallButton: PropTypes.bool,
  allowDelete: PropTypes.bool,
  allowEnterKey: PropTypes.bool,
  allowPaste: PropTypes.bool,
  e164: PropTypes.bool,
};

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
