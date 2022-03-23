import ActivityPage from '../../components/ActivityPage';

const RSPuzzlerActivity = () => {
  return (
    <ActivityPage
      title="Puzzler"
      overviewText={
        <div>
          Complete a puzzle together to strengthen collaboration skills and problem-solving. 
          Use this time to ask your kids about their friends.
        </div>
      }
      directionsText={
        <div>
          Questions
          <ul>
            <li>How is your friend _______ doing?</li>
            <li>Did you learn anything interesting about your friends today?</li>
            <li>What questions did you ask them, what did they ask you?</li>
            <li>Are you nice to your friends? Are they nice to you?</li>
            <li>Are your friends important to you?</li>
          </ul>
        </div>
      }
      videoUrl="https://youtu.be/4S2yj4TB_I8"
      buttonCategory="relationshipSkillsActivity activityPageButton"
    />
  );
};

export default RSPuzzlerActivity;
