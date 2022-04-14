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
         The old game Red Light, Green Light is not only fun, it teaches self-management, specifically self-regulation.
         It is also good for overall gross motor development and skills such as speed, running and body control.
        </div>
      }
      directionsText={
        <div>
          Best played outside and with others, pick two points, a starting and finishing line,
          fairly far apart and have your child (and potentially others) line up at the starting line.
          When you say green light everyone runs toward the finish light but must abruptly halt when
          you say red light. Anyone caught still running is out and the last person in wins!
        </div>
      }
      videoUrl="https://youtu.be/4S2yj4TB_I8"
      buttonCategory="selfManagementCategory activityPageButton"
    />
  );
};

export default SMRedLightGreenLightActivity;
