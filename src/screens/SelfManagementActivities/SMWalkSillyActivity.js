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
         Use your and your child's imagination to come up with different ways to walk, 
         like a crab, a dinosaur, skipping, hopping, and/or cartwheels.   
        </div>
      }
      directionsText={
        <div>
          
        </div>
      }
      videoUrl="https://youtu.be/ILD9t1egFM4"
      buttonCategory="selfManagementCategory activityPageButton"
    />
  );
};

export default SMWalkSillyActivity;
