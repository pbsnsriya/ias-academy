import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Projects from './pages/Projects';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';
import CourseDetails from './pages/CourseDetails';
import Director from './pages/Director';
import OptionalListing from './pages/OptionalListing';
import OptionalDetails from './pages/OptionalDetails';
import MentorshipListing from './pages/MentorshipListing';
import MentorshipDetails from './pages/MentorshipDetails';
import EssayListing from './pages/EssayListing';
import EssayDetails from './pages/EssayDetails';



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/courses/optionals" element={<OptionalListing />} />
                <Route path="/courses/optionals/:id" element={<OptionalDetails />} />
                <Route path="/courses/mentorship" element={<MentorshipListing />} />
                <Route path="/courses/mentorship/:id" element={<MentorshipDetails />} />
                <Route path="/courses/essay" element={<EssayListing />} />
                <Route path="/courses/essay/:id" element={<EssayDetails />} />
                <Route path="/courses/:id" element={<CourseDetails />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/director" element={<Director />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
