import ActivityPage from '../../components/ActivityPage';

const RSPeekABooActivity = () => {
  return (
    <ActivityPage
      title="Peek-a-Boo"
      chipCategory="relationshipSkillsCategory chip"
      difficulty="Simple"
      time="5 min"
      overviewText={
        <div>
         This common game is actually very beneficial for building relationship skills 
         for infants by practicing separations and reassurance.
        </div>
      }

      directionsText={
        <div>
         <ul>
           <li>Sit yourself close to your child</li>
           <li>Cover your face with your hands, a blanket or a toy</li>
           <li>Dramatically reveal your face and say in a happy voice "Peek-a-boo!"</li>
           <li>Repeat until your child is comfortable, then they can participate with you</li>
         </ul>
        </div>
      }
      videoUrl="https://youtu.be/Z37Ru-GRtks"
      buttonCategory="relationshipSkillsCategory activityPageButton"
    />
  );
};

export default RSPeekABooActivity;
