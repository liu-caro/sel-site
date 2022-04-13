import ActivityPage from '../../components/ActivityPage';

const RSPeekABooActivity = () => {
  return (
    <ActivityPage
      title="Peek-a-Boo"
      chipCategory="relationshipSkillsCategory chip"
      difficulty="Simple"
      time="5 min"
      overviewText={
        <div>
         This common game is actually very beneficial for building relationship skills 
         for infants by practicing separations and reassurance.
        </div>
      }

      directionsText={
        <div>
         
        </div>
      }
      videoUrl="https://youtu.be/Z37Ru-GRtks"
      buttonCategory="relationshipSkillsCategory activityPageButton"
    />
  );
};

export default RSPeekABooActivity;
