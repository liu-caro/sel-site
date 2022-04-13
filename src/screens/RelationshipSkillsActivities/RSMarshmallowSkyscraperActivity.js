import ActivityPage from '../../components/ActivityPage';

const RSMarshmallowSkyscraperActivity = () => {
  return (
    <ActivityPage
      title="Marshmallow Skyscraper"
      chipCategory="relationshipSkillsCategory chip"
      difficulty="Challenging"
      time="20+ min"
      overviewText={
        <div>
          This activity aims to promote teamwork and cooperation as you and your child
          challenge yourselves to balance different materials while communicating.
        </div>
      }
      directionsText={
        <div>
          Work together to build a tower with your kid out of spaghetti and marshmallows and see
          how high you can make it. Alternatively, you could also use cards.
        </div>
      }
      videoUrl="https://youtu.be/4S2yj4TB_I8"
      buttonCategory="relationshipSkillsCategory activityPageButton"
    />
  );
};

export default RSMarshmallowSkyscraperActivity;
