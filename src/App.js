import React, { useState } from 'react';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Notifications from './components/Notifications/Notifications';

export default function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNetural] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = event => {
    switch(event){
      case 'good':
        setGood(state=> state + 1);
        break;

        case 'netural':
        setNetural(state=> state + 1);
        break;

        case 'bad':
        setBad(state=> state + 1);
        break;
    }
  };

const countTotalFeedback = () => {
  return good + neutral + bad;
};

const countPositiveFeedbackPercentage = () => {
  if (countTotalFeedback() === 0){
    return 0;
  }
  const positivePercentage = Math.round((good/countTotalFeedback())*100);
  return positivePercentage;
};

return (
  <>
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={Object.keys({good, neutral, bad})}
        onLeaveFeedback={onLeaveFeedback}
      />
    </Section>
    <Section title="Statistics">
      {countTotalFeedback() > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notifications message="There is no feedback" />
      )}
    </Section>
  </>
);

};