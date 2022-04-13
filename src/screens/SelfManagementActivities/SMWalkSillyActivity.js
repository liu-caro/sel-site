import ActivityPage from '../../components/ActivityPage';

const SMWalkSillyActivity = () => {
  return (
    <ActivityPage
      title="Walk Silly"
      chipCategory="selfManagementCategory chip"
      difficulty="Simple"
      time="10 min"
      overviewText={
        <div>
          Boost your child’s body awareness by playing a silly walking game with them.
        </div>
      }
      directionsText={
        <div>
          Use your and your child's imagination to come up with different ways to walk,
          like a crab, a dinosaur, skipping, hopping, and/or cartwheels.
        </div>
      }
      videoUrl="https://youtu.be/4S2yj4TB_I8"
      buttonCategory="selfManagementCategory activityPageButton"
    />
  );
};

export default SMWalkSillyActivity;
