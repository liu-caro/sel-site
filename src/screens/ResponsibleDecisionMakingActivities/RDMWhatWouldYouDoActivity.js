import ActivityPage from '../../components/ActivityPage';

const RDMWhatWouldYouDoActivity = () => {
  return (
    <ActivityPage
      title="What Would You Do?"
      chipCategory="responsibleDecisionMakingCategory chip"
      difficulty="Simple"
      time="5 min"
      overviewText={
        <div>
         Have your kid practice putting themselves in someone else's shoes. Take turns asking 
         your child and letting them ask you “what would you do” questions (example: what would 
         you do if someone stole your toy? What would you do if your friend was upset?”) Ask them 
         to explain their answers and correct them if their response wouldn’t be appropriate.  
        </div>
      }
      directionsText={
        <div>
          
        </div>
      }
      videoUrl="https://youtu.be/kFJnej_SAfk"
      buttonCategory="responsibleDecisionMakingCategory activityPageButton"
    />
  );
};

export default RDMWhatWouldYouDoActivity;
