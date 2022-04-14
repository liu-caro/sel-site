import ActivityPage from '../../components/ActivityPage';

const SLATakeYourTurnActivity = () => {
  return (
    <ActivityPage
      title="Take Your Turn"
      chipCategory="socialAwarenessCategory chip"
      difficulty="Simple"
      time="10 min"
      overviewText={
        <div>
          Learning to share is an important, yet occasionally difficult skill for preschoolers.
          This can be practiced with all activities that require turn-taking from baking cookies
          and taking turns stirring to drawing and taking turns using colored pencils.
        </div>
      }
      directionsText={
        <div>
          A particular activity known to build this skill involves taking turns making an animal sound. 
          The listener has to repeat the sound and guess the animal, then it’s their turn to make a sound.
        </div>
      }
      videoUrl="https://youtu.be/jDS9PsS86C8"
      buttonCategory="socialAwarenessCategory activityPageButton"
    />
  );
};

export default SLATakeYourTurnActivity;
