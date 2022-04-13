import ActivityPage from '../../components/ActivityPage';

const SMGetSMARTActivity = () => {
  return (
    <ActivityPage
      title="Get SMART"
      chipCategory="selfManagementCategory chip"
      difficulty="Simple"
      time="5 min"
      overviewText={
        <div>
         Set a SMART (Specific, Measurable, Agreed-Upon, Relevant, and Time-Bound) goal for the day, week, or month. 
         (Example: brushing your teeth without being asked every day for a week). Consider a small reward upon accomplishment 
         like a sweet treat or visit to the park.  
        </div>
      }
      directionsText={
        <div>
          
        </div>
      }
      videoUrl="https://youtu.be/Iyl_v-O_Cds"
      buttonCategory="selfManagementCategory activityPageButton"
    />
  );
};

export default SMGetSMARTActivity;
