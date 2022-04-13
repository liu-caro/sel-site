import ActivityPage from '../../components/ActivityPage';

const SFAMakeAFaceActivity = () => {
  return (
    <ActivityPage
      title="Make-A-Face"
      chipCategory="selfAwarenessCategory chip"
      difficulty="Simple"
      time="10 min"
      overviewText={
        <div>
         Take turns making facial expressions with your child and guessing the emotion the 
         person is displaying. Alternatively, for younger children or for anyone struggling, 
         have them simply try to mimic the facial expression you are making. A great time to 
         do this is during teeth brushing when you can both stand in front of a mirror together 
         and your child can easily see and reflect on the faces they are making.
        </div>
      }
      directionsText={
        <div>
       
        </div>
      }
      videoUrl="https://youtu.be/C0YgDXnWNYY"
      buttonCategory="selfAwarenessCategory activityPageButton"
    />
  );
};

export default SFAMakeAFaceActivity;
