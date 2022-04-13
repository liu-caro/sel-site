import ActivityPage from '../../components/ActivityPage';

const SMSimonSaysActivity = () => {
  return (
    <ActivityPage
      title="Simon Says"
      chipCategory="selfManagementCategory chip"
      difficulty="Moderate"
      time="15 min"
      overviewText={
        <div>
         Take turns between you and your kid playing as Simon and try to get the whole family 
         involved. Kids can practice following the commands of Simon as quickly as they can 
         and not getting tripped up when someone doesn’t say “Simon says” before a command. 
         This will not only help increase body awareness but also aid in active listening.  
        </div>
      }
      directionsText={
        <div>
          
        </div>
      }
      videoUrl="https://youtu.be/OkO8DaPIyXo"
      buttonCategory="selfManagementCategory activityPageButton"
    />
  );
};

export default SMSimonSaysActivity;
