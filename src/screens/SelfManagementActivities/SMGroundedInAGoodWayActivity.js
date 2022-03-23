import ActivityPage from '../../components/ActivityPage';

const SMGroundedInAGoodWayActivity = () => {
  return (
    <ActivityPage
      title="Grounded in a Good Way"
      overviewText={
        <div>
         Teach your child basic grounding skills (often used in mindfulness meditation). 
         Ask them to name 4 things they can see, 3 things they can hear, 2 things they can feel, 
         and 1 thing they can taste. Explain to them that this can be a good way to calm themselves 
         when they are feeling strong emotions.  
        </div>
      }
      directionsText={
        <div>
          
        </div>
      }
      videoUrl="https://youtu.be/4S2yj4TB_I8"
      buttonCategory="selfManagementActivity activityPageButton"
    />
  );
};

export default SMGroundedInAGoodWayActivity;
