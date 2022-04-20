import CategoryPage from '../../components/CategoryPage';

const SelfAwarenessPage = () => {
  const sfaActivities = [
    ['Crack A Smile', 'Moderate', '15 min', '/sfa/crack-a-smile', 'selfAwarenessCategory categoryPageButton'],
    ['Journaling', 'Simple', '15 min', '/sfa/journaling', 'selfAwarenessCategory categoryPageButton'],
    ['Make A Face', 'Simple', '10 min', '/sfa/make-a-face', 'selfAwarenessCategory categoryPageButton'],
    ['Morning Sunshine', 'Simple', '5 min', '/sfa/morning-sunshine', 'selfAwarenessCategory categoryPageButton'],
    ['Mountain, River, Valley', 'Simple', '10 min', '/sfa/mountain-river-valley', 'selfAwarenessCategory categoryPageButton'],
    ['Stay Positive', 'Simple', '15 min', '/sfa/stay-positive', 'selfAwarenessCategory categoryPageButton']
  ];

  return (
    <CategoryPage
      title="Self Awareness"
      overviewText={
        <div>
          This skill is about learning to understand oneself. By understanding their emotions, children are less overwhelmed
          when they do experience a strong emotion. Self-awareness also plays a role in self-expression. Children need to be
          aware of how to both show and say their feelings
          in a way that is helpful to those around them as a part of communication.
        </div>
      }
      importanceText={
        <div>
          In fact, research shows that simply labeling our emotions (also known as
          affect labeling) can reduce the psychological stress that may come with them. Understanding our emotions is also the
          first step we must take before moving on to ways of dealing with them. A child that is prepared for strong emotions will
          be much more accepting of help.</div>
      }
      keySkillsText={
        <div>
        </div>
      }
      activities={sfaActivities}
    />
  );
};

export default SelfAwarenessPage;
