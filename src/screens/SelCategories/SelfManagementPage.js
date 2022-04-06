import CategoryPage from '../../components/CategoryPage';

const SelfManagementPage = () => {
  const smActivities = [
    ['Freeze Dance', 'Moderate', '20+ min', '/sm/freeze-dance', 'selfManagementCategory categoryPageButton'],
    ['Get SMART', 'Simple', '5 min', '/sm/get-smart', 'selfManagementCategory categoryPageButton'],
    ['Grounded In A Good Way', 'Simple', '5 min', '/sm/grounded-in-a-good-way', 'selfManagementCategory categoryPageButton'],
    ['Red Light, Green Light', 'Moderate', '20+ min', '/sm/red-light-green-light', 'selfManagementCategory categoryPageButton'],
    ['Simon Says', 'Moderate', '15 min', '/sm/simon-says', 'selfManagementCategory categoryPageButton'],
    ['Snack Attack', 'Challenging', '20+ min', '/sm/snack-attack', 'selfManagementCategory categoryPageButton'],
    ['Take A Breather', 'Simple', '5 min', '/sm/take-a-breather', 'selfManagementCategory categoryPageButton'],
    ['Walk Silly', 'Simple', '10 min', '/sm/walk-silly', 'selfManagementCategory categoryPageButton']
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
