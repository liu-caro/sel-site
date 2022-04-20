import CategoryPage from '../../components/CategoryPage';

const ResponsibleDecisionMakingPage = () => {
  const rdmActivities = [
    ['Night Time Routine', 'Moderate', '20+ min', '/rdm/night-time-routine', 'responsibleDecisionMakingCategory categoryPageButton'],
    ['Rewards', 'Moderate', '20+ min', '/rdm/rewards', 'responsibleDecisionMakingCategory categoryPageButton'],
    ['What Would You Do?', 'Simple', '5 min', '/rdm/what-would-you-do', 'responsibleDecisionMakingCategory categoryPageButton'],
  ];
  
  return (
    <CategoryPage
      title="Responsible Decision Making"
      overviewText={
        <div>
          Learning how to make responsible decisions is a very important skill. 
          By reflecting on situations after they happen, your child will understand 
          how important consequences are and how they work. They will learn that 
          sometimes it is better to plan ahead rather than act on impulses and sometimes 
          they have to make their decisions based on others rather than themselves (Example: 
          I should not steal that girl's toys, even though I want it, because it would be wrong 
          and it would make her sad). 
        </div>
      }
      importanceText={
        <div>
        </div>
      }
      keySkillsText={
        <div>
        </div>
      }
      activities = {rdmActivities}
    />
  );
};

export default ResponsibleDecisionMakingPage;
