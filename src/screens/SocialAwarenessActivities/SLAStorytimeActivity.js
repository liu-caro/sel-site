import ActivityPage from '../../components/ActivityPage';

const SLAStorytimeActivity = () => {
  return (
    <ActivityPage
      title="Storytime"
      chipCategory="socialAwarenessCategory chip"
      difficulty="Challenging"
      time="20+ min"
      overviewText={
        <div>
         Understanding their peer’s perspectives will strengthen your child’s capacity for empathy 
         and aid in making strong, lasting friendships. Read a storybook of your choice with your kid. 
         Throughout key points of the story, pause and ask your child to reflect on what each character 
         is feeling and why.
        </div>
      }
      directionsText={
        <div>
          Some questions could include:
          <ul>
            <li>How do you think [event] made [character's name] feel?</li>
            <li>Why do they feel like this?</li>
            <li>What would you do if this happened to you?</li>
          </ul>
        </div>
      }
      videoUrl="https://youtu.be/KKMFZ87W9DI"
      buttonCategory="socialAwarenessCategory activityPageButton"
    />
  );
};

export default SLAStorytimeActivity;
