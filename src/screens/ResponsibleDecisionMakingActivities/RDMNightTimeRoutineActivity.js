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
          of daily living.
        </div>
      }
      directionsText={
        <div>
          <ul>
            <li>Think of categories that can be included in a nighttime routine (brushing teeth,
              bath time, getting dressed in pajamas...
            </li>
            <li>Highlight the benefits of each activities (not getting cavities, having extra eneregy for tomorrow to play)</li>
            <li>If it helps, you could even write down and post the routine on the bathroom mirror</li>
          </ul>
        </div>
      }
      videoUrl="https://youtu.be/eDMH1OolPXA"
      buttonCategory="responsibleDecisionMakingCategory activityPageButton"
    />
  );
};

export default RDMNightTimeRoutineActivity;
