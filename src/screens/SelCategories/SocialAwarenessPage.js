import CategoryPage from '../../components/CategoryPage';

const SocialAwarenessPage = () => {
  const slaActivities = [
    ['Add It On', 'Challenging', '10 min', '/sla/add-it-on', 'socialAwarenessCategory categoryPageButton'],
    ['Storytime', 'Challenging', '20+ min', '/sla/storytime', 'socialAwarenessCategory categoryPageButton'],
    ['Take Your Turn', 'Simple', '10 min', '/sla/take-your-turn', 'socialAwarenessCategory categoryPageButton']
  ];

  return (
    <CategoryPage
      title="Social Awareness"
      overviewText={
        <div>
          This skill is all about empathy, especially for people that may not be from one's own background.
          By taking the time to be curious of their classmates' perspectives and really care about others,
          children will not only develop a more well-rounded world view, but they will also be more successful
          in building strong relationships.
        </div>
      }
      importanceText={
        <div>It may be a couple of years or more before your child shows interest
          in other children, but helping develop this skill early on will allow
          them to understand that we don’t just learn from teachers and books, but
          from friends too!</div>
      }
      keySkillsText={
        <div>Social Awareness allows us to:
          <ul>
            <li>Say "please" and "thank you"</li>
            <li>Understand what makes each person unique</li>
            <li>Learn from others</li>
          </ul>
        </div>
      }
      activities={slaActivities}
    />
  );
};

export default SocialAwarenessPage;
