import { ThemeProvider } from '@mui/system';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import HomePage from './screens/HomePage';
import ActivitiesPage from './screens/ActivitiesPage';
import ProgressPage from './screens/ProgressPage';
import ResourcesPage from './screens/ResourcesPage';
import PrintablesPage from './screens/PrintablesPage';
import RelationshipSkillsPage from './screens/SelCategories/RelationshipSkillsPage';

import RSAskAroundActivity from './screens/RelationshipSkillsActivities/RSAskAroundActivity';
import RSMarshmallowSkyscraperActivity from './screens/RelationshipSkillsActivities/RSMarshmallowSkyscraperActivity';
import RSPeekABookActivity from './screens/RelationshipSkillsActivities/RSPeekABookActivity';
import RSPuppetsActivity from './screens/RelationshipSkillsActivities/RSPuppetsActivity';
import RSPuzzlerActivity from './screens/RelationshipSkillsActivities/RSPuzzlerActivity';

import SFACrackASmileActivity from './screens/SelfAwarenessActivities/SFACrackASmileActivity';
import SFAJournalingActivity from './screens/SelfAwarenessActivities/SFAJournalingActivity';
import SFAMakeAFaceActivity from './screens/SelfAwarenessActivities/SFAMakeAFaceActivity';
import SFAMorningSunshineActivity from './screens/SelfAwarenessActivities/SFAMorningSunshineActivity';
import SFAMountainRiverValleyActivity from './screens/SelfAwarenessActivities/SFAMountainRiverValleyActivity';
import SFAStayPositiveActivity from './screens/SelfAwarenessActivities/SFAStayPositiveActivity';

import SMFreezeDanceActivity from './screens/SelfManagementActivities/SMFreezeDanceActivity';
import SMGetSMARTActivity from './screens/SelfManagementActivities/SMGetSMARTActivity';
import SMGroundedInAGoodWayActivity from './screens/SelfManagementActivities/SMGroundedInAGoodWayActivity';
import SMRedLightGreenLightActivity from './screens/SelfManagementActivities/SMRedLightGreenLightActivity';
import SMSimonSaysActivity from './screens/SelfManagementActivities/SMSimonSaysActivity';
import SMSnackAttackActivity from './screens/SelfManagementActivities/SMSnackAttackActivity';
import SMTakeABreatherActivity from './screens/SelfManagementActivities/SMTakeABreatherActivity';
import SMWalkSillyActivity from './screens/SelfManagementActivities/SMWalkSillyActivity';

import SLAAdditOnActivity from './screens/SocialAwarenessActivities/SLAAdditOnActivity';
import SLAStorytimeActivity from './screens/SocialAwarenessActivities/SLAAdditOnActivity';
import SLATakeYourTurnActivity from './screens/SocialAwarenessActivities/SLATakeYourTurnActivity';

import RDMNightTimeRoutineActivity from './screens/ResponsibleDecisionMakingActivities/RDMNightTimeRoutineActivity';
import RDMRewardsActivity from './screens/ResponsibleDecisionMakingActivities/SMTakeABreatherActivity';
import RDMWhatWouldYouDoActivity from './screens/ResponsibleDecisionMakingActivities/SMWalkSillyActivity';

import OnboardingWelcomePage from "./screens/OnboardingPages/OnboardingWelcomePage";
import OnboardingActivitiesPage from "./screens/OnboardingPages/OnboardingActivitiesPage";
import OnboardingPrintablesPage from "./screens/OnboardingPages/OnboardingPrintablesPage";
import ExamplePage from './screens/ExamplePage';
import LandingPage from './screens/LandingPage';
import SignupPage from './screens/SignupPage';
import { theme } from './utils/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MenuBar />
        <Routes>
          {/* home page */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* main pages */}
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/printables" element={<PrintablesPage />} />

          {/* SEL category pages */}
          <Route
            path="/categories/relationship-skills"
            element={<RelationshipSkillsPage />}
          />

          {/* SEL activities pages */}
          {/* activities: relationship skills */}
          <Route path="/rs/marshmallow-skyscraper" element={<RSMarshmallowSkyscraperActivity />} />
          <Route path="/rs/ask-around" element={<RSAskAroundActivity />} />
          <Route path="/rs/peek-a-boo" element={<RSPeekABookActivity />} />
          <Route path="/rs/puppets" element={<RSPuppetsActivity />} />
          <Route path="/rs/puzzler" element={<RSPuzzlerActivity />} />

          {/* activities: self awareness */}
          <Route path="/sfa/crack-a-smile" element={<SFACrackASmileActivity />} />
          <Route path="/sfa/journaling" element={<SFAJournalingActivity />} />
          <Route path="/sfa/make-a-face" element={<SFAMakeAFaceActivity />} />
          <Route path="/sfa/morning-sunshine" element={<SFAMorningSunshineActivity />} />
          <Route path="/sfa/mountain-river-valley" element={<SFAMountainRiverValleyActivity />} />
          <Route path="/sfa/stay-positive" element={<SFAStayPositiveActivity />} />

          {/* activities: self management */}
          <Route path="/sm/freeze-dance" element={<SMFreezeDanceActivity />} />
          <Route path="/sm/get-smart" element={<SMGetSMARTActivity />} />
          <Route path="/sm/grounded-in-a-good-way" element={<SMGroundedInAGoodWayActivity />} />
          <Route path="/sm/red-light-green-light" element={<SMRedLightGreenLightActivity />} />
          <Route path="/sm/simon-says" element={<SMSimonSaysActivity />} />
          <Route path="/sm/snack-sttack" element={<SMSnackAttackActivity />} />
          <Route path="/sm/take-a-breather" element={<SMTakeABreatherActivity />} />
          <Route path="/sm/walk-silly" element={<SMWalkSillyActivity />} />

           {/* activities: social awareness */}
           <Route path="/sla/add-it-on" element={<SLAAdditOnActivity />} />
          <Route path="/sla/storytime" element={<SLAStorytimeActivity />} />
          <Route path="/sla/take-your-turn" element={<SLATakeYourTurnActivity />} />

           {/* activities: responsible decision making */}
           <Route path="/rdm/night-time-routine" element={<RDMNightTimeRoutineActivity />} />
          <Route path="/rdm/rewards" element={<RDMRewardsActivity />} />
          <Route path="/rdm/what-would-you-do" element={<RDMWhatWouldYouDoActivity />} />

          <Route path="/example" element={<ExamplePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<LandingPage />} />

          {/* Onboarding pages */}
          <Route path="/onboarding-welcome" element={<OnboardingWelcomePage />} />
          <Route path="/onboarding-activities" element={<OnboardingActivitiesPage />} />
          <Route path="/onboarding-printables" element={<OnboardingPrintablesPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;