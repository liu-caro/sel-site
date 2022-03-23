import ActivityPage from '../../components/ActivityPage';

const SFAJournalingActivity = () => {
  return (
    <ActivityPage
      title="Journaling"
      overviewText={
        <div>
         While your kid may be too young to write, they can start a daily journal drawing of their day. 
         Assist them in adding any words they would like to include.
        </div>
      }
      directionsText={
        <div>
       
        </div>
      }
      videoUrl="https://youtu.be/4S2yj4TB_I8"
      buttonCategory="selfAwarenessActivity activityPageButton"
    />
  );
};

export default SFAJournalingActivity;
