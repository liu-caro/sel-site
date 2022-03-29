import ActivityPage from '../../components/ActivityPage';

const SMWalkSillyActivity = () => {
  return (
    <ActivityPage
      title="Walk Silly"
      overviewText={
        <div>
         Boost your child’s body awareness by playing a silly walking game with them. 
         Use your and your child's imagination to come up with different ways to walk, 
         like a crab, a dinosaur, skipping, hopping, and/or cartwheels.   
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

export default SMWalkSillyActivity;
