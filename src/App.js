import { ThemeProvider } from '@mui/system';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Drawer from './components/drawer/Drawer';
import HomePage from './screens/HomePage';
import ActivitiesPage from './screens/ActivitiesPage';
import RelationshipSkillsPage from './screens/SelCategories/RelationshipSkillsPage'
import ExamplePage from './screens/ExamplePage';
import LandingPage from './screens/LandingPage';
import { theme } from './utils/theme';

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
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
