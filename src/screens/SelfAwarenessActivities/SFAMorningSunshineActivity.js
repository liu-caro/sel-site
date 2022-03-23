import ActivityPage from '../../components/ActivityPage';

const SFAMorningSunshineActivity = () => {
  return (
    <ActivityPage
      title="Morning Sunshine"
      overviewText={
        <div>
         Ask your kid what “makes their sun shine today” in the mornings aka what are they grateful for or 
         excited about. If time permits, let them draw and cut out a sun that they can hang up on their wall 
         and add to every day.
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

export default SFAMorningSunshineActivity;
