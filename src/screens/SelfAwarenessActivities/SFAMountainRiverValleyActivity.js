import ActivityPage from '../../components/ActivityPage';

const SFAMountainRiverValleyActivity = () => {
  return (
    <ActivityPage
      title="Mountain, River, Valley"
      chipCategory="selfAwarenessCategory chip"
      difficulty="Simple"
      time="10 min"
      overviewText={
        <div>
           This activity aims to end you and your child's day with self-reflection and something to look forward to in the future.
        </div>
      }
      directionsText={
        <div>
          At the end of the day, ask your kid what the best part of their day was (the mountain),
          their least favorite (the valley), and something they would like to work on for the future (the river).
          This activity will promote a deeper reflection on the day's events. If time allows, sit down and have
          them draw out the mountain, river, and valley while they talk about their day and encourage them to add
          components from their day into their illustration.
        </div>
      }
      videoUrl="https://youtu.be/olG38Csuo78"
      buttonCategory="selfAwarenessCategory activityPageButton"
    />
  );
};

export default SFAMountainRiverValleyActivity;
