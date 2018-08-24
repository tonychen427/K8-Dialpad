import React from 'react';
import PropTypes from 'prop-types';

class TimeElapsed extends React.Component {
  getUnits() {
    const seconds = this.props.timeElapsed / 1000;
    return {
      min: Math.floor(seconds / 60).toString(),
      sec: Math.floor(seconds % 60).toString(),
      msec: (seconds % 1).toFixed(3).substring(2)
    };
  }
  leftPad = (width, n) => {
    if ((`${n  }`).length > width) {
      return n;
    }
    const padding = new Array(width).join('0');
    return (padding + n).slice(-width);
  };
  render() {
    const units = this.getUnits();
    return (
      <div>
        <span>{this.leftPad(2, units.min)}:</span>
        <span>{this.leftPad(2, units.sec)}</span>
        {/* <span>{units.msec}</span> */}
      </div>
    );
  }
}

TimeElapsed.propTypes = {
  timeElapsed: PropTypes.number,
};

export default TimeElapsed;