import ActivityPage from '../../components/ActivityPage';

const RDMNightTimeRoutineActivity = () => {
  return (
    <ActivityPage
      title="Night Time Routine"
      chipCategory="responsibleDecisionMakingCategory chip"
      difficulty="Moderate"
      time="20+ min"
      overviewText={
        <div>
         Work with your kid to create a nighttime routine that they are relatively motivated about. 
         This will strengthen responsible decision-making and encourage self-efficacy in their activities 
         of daily living. Categories could include: brushing teeth, bath time, getting dressed in pajamas, 
         etc. Make sure to note the benefits of these activities, not getting cavities or having extra energy 
         for the next day to play. If it helps, you could even write down and post the routine on the bathroom mirror.
        </div>
      }
      directionsText={
        <div>
       
        </div>
      }
      videoUrl="https://youtu.be/4S2yj4TB_I8"
      buttonCategory="responsibleDecisionMakingCategory activityPageButton"
    />
  );
};

export default RDMNightTimeRoutineActivity;
