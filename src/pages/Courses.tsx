
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
            image: '/assets/images/mentorship.png',
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
            image: '/assets/images/essay-ethics.png',
        },
        {
            id: 'general',
            title: 'General Studies',
            duration: '',
            image: '/assets/images/general-studies.png',
        },
        {
            id: 'appsc',
            title: 'APPSC/TSPSC',
            duration: '',
            image: '/assets/images/general-studies.png',
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
                                if (course.title === 'Value - Additional Classes') linkPath = '/courses/value';
                                if (course.title === 'Essay Ethics') linkPath = '/courses/essay';
                                if (course.title === 'APPSC/TSPSC') linkPath = '/courses/appsc';

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
                        {courses.length > 6 && <div className="load-more-container">
                            <button className="btn-load-more">Load More</button>
                        </div>}
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Courses;
