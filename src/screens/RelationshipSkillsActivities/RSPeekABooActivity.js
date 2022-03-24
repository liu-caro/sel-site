import ActivityPage from '../../components/ActivityPage';

const RSPeekABooActivity = () => {
  return (
    <ActivityPage
      title="Peek-a-Boo"
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
      videoUrl="https://youtu.be/4S2yj4TB_I8"
      buttonCategory="relationshipSkillsCategory activityPageButton"
    />
  );
};

export default RSPeekABooActivity;
