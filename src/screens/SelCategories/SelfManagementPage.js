import CategoryPage from '../../components/CategoryPage';

const SelfManagementPage = () => {
  const smActivities = [
    ['Count Me Down', '/rs/count-me-down', 'relationshipSkillsCategory categoryPageButton'],
    ['Rose, Bud, Thorn', '/', 'relationshipSkillsCategory categoryPageButton'],
    ['Make New Friends Bingo', '/', 'relationshipSkillsCategory categoryPageButton'],
    ['Team Puzzle', '/', 'relationshipSkillsCategory categoryPageButton']
  ];
  
  return (
    <CategoryPage
      title="Self Management"
      overviewText={
        <div>
          Self Management the ability to manage our emotions, thoughts, and behaviors
          effectively in differnet situations to achieve goals.
        </div>
      }
      importanceText={
        <div>
          It is essential to:
          <ul>
            <li>Building effective stress management strategies</li>
            <li>Exhibiting self-discipline and self-motivation</li>
            <li>Setting personal goals and following a plan to accomplish them</li>
          </ul>
        </div>
      }
      keySkillsText={
        <div>
          It includes the capacities to:
          <ul>
            <li>Use positive skills to deal with challenging situations</li>
            <li>Adjust behaviors appropriate in different settings</li>
            <li>Make changes in our thinking or actions</li>
          </ul>
        </div>
      }
      activities = {smActivities}
    />
  );
};

export default SelfManagementPage;
