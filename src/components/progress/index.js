import React, { Component } from 'react';
import './styles.css';

class Progress extends Component {

  getBarWidth() {
    const { percent } = this.props;
    return `${percent}%`
  }

  render() {
    return (
      <div className="progress">
        <div className="progress__bar" style={{ width: this.getBarWidth() }}></div>
      </div>
    );
  }
}

export default Progress;
