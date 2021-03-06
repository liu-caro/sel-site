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
          how important consequences are and how they work.
        </div>
      }
      importanceText={
        <div>They will learn that
          sometimes it is better to plan ahead rather than act on impulses and sometimes
          they have to make their decisions based on others rather than themselves. For example,
          <i> I should not steal that girl's toys, even though I want it, because it would be wrong
            and it would make her sad. </i>
        </div>
      }
      keySkillsText={
        <div>
          The ability to make responsible decisions helps your child:
          <ul>
            <li>Follow rules and understand why they exist</li>
            <li>Think about the outcomes of their actions</li>
            <li>Explore different possible solutions to a problem</li>
          </ul>
        </div>
      }
      activities={rdmActivities}
    />
  );
};

export default ResponsibleDecisionMakingPage;
