import ActivityPage from '../../components/ActivityPage';

const SFAStayPositiveActivity = () => {
  return (
    <ActivityPage
      title="Stay Positive"
      chipCategory="selfAwarenessCategory chip"
      difficulty="Simple"
      time="15 min"
      overviewText={
        <div>
          This activity aims to build your child's self-confidence and awareness, giving them
          powerful tools to help ground themselves.
        </div>
      }
      directionsText={
        <div>
          Help your child make a list of positive affirmations (example: I am kind, I am smart,
          I am good at having fun). Put it somewhere visible and repeat it to them from time to time.
        </div>
      }
      videoUrl="https://youtu.be/lXjIhSiAgJg"
      buttonCategory="selfAwarenessCategory activityPageButton"
    />
  );
};

export default SFAStayPositiveActivity;
