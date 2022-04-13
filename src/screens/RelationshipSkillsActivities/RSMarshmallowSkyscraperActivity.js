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
        Work together to build a tower with your kid out of spaghetti and marshmallows and see 
        how high you can make it. Alternatively, you could also use cards.
        </div>
      }
      directionsText={
        <div>
         
        </div>
      }
      videoUrl="https://youtu.be/PxrpL-Ei5N4"
      buttonCategory="relationshipSkillsCategory activityPageButton"
    />
  );
};

export default RSMarshmallowSkyscraperActivity;
