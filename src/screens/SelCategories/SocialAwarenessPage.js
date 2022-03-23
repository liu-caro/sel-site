import CategoryPage from '../../components/CategoryPage';

const SocialAwarenessPage = () => {
  const slaActivities = [
    ['Count Me Down', '/rs/count-me-down', 'relationshipSkillsCategory categoryPageButton'],
    ['Rose, Bud, Thorn', '/', 'relationshipSkillsCategory categoryPageButton'],
    ['Make New Friends Bingo', '/', 'relationshipSkillsCategory categoryPageButton'],
    ['Team Puzzle', '/', 'relationshipSkillsCategory categoryPageButton']
  ];
  
  return (
    <CategoryPage
      title="Social Awareness"
      overviewText={
        <div>
          Social Awareness is the ability to empathize with others and understand
          perspectives of people with different backgrounds from us. 
        </div>
      }
      importanceText={
        <div>
          It is essential to:
          <ul>
            <li>Feeling compassion for others</li>
            <li>Respecting the diversity of the communities around us</li>
            <li>Recognizing that people may have different emotional reactions to a situation</li>
          </ul>
        </div>
      }
      keySkillsText={
        <div>
          It includes the capacities to:
          <ul>
            <li>Respond to another person's emotional needs</li>
            <li>Show kindness for others</li>
            <li>Be aware of similarities and differences among people</li>
            <li>Say 'please' and 'thank you'</li>
          </ul>
        </div>
      }
      activities = {slaActivities}
    />
  );
};

export default SocialAwarenessPage;
