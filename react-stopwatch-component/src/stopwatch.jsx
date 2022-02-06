import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
      counter: 0,
      intervalId: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick() {
    this.setState({
      isOn: !this.state.isOn
    });

    this.toggleTimer();
  }

  getButton(isOn) {
    if (isOn) {
      return 'fas fa-pause';
    } else {
      return 'fas fa-play';
    }
  }

  toggleTimer() {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
      this.setState({
        intervalId: 0
      });
      return;
    }

    const newIntervalId = setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);

    this.setState({
      intervalId: newIntervalId
    });
  }

  reset() {
    if (!this.state.isOn) {
      this.setState({
        counter: 0
      });
    }
  }

  render() {
    return (
      <div>
        <div onClick={this.reset}
            className="circle">  {this.state.counter}
        </div>
          <i onClick={this.handleClick}
        className={this.getButton(this.state.isOn)}></i>
      </div>
    );
  }
}

export default StopWatch;
