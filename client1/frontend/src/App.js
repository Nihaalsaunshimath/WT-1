// App.js (React Front-end)
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SubmitReport from './pages/SubmitReport';
import Success from './pages/Success';
import Register from "./pages/Admin/Register";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ChangesWeHaveBrought from "./pages/ChangesWeHaveBrought";
import Login from './pages/Admin/Login';
import WasteManagement from './pages/WasteManagement';
import StrayAnimalReport from './pages/StrayAnimalReport';
import PotholeReport from './pages/PotholeReport';
import TrafficViolation from './pages/TrafficViolation';
import WasteManagementSuccess from './components/WasteManagementSuccess';
import TrafficViolationSucess from './components/TrafficViolationSucess';
import PotholeReportSuccess from './components/PotholeReportSuccess';
import StrayAnimalSuccess from './components/StrayAnimalSuccess';
import API from './services/api'
function App() {
  return (
    <Router>
      <Routes>
        {/* Define unique routes */}
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/submit/:reportType" element={<SubmitReport />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/changes" element={<ChangesWeHaveBrought />} />
        <Route path="/success" element={<Success />} />
        <Route path="/submit/waste" element={<WasteManagement />} />
        <Route path="/submit/stray-animal" element={<StrayAnimalReport />} />
        <Route path="/submit/pothole" element={<PotholeReport />} />
        <Route path="/submit/traffic" element={<TrafficViolation />} />
        <Route path="/waste-management" element={<WasteManagementSuccess />} />
        <Route path="/traffic-violation" element={<TrafficViolationSucess />} />
        <Route path="/pothole-report" element={<PotholeReportSuccess />} />
        <Route path="/stray-animal" element={<StrayAnimalSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
