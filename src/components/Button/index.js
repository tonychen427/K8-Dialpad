import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getImc } from '../../services/imc';

import './styles/index.css';

const FloatingButton = props => {
  if (props.icon === '') return <div style={{ border: 'inherit' }}/>;
  return (<div onClick={() => { 
              props.action ? props.action(props) : null;
              // DialerService.emitUIEvent(props);
              getImc().emit(props);
            }} 
          >
            <div
              style={{background: props.bgcolor, color: props.color }}
              className={`floating-button ${props.floating ? 'floating': ''}`}
              onClick={props.action}
            >
              <FontAwesomeIcon icon={props.icon} />
            </div>
            <div className='button-title'>{props.title}</div>
          </div>
  );
}

FloatingButton.defaultProps = {
  title: '',
  floating: false,
  color: 'gray',
  bgcolor: 'white',
}

FloatingButton.propTypes = {
  action: PropTypes.func,
  floating: PropTypes.bool,
  title: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  bgcolor: PropTypes.string,
};

FloatingButton.defaultProps = {
  icon: '',
};

export default FloatingButton;
