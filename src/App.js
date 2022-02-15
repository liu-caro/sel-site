import { ThemeProvider } from "@mui/system";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Drawer from "./components/drawer/Drawer";
import HomePage from "./screens/HomePage";
import ActivitiesPage from "./screens/ActivitiesPage";
import ExamplePage from "./screens/ExamplePage";
import RelationshipSkillsPage from './screens/SelCategories/RelationshipSkillsPage'
import RSCountMeDownActivity from "./screens/RelationshipSkillsActivities/RSCountMeDownActivity";
import OnboardingWelcomePage from "./screens/OnboardingPages/OnboardingWelcomePage";
import OnboardingActivitiesPage from "./screens/OnboardingPages/OnboardingActivitiesPage";
import OnboardingPrintablesPage from "./screens/OnboardingPages/OnboardingPrintablesPage";
import LandingPage from "./screens/LandingPage";
import { theme } from "./utils/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Drawer />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/categories/relationship-skills" element={<RelationshipSkillsPage />} />
          <Route path="/example" element={<ExamplePage />} />
          <Route path="/rs/count-me-down" element={<RSCountMeDownActivity />} />
          <Route path="/onboarding-welcome" element={<OnboardingWelcomePage />} />
          <Route path="/onboarding-activities" element={<OnboardingActivitiesPage />} />
          <Route path="/onboarding-printables" element={<OnboardingPrintablesPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
