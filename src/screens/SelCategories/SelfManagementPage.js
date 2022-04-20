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
          <p>Learning how to deal with our emotions in a good way is very important and will be helpful throughout a child's whole life.
            By practicing techniques that help calm their stress, children can focus on school, friends and family. Children who are good
            at self regulating are better at overcoming challenges in life.
          </p>
          <p>
            Self management also includes skills outside of regulation such as planning and organization. Practice with setting goals and
            sticking to them are important for kids to develop their own motivation and self discipline.
          </p>
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
      activities={smActivities}
    />
  );
};

export default SelfManagementPage;
