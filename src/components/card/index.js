import React, { Component } from 'react';
import classNames from 'classnames';
import './styles.css';

class Card extends Component {
  render() {
    const { onClick, className } = this.props;

    const classes = classNames("card", className, {
      "card--hover": onClick !== undefined
    })

    return (
      <div className={classes} onClick={onClick}>
        {this.props.children}
      </div>
    );
  }
}

export default Card;
