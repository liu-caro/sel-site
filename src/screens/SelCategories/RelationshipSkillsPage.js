import CategoryPage from '../../components/CategoryPage';

const RelationshipSkillsPage = () => {
  const rsActivities = [
    ['Count Me Down', '/rs/count-me-down',],
    ['Rose, Bud, Thorn', '/'],
    ['Make New Friends Bingo', '/'],
    ['Team Puzzle', '/']
  ];
  
  return (
    <CategoryPage
      title="Relationship Skills"
      overviewText={
        <div>
          Relationship Skills is the ability to understand the
          perspectives of others and empathize (including those from a differing
          backgrounds to one’s own).
        </div>
      }
      importanceText={
        <div>
          It is essential to:
          <ul>
            <li>Helping us build and maintain meaningful
              connections across race, culture, age, and distance</li>
            <li>Supporting one another during collective grief and struggle</li>
            <li>Collaboratively finding solutions to new obstacles</li>
          </ul>
        </div>
      }
      keySkillsText={
        <div>
          It includes the capacties to:
          <ul>
            <li>Communicate clearly</li>
            <li>Listen actively</li>
            <li>Cooperate</li>
            <li>Work collaboratively to problem solve and negotiate conflict constructively</li>
            <li>Navigate settings with differing social and cultural demands and opportunities</li>
            <li>Provide leadership</li>
            <li>Seek or offer help when needed</li>
          </ul>
        </div>
      }
      activities = {rsActivities}
    />
  );
};

export default RelationshipSkillsPage;
