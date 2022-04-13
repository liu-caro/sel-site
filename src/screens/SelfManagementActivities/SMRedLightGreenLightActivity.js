import ActivityPage from '../../components/ActivityPage';

const SMRedLightGreenLightActivity = () => {
  return (
    <ActivityPage
      title="Red Light, Green Light"
      chipCategory="selfManagementCategory chip"
      difficulty="Moderate"
      time="20+ min"
      overviewText={
        <div>
         Best played outside and with others, pick two points, a starting and finishing line, 
         fairly far apart and have your child (and potentially others) line up at the starting line. 
         When you say green light everyone runs toward the finish light but must abruptly halt when 
         you say red light. Anyone caught still running is out and the last person in wins!  
        </div>
      }
      directionsText={
        <div>
          
        </div>
      }
      videoUrl="https://youtu.be/4vPep4MB_8A"
      buttonCategory="selfManagementCategory activityPageButton"
    />
  );
};

export default SMRedLightGreenLightActivity;
