import ActivityPage from '../../components/ActivityPage';

const SMFreezeDanceActivity = () => {
  return (
    <ActivityPage
      title="Freeze Dance"
      chipCategory="selfManagementCategory chip"
      difficulty="Moderate"
      time="20+ min"
      overviewText={
        <div>
         This may be an older, more commonly played game but it remains a great simple way to practice 
         control over their bodies and minds. Either alone or in a group of kids, play music for your kid 
         and pause it unexpectedly from time to time, during which the kid has to freeze in place. Whoever 
         makes it through 10 rounds without being caught unfrozen wins!  
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

export default SMFreezeDanceActivity;
