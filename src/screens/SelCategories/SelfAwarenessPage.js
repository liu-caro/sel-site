import CategoryPage from '../../components/CategoryPage';

const SelfAwarenessPage = () => {
  const sfaActivities = [
    ['Crack A Smile', '/sfa/crack-a-smile', 'selfAwarenessCategory categoryPageButton'],
    ['Journaling', '/sfa/journaling', 'selfAwarenessCategory categoryPageButton'],
    ['Make A Face', '/sfa/make-a-face', 'selfAwarenessCategory categoryPageButton'],
    ['Morning Sunshine', '/sfa/morning-sunshine', 'selfAwarenessCategory categoryPageButton'],
    ['Mountain, River, Valley', '/sfa/mountain-river-valley', 'selfAwarenessCategory categoryPageButton'],
    ['Stay Positive', '/sfa/stay-positive', 'selfAwarenessCategory categoryPageButton']
  ];
  
  return (
    <CategoryPage
      title="Self Awareness"
      overviewText={
        <div>
          Self Awareness is the ability to understand our own emotions, thoughts, and values 
          along with the ability to understand how they impact our behavior. 
        </div>
      }
      importanceText={
        <div>
          It is essential to:
          <ul>
            <li>Building our self confidence</li>
            <li>Recognizing, identifying and expressing our emotions</li>
            <li>Understanding our self-perception accurately</li>
          </ul>
        </div>
      }
      keySkillsText={
        <div>
          It includes the capacities to:
          <ul>
            <li>Express a range of emotions through gestures, language, or actions</li>
            <li>Begin to develop a rich vocabulary related to feelings</li>
            <li>Identify personal characteristics such as abilities, preferences, interests</li>
            <li>Recognize our self as a unique individual</li>
            <li>Feel confident in our ability to accomplish tasks</li>
            <li>Try new experiences such as new foods and activities</li>
          </ul>
        </div>
      }
      activities = {sfaActivities}
    />
  );
};

export default SelfAwarenessPage;
