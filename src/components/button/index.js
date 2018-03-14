import React, { Component } from 'react';
import classNames from 'classnames';
import './styles.css';

class Button extends Component {
  render() {
    const {
      disabled,
      onClick
    } = this.props;

    const classes = classNames("button", {
      "button--disabled": disabled
    })

    return (
      <div className={classes} onClick={onClick}>
        {this.props.children}
      </div>
    );
  }
}

export default Button;
