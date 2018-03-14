import React, { Component } from 'react';
import Card from 'components/card'
import classNames from 'classnames'
import './styles.css';

class List extends Component {

  render() {
    const { items, selectedIndex } = this.props;

    return (
      <ul className="list">
        {items.map((item, i) => {
          const itemClasses = classNames("list__item", {
            "list__item--selected": selectedIndex === i
          })

          return (
            <li className={itemClasses}>
              <Card onClick={this.onItemClick.bind(this, item, i)}>{item.display}</Card>
            </li>
          )
        })}
      </ul>
    );
  }

  onItemClick = (item, i) => {
    const { onItemClick } = this.props;

    if(onItemClick) {
      onItemClick(item, i);
    }
  }
}

export default List;
