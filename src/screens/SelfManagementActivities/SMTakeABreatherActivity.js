import ActivityPage from '../../components/ActivityPage';

const SMTakeABreatherActivity = () => {
  return (
    <ActivityPage
      title="Take A Breather"
      overviewText={
        <div>
         Practice slow, steady and mindful breathing with your child, particularly in times of stress. 
         Invite them to close their eyes, and put their hands on their stomachs. Have them inhale slowly 
         and feel their stomach rise then exhale with an “ahhh”. If your child is old enough, consider pairing 
         this with a short beginner slow-flow yoga video that you can do together.  
        </div>
      }
      directionsText={
        <div>
          
        </div>
      }
      videoUrl="https://youtu.be/4S2yj4TB_I8"
      buttonCategory="selfManagementCategory activityPageButton"
    />
  );
};

export default SMTakeABreatherActivity;
