import React, { Component } from 'react';
import './styles.css';

import List from 'components/list'
import Card from 'components/card'
import Button from 'components/button'
import Progress from 'components/progress'

class IndexPage extends Component {

  static defaultProps = {
    items: [{
      emoji: "😍",
      display: "😍 Smiling Face With Heart-Eyes."
    }, {
      emoji: "❤️",
      display: "❤️ Red heart."
    }, {
      emoji: "😀",
      display: "😀 Grinning Face."
    }, {
      emoji: "😎",
      display: "😎 Smiling Face With Sunglasses."
    }, {
      emoji: "🎉",
      display: "🎉 Party Popper."
    }, {
      emoji: "😊",
      display: "😊 Smiling Face With Smiling Eyes."
    }, {
      emoji: "👍",
      display: "👍 Thumbs Up."
    }, {
      emoji: "💩",
      display: "💩 Pile Of Poo."
    }]
  }

  state = {
    isShowingStats: false,
    selectedIndex: null
  }

  renderStatsScreen() {
    const { items } = this.props;

    return (
      <div>
        {items.map((item) => (
          <Card className="index--page__stats-item">
            {item.emoji}
            <Progress percent={Math.random() * 100} />
          </Card>
        ))}
      </div>
    )
  }

  renderVoteScreen() {
    const { selectedIndex } = this.state;
    const { items } = this.props;

    return (
      <div>
        <List items={items} selectedIndex={selectedIndex} onItemClick={this.handleCardClick} />
        <Button onClick={this.handleSubmit} disabled={selectedIndex === null}>
          {"Submit Answer"}
        </Button>
      </div>
    );
  }

  render() {
    const { isShowingStats } = this.state;

    return (
      <div className="index-page">
        {!isShowingStats && this.renderVoteScreen()}
        {isShowingStats && this.renderStatsScreen()}
      </div>
    );
  }

  handleCardClick = (item, index) => {
    const { selectedIndex } = this.state;

    // deselect current selection
    if(selectedIndex === index) {
      this.setState({ selectedIndex: null });
      return;
    }

    this.setState({ selectedIndex: index });
  }

  handleSubmit = () => {
    this.setState({ isShowingStats: true });
  }
}


export default IndexPage;
