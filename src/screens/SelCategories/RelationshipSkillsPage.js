import CategoryPage from '../../components/CategoryPage';

const RelationshipSkillsPage = () => {
  const rsActivities = [
    ['Ask Around', 'Simple', '5 min', '/rs/ask-around', 'relationshipSkillsCategory categoryPageButton'],
    ['Marshmallow Skyscraper', 'Challenging', '20+ min', '/rs/marshmallow-skyscraper', 'relationshipSkillsCategory categoryPageButton'],
    ['Peek A Boo', 'Simple', '5 min', '/rs/peek-a-boo', 'relationshipSkillsCategory categoryPageButton'],
    ['Puppets', 'Challenging', '20+ min', '/rs/puppets', 'relationshipSkillsCategory categoryPageButton'],
    ['Puzzler', 'Simple', '20+ min', '/rs/puzzler', 'relationshipSkillsCategory categoryPageButton']
  ];

  return (
    <CategoryPage
      title="Relationship Skills"
      overviewText={
        <div>
          Developing positive, healthy relationships are very helpful for children. 
          They can be a source of support and positivity in your child's life that 
          will improve their well being. 
        </div>
      }
      importanceText={
        <div>
          Practicing these skills will help your child build strong relationships 
          that will continue to benefit them throughout their life.
        </div>
      }
      keySkillsText={
        <div>
          There are many skills that go into making 
          a successful relationship, such as:
          <ul>
            <li>Communication</li>
            <li>Problem Resolution</li>
            <li>Active Listening</li>
          </ul>
        </div>
      }
      activities={rsActivities}
    />
  );
};

export default RelationshipSkillsPage;
