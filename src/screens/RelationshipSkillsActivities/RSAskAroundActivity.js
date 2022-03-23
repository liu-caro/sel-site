import ActivityPage from '../../components/ActivityPage';

const RSAskAroundActivity = () => {
  return (
    <ActivityPage
      title="Ask Around"
      overviewText={
        <div>
          Send your child to preschool with different questions to ask their peers. 
          For example: “What are your friends' favorite colors? You should try asking them today”. 
          This will help take interest in other students and engage with them in a way that will 
          lead to conversations and potential friendships.
        </div>
      }
      directionsText={
        <div>
                   
        </div>
      }
      videoUrl="https://youtu.be/4S2yj4TB_I8"
      buttonCategory="relationshipSkillsCategory activityPageButton"
    />
  );
};

export default RSAskAroundActivity;
