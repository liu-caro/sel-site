import CategoryPage from '../../components/CategoryPage';

const ResponsibleDecisionMakingPage = () => {
  const rdmActivities = [
    ['Count Me Down', '/rs/count-me-down', 'relationshipSkillsCategory categoryPageButton'],
    ['Rose, Bud, Thorn', '/', 'relationshipSkillsCategory categoryPageButton'],
    ['Make New Friends Bingo', '/', 'relationshipSkillsCategory categoryPageButton'],
    ['Team Puzzle', '/', 'relationshipSkillsCategory categoryPageButton']
  ];
  
  return (
    <CategoryPage
      title="Responsible Decision Making"
      overviewText={
        <div>
          Responsible Decision Making consists of the abilities to make caring and
          constructive choices about our behavior and social interactions across 
          different situations.
        </div>
      }
      importanceText={
        <div>
          It is essential to:
          <ul>
            <li>Helping us understand our personal, social, and ethical responsibilities</li>
            <li>Reflecting on the results of our actions and choices</li>
          </ul>
        </div>
      }
      keySkillsText={
        <div>
          It includes the capacities to:
          <ul>
            <li>Demonstrate open-mindedness</li>
            <li>Make reasonable judgment after looking at faccts</li>
            <li>Anticipate consequences of our actions</li>
            <li>Follow rules and understand the reasoning for them</li>
            <li>Identify problems and potential solutions</li>
          </ul>
        </div>
      }
      activities = {rdmActivities}
    />
  );
};

export default ResponsibleDecisionMakingPage;