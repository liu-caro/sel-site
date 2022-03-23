import ActivityPage from '../../components/ActivityPage';

const SLAAddItOnActivity = () => {
  return (
    <ActivityPage
      title="Add It On"
      overviewText={
        <div>
         This activity utilizes both turn-taking and active listening skills. 
         Have your kid start off a story (example: Once upon a time there was a mermaid…), 
         next you repeat your kid's beginning and add on (Once upon a time there was a mermaid and 
         she was training for a mermaid race…). After that, your kid repeats the story so far and continues 
          add another part. This goes back and forth until someone forgets a part.
        </div>
      }
      directionsText={
        <div>
         
        </div>
      }
      videoUrl="https://youtu.be/4S2yj4TB_I8"
      buttonCategory="socialAwarenessActivity activityPageButton"
    />
  );
};

export default SLAAddItOnActivity;