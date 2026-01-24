
import Layout from '../components/Layout';

import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Our Director',
            image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=500',
        },
        {
            title: 'Our Courses',
            image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=500',
        },
        {
            title: 'Our Testimonials',
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500',
        },
        {
            title: 'Our Accolades',
            image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=500',
        }
    ];

    return (
        <Layout>
            <div className="projects-page">
                <section className="projects-hero">
                    <div className="container">
                        <h1 className="section-title-large">Creative Work with <br />Real World Results</h1>
                        <p className="section-subtitle-center">Explore our portfolio of projects that showcase our creativity, expertise, and passion for delivering impactful solutions.</p>

                        <div className="projects-grid">
                            {projects.map((project, index) => (
                                <div key={index} className="project-card-full">
                                    <div className="project-img-container">
                                        <img src={project.image} alt={project.title} />
                                    </div>
                                    <div className="project-detail">
                                        <span className="project-cat">{project.title}</span>
                                        <h3>{project.title}</h3>
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

export default Projects;
