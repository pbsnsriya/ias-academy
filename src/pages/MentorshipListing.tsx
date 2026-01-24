import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { mentorshipCourses } from '../data/mentorshipCourses';
import './OptionalListing.css'; // Reusing styles

const MentorshipListing = () => {
    return (
        <Layout>
            <div className="optional-page">
                <section className="optional-hero">
                    <div className="container">
                        <h1 className="section-title-large">Mentorship & Test Series</h1>
                        <p className="section-subtitle-center">Comprehensive guidance programs for Anthropology and Sociology options.</p>

                        <div className="optional-grid">
                            {mentorshipCourses.map((course) => (
                                <div key={course.id} className="optional-card-large">
                                    <div className="optional-img-wrap">
                                        <img src={course.image} alt={course.title} />
                                        <div className="optional-overlay">
                                            <span className="optional-subtitle">{course.subtitle}</span>
                                        </div>
                                    </div>
                                    <div className="optional-content">
                                        <h3>{course.title}</h3>
                                        <ul className="optional-usps">
                                            <li>• {course.faculty}</li>
                                            <li>• {course.duration || course.tests}</li>
                                            <li>• {course.date}</li>
                                        </ul>
                                        <div className="optional-footer">
                                            <span className="optional-fee">{course.fee}</span>
                                            <Link to={`/courses/mentorship/${course.id}`} className="btn-explore">
                                                Explore More <ArrowRight size={16} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default MentorshipListing;
