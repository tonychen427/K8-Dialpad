import React from 'react';
import TimeElapsed from './timeElapsed';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState = {
      isRunning: false,
      lapTimes: [],
      timeElapsed: 0,
    };
  }
  componentDidMount() {
    this.startTimer();
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
    this.setState({
      timeElapsed: 0,
    });
  }
  toggle = () => {
    this.setState({isRunning: !this.state.isRunning}, () => {
      this.state.isRunning ? this.startTimer() : clearInterval(this.timer)
    });
  }
  lap = () => {
    const {lapTimes, timeElapsed} = this.state;
    this.setState({lapTimes: lapTimes.concat(timeElapsed)});
  }
  reset = () => {
    clearInterval(this.timer);
    this.setState(this.initialState);
  }
  startTimer() {
    this.startTime = Date.now();
    this.timer = setInterval(this.update, 10);
  }
  update = () => {
    const delta = Date.now() - this.startTime;
    this.setState({timeElapsed: this.state.timeElapsed + delta});
    this.startTime = Date.now();
  }
  render() {
   const { timeElapsed } = this.state;
    return (
      <div>
        <TimeElapsed id="timer" timeElapsed={timeElapsed} />
      </div>
    );
  }
}

export default Stopwatch;
