import ActivityPage from '../../components/ActivityPage';

const SFAJournalingActivity = () => {
  return (
    <ActivityPage
      title="Journaling"
      chipCategory="selfAwarenessCategory chip"
      difficulty="Simple"
      time="15 min"
      overviewText={
        <div>
          Journaling is a great way for anyone to express their emotions.
        </div>
      }
      directionsText={
        <div>
          While your kid may be too young to write, they can start a daily journal drawing of their day.
          Assist them in adding any words they would like to include.
        </div>
      }
      videoUrl="https://youtu.be/Gt_8PQJK0rM"
      buttonCategory="selfAwarenessCategory activityPageButton"
    />
  );
};

export default SFAJournalingActivity;
