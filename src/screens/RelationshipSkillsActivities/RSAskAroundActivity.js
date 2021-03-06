import ActivityPage from '../../components/ActivityPage';

const RSAskAroundActivity = () => {
  return (
    <ActivityPage
      title="Ask Around"
      chipCategory="relationshipSkillsCategory chip"
      difficulty="Simple"
      time="5 min"
      overviewText={
        <div>
          This activity will help your child take interest in other students and engage with 
          them in a way that will lead to conversations and potential friendships.
        </div>
      }
      directionsText={
        <div>
          Send your child to preschool with different questions to ask their peers.
          For example: “What are your friends' favorite colors? You should try asking them today”.
        </div>
      }
      videoUrl="https://youtu.be/uCAR6TKijdo"
      buttonCategory="relationshipSkillsCategory activityPageButton"
    />
  );
};

export default RSAskAroundActivity;
