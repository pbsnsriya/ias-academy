
import Layout from '../components/Layout';

import { BookOpen } from 'lucide-react';
import './Courses.css';

const Courses = () => {
    const courses = [
        {
            title: 'Optionals',
            duration: '4 months',
            image: 'https://images.unsplash.com/photo-1523240715632-6103498a358c?q=80&w=500',
            badge: 'Course Title'
        },
        {
            title: 'Mentorship / Test series',
            duration: '',
            image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=500',
        },
        {
            title: 'Value - Additional Classes',
            duration: '',
            image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=500',
        },
        {
            title: 'Essay Ethics',
            duration: '12 min read',
            image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=500',
        }
    ];

    return (
        <Layout>
            <div className="courses-page">
                <section className="courses-hero">
                    <div className="container">
                        <h1 className="section-title-large">The latest courses from us.</h1>
                        <div className="courses-grid">
                            {courses.map((course, index) => (
                                <div key={index} className="course-card-alt">
                                    {course.badge && <span className="course-badge-overlay"><BookOpen size={16} /> {course.badge}</span>}
                                    <div className="course-img-wrap">
                                        <img src={course.image} alt={course.title} />
                                    </div>
                                    <div className="course-info-alt">
                                        {course.duration && <span className="course-duration">{course.duration}</span>}
                                        <h3>{course.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="load-more-container">
                            <button className="btn-load-more">Load More</button>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Courses;
