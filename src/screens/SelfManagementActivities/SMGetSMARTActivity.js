import ActivityPage from '../../components/ActivityPage';

const SMGetSMARTActivity = () => {
  return (
    <ActivityPage
      title="Get SMART"
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
      videoUrl="https://youtu.be/4S2yj4TB_I8"
      buttonCategory="selfManagementActivity activityPageButton"
    />
  );
};

export default SMGetSMARTActivity;