import { ThemeProvider } from '@mui/system';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import HomePage from './screens/HomePage';
import ActivitiesPage from './screens/ActivitiesPage';
import ProgressPage from './screens/ProgressPage';
import ResourcesPage from './screens/ResourcesPage';
import PrintablesPage from './screens/PrintablesPage';
import RelationshipSkillsPage from './screens/SelCategories/RelationshipSkillsPage';
import RSCountMeDownActivity from './screens/RelationshipSkillsActivities/RSCountMeDownActivity';
import ExamplePage from './screens/ExamplePage';
import LandingPage from './screens/LandingPage';
import CreateAccountPage from './screens/CreateAccountPage';
import { theme } from './utils/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MenuBar />
        <Routes>
          {/* home page */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />

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
          {/* activites: relationship skills */}
          <Route path="/rs/count-me-down" element={<RSCountMeDownActivity />} />

          <Route path="/example" element={<ExamplePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
