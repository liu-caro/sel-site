import ActivityPage from '../../components/ActivityPage';

const SFACrackASmileActivity = () => {
  return (
    <ActivityPage
      title="Crack A Smile"
      chipCategory="selfAwarenessCategory chip"
      difficulty="Moderate"
      time="15 min"
      overviewText={
        <div>
          Much of communication is non-verbal and recognizing facial expressions is the first step
          in understanding how to show our own emotions and notice how those are feeling around us.
        </div>
      }
      directionsText={
        <div>
          To practice this, ask your child to draw someone who is happy, sad, angry, confused, and/or
          worried and draw your own versions with them.
          <ul>
            <li> Compare drawings and ask them why they made the decisions they did </li>
            <li> If they miss a key detail, for example, the frown on the sad face or
              turned eyebrows on the angry face, explain to them why you included it </li>
            <li>Label each drawing and keep them on the fridge for later. </li>
          </ul>
          The next time your kid tells you a story, ask them to point out which drawing made them feel.
        </div>
      }
      videoUrl="https://youtu.be/KeKEDqz7dSQ"
      buttonCategory="selfAwarenessCategory activityPageButton"
    />
  );
};

export default SFACrackASmileActivity;
