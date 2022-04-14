import ActivityPage from '../../components/ActivityPage';

const SFAMorningSunshineActivity = () => {
  return (
    <ActivityPage
      title="Morning Sunshine"
      chipCategory="selfAwarenessCategory chip"
      difficulty="Simple"
      time="5 min"
      overviewText={
        <div>
          This activity aims to start off you and your child's day with positivity and something to look forward to.
        </div>
      }
      directionsText={
        <div>
          Ask your kid what “makes their sun shine today” in the mornings aka what are they grateful for or
          excited about. If time permits, let them draw and cut out a sun that they can hang up on their wall
          and add to every day.
        </div>
      }
      videoUrl="https://youtu.be/94zhaB9bJqI"
      buttonCategory="selfAwarenessCategory activityPageButton"
    />
  );
};

export default SFAMorningSunshineActivity;
