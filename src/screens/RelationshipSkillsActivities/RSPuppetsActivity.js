import ActivityPage from '../../components/ActivityPage';

const RSPuppetsActivity = () => {
  return (
    <ActivityPage
      title="Puppets"
      chipCategory="relationshipSkillsCategory chip"
      difficulty="Challenging"
      time="20+ min"
      overviewText={
        <div>
         Make some sock puppets with your kid or find some stuffed animals and use them to reenact 
         imaginary situations that will allow them to not only practice collaborative play but also 
         provide them opportunities to consider how they would act in imaginary situations. 
        </div>
      }
      directionsText={
        <div>
          Scenarios to consider
          <ul>
            <li>Preparing a four-course meal for their favorite celebrity</li>
            <li>Detectives solving a crime</li>
            <li>Training for the Olympics</li>
          </ul>
          Or let your kid take the lead and let their creativity flow
        </div>
      }
      videoUrl="https://youtu.be/4S2yj4TB_I8"
      buttonCategory="relationshipSkillsCategory activityPageButton"
    />
  );
};

export default RSPuppetsActivity;
