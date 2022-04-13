import ActivityPage from '../../components/ActivityPage';

const RDMRewardsActivity = () => {
  return (
    <ActivityPage
      title="Rewards"
      chipCategory="responsibleDecisionMakingCategory chip"
      difficulty="Moderate"
      time="20+ min"
      overviewText={
        <div>
         Create a Rewards chart. This can simply be a piece of construction paper with a title
          of your choosing hung up somewhere in the house. Every time your child completes a 
          difficult task or chore, particularly one they typically put up a fight against (for 
          example, getting ready for bed or eating their vegetables) let them put a sticker up 
          on the chart to mark their success. 

        </div>
      }
      directionsText={
        <div>
         
        </div>
      }
      videoUrl="https://youtu.be/P9xMx8xFI5s"
      buttonCategory="responsibleDecisionMakingActivity activityPageButton"
    />
  );
};

export default RDMRewardsActivity;
