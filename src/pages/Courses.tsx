
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

import { BookOpen } from 'lucide-react';
import './Courses.css';

const Courses = () => {
    const courses = [
        {
            id: 'optionals',
            title: 'Optionals',
            duration: '4 months',
            image: '/assets/images/optional.png',
        },
        {
            id: 'mentorship',
            title: 'Mentorship / Test series',
            duration: '',
            image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=500',
        },
        {
            id: 'value',
            title: 'Value - Additional Classes',
            duration: '',
            image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=500',
        },
        {
            id: 'essay',
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
                            {courses.map((course, index) => {
                                let linkPath = `/courses/${course.id}`; // Default
                                if (course.title === 'Optionals') linkPath = '/courses/optionals';
                                if (course.title === 'Mentorship / Test series') linkPath = '/courses/mentorship';
                                if (course.title === 'Essay Ethics') linkPath = '/courses/essay';

                                return (
                                    <Link to={linkPath} key={index} className="course-card-alt">
                                        <div className="course-img-wrap">
                                            <img src={course.image} alt={course.title} />
                                        </div>
                                        <div className="course-info-alt">
                                            {course.duration && <span className="course-duration">{course.duration}</span>}
                                            <h3>{course.title}</h3>
                                        </div>
                                    </Link>
                                );
                            })}
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
