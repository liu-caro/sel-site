import ActivityPage from '../../components/ActivityPage';

const SMSnackAttackActivity = () => {
  return (
    <ActivityPage
      title="Snack Attack"
      overviewText={
        <div>
         Delaying instant gratification for a future reward is something we all struggle with 
         even as adults but there is an easy way to introduce and practice this concept to your child. 
         Next time it’s snack or dessert time, ask your child if they would like to have...
        </div>
      }
      directionsText={
        <div>
          Next time it’s snack or dessert time, ask your child if they would like to have...
          <ul>
            <li>One cookie now or...</li>
            <li>Two cookies if they wait 20 minutes</li>
          </ul>
          You can also apply this to other rewards like toys (example: you can get a small toy now or a 
          bigger toy for your birthday) or time at playtime (example: we can play for 15 minutes now or an 
          hour after I finish my work).
        </div>
      }
      videoUrl="https://youtu.be/4S2yj4TB_I8"
      buttonCategory="selfManagementCategory activityPageButton"
    />
  );
};

export default SMSnackAttackActivity;
