import ActivityPage from '../../components/ActivityPage';

const RSCountMeDownActivity = () => {
  return (
    <ActivityPage
      title="Count Me Down"
      overviewText={
        <div>
          Count Me Down is a strategy from Move This World that helps students
          identify ways they are similar and different from others. The goals
          are to develop a stronger understanding of peers and to demonstrate
          respect for differences and exhibit empathy. An example prompt for
          Count Me Down is as follows:
          <ul>
            <li>3 unique things about your family</li>
            <li>2 challenges you're currently facing</li>
            <li>1 goal or dream you have</li>
          </ul>
        </div>
      }
      directionsText={
        <div>
          Ask your child the following questions, one by one:
          <ul>
            <li>3 unique things about your family</li>
            <li>2 challenges you're currently facing</li>
            <li>1 goal or dream you have</li>
          </ul>
          Listen to their answers and discuss with them their thoughts. Ask them
          to explain their thought process and why they chose their answer(s).
          Be sure to share your own answers to each of the questions as well.
        </div>
      }
      videoUrl="https://youtu.be/4S2yj4TB_I8"
    />
  );
};

export default RSCountMeDownActivity;
