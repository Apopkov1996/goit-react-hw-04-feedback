import React from 'react';

import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../Buttons/FeedbackOptions';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';
import Appcss from './app.module.css';
import { useState } from 'react';

export const App = () => {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  // ==Переробив через хук useState==
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleAddFeedback = name => {
    // this.setState(prevState => ({ [name]: prevState[name] + 1 }));

    setState(prevState => ({ ...prevState, [name]: prevState[name] + 1 }));
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

  const handleTotalFeedback = () => {
    // const { good, neutral, bad } = this.state;
    // const total = good + neutral + bad;
    // return total;

    const { good, neutral, bad } = state;
    const total = good + neutral + bad;
    return total;
  };

  const handlecountPositiveFeedbackPercentage = () => {
    // const { good } = this.state;
    // return Math.round((good / this.handleTotalFeedback()) * 100 || 0);

    const { good } = state;
    return Math.round((good / handleTotalFeedback()) * 100 || 0);
  };

  const { good, neutral, bad } = state;

  return (
    <div className={Appcss.wrapper}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={data => handleAddFeedback(data)}
        />
      </Section>

      <Section title="Statistics">
        {handleTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={handleTotalFeedback()}
            positivePercentage={handlecountPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};
