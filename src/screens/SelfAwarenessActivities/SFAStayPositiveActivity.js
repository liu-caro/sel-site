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
        Help your child make a list of positive affirmations (example: I am kind, I am smart, 
        I am good at having fun). Put it somewhere visible and repeat it to them from time to time. 
        </div>
      }
      directionsText={
        <div>
       
        </div>
      }
      videoUrl="https://youtu.be/4S2yj4TB_I8"
      buttonCategory="selfAwarenessCategory activityPageButton"
    />
  );
};

export default SFAStayPositiveActivity;
