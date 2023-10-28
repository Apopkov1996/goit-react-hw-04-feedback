import React from 'react';

import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../Buttons/FeedbackOptions';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';
import Appcss from './app.module.css';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleAddFeedback = name => {
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  // handleAddGoodFeedback = () => {
  //   this.setState(prevState => ({ good: prevState.good + 1 }));
  // };

  // handleAddNeutralFeedback = () => {
  //   this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  // };

  // handleAddBadFeedback = () => {
  //   this.setState(prevState => ({ bad: prevState.bad + 1 }));
  // };

  handleTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  handlecountPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.handleTotalFeedback()) * 100 || 0);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={Appcss.wrapper}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={data => this.handleAddFeedback(data)}
          />
        </Section>

        <Section title="Statistics">
          {this.handleTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.handleTotalFeedback()}
              positivePercentage={this.handlecountPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}
