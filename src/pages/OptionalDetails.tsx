import Layout from '../components/Layout';
import { useParams, Navigate } from 'react-router-dom';
import { optionalCourses } from '../data/optionalCourses';
import { Check, Clock, Calendar, User, CreditCard, Tag } from 'lucide-react';
import './OptionalDetails.css';

const OptionalDetails = () => {
    const { id } = useParams<{ id: string }>();
    const course = optionalCourses.find((c) => c.id === id);

    if (!course) {
        return <Navigate to="/courses/optionals" replace />;
    }

    return (
        <Layout>
            <div className="optional-details-page">
                <section className="details-hero">
                    <div className="container">
                        <div className="details-hero-content">
                            <h1>{course.title}</h1>
                            <p className="details-subtitle">{course.subtitle}</p>
                            <div className="details-badges">
                                <span className="badge"><User size={16} /> {course.faculty}</span>
                                <span className="badge"><Clock size={16} /> {course.duration}</span>
                                <span className="badge"><Calendar size={16} /> {course.date}</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="details-content">
                    <div className="container details-grid-layout">
                        <div className="details-main">
                            <div className="feature-block glass-card">
                                <h2>Features of the Module</h2>
                                <ul className="feature-list">
                                    {course.features.map((feature, index) => (
                                        <li key={index}>
                                            <Check size={20} className="feature-icon" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="details-sidebar">
                            <div className="sidebar-card glass-card">
                                <h3>Course Fee</h3>
                                <div className="fee-display">
                                    <CreditCard size={24} />
                                    <span className="fee-amount">{course.fee}</span>
                                </div>
                                <p className="discount-text">{course.discount}</p>
                                <div className="sidebar-action">
                                    <button className="btn-enroll-now">Enroll Now</button>
                                </div>
                            </div>

                            <div className="sidebar-card glass-card">
                                <h3>Our USPS</h3>
                                <ul className="usp-list-sidebar">
                                    {course.usps.map((usp, idx) => (
                                        <li key={idx}>
                                            <Tag size={16} /> {usp}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default OptionalDetails;
