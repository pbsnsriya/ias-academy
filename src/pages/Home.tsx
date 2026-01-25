
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <Layout>
            <div className="home-page">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="hero-grid-bg"></div>
                    <div className="container hero-container">
                        <div className="hero-content">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="hero-title-wrapper"
                            >
                                <h1 className="hero-title">
                                    India's Most <br />
                                    Affordable IAS <br />
                                    Training Academy
                                </h1>
                                <div className="hero-circular-badge">
                                    <svg viewBox="0 0 100 100" width="120" height="120">
                                        <defs>
                                            <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0 " />
                                        </defs>
                                        <g className="hero-badge-text">
                                            <text fontSize="8.5" fontWeight="600" fill="currentColor">
                                                <textPath xlinkHref="#circlePath">
                                                    CONSISTENCY • EQUANIMITY • DISCIPLINE • DEDICATION •
                                                </textPath>
                                            </text>
                                        </g>
                                        <image
                                            href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/256px-Emblem_of_India.svg.png"
                                            x="40" y="40" width="50" height="50"
                                        />
                                    </svg>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="hero-subtitle-container"
                            >
                                <p className="hero-subtitle">
                                    For those who dream to becoming an IAS or IPS officers and serve the
                                    nation with integrity and courage, we offer a serious path forward.
                                </p>
                                <p className="hero-subtitle">
                                    Our Vision is to nurture committed aspirants, so that in the next five years,
                                    100 IAS and 100 IPS officers take shape as a leader marked by competence,
                                    ethics, cultural sensitivity, patriotism and dedication towards public service
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="hero-actions"
                            >
                                <Link to="/contact" className="btn-hero-pill">
                                    Contact Us <ArrowRight size={20} />
                                </Link>
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="hero-image-wrapper"
                        >
                            <div className="hero-image-mask">
                                <img src="/assets/images/optional.png" alt="IAS Academy Hero" className="hero-image-main" />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Preparation Strip */}
                <div className="prep-strip">
                    <div className="container prep-container">
                        {['MAINS', 'PRELIMS', 'INTERVIEW', 'PREPARATION', 'AFFAIRS', 'SOLUTION', 'GENERAL KNOWLEDGE'].map((item) => (
                            <div key={item} className="prep-item">
                                <span>{item}</span>
                                <Plus size={16} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dark Info Section */}
                <section className="info-section-dark">
                    <div className="container">
                        <div className="info-grid">
                            <div className="info-card-dark">
                                <h3>Who we are & what we do</h3>
                                <p>Discover our identity, mission, and the impactful work we do to make a difference.</p>
                                <Link to="/about" className="link-more-light">Learn more <ArrowRight size={16} /></Link>
                            </div>
                            <div className="info-card-dark">
                                <h3>We'll take you to your dreams</h3>
                                <p>Turning your vision into reality with expert faculty and learning.</p>
                                <Link to="/courses" className="link-more-light">Learn more <ArrowRight size={16} /></Link>
                            </div>
                            <div className="info-card-dark">
                                <h3>Drop us your message!</h3>
                                <p>Get information on a course that you are comfortable with</p>
                                <Link to="/contact" className="link-more-light">Learn more <ArrowRight size={16} /></Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* More about us / Project List */}
                <section className="project-section">
                    <div className="container">
                        <div className="section-header-left">
                            <h2 className="section-title-simple">More about us</h2>
                            <span className="project-list-badge"><BookOpen size={16} /> Project List</span>
                        </div>

                        <div className="project-grid-large">
                            <div className="project-card-large">
                                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600" alt="Director" />
                                <div className="project-content">
                                    <span className="project-label">Our Director</span>
                                    <h4>Our Director</h4>
                                </div>
                            </div>
                            <div className="project-card-large">
                                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600" alt="Courses" />
                                <div className="project-content">
                                    <span className="project-label">Our Matches</span>
                                    <h4>Our Courses</h4>
                                </div>
                            </div>
                            <div className="project-card-large">
                                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600" alt="Testimonials" />
                                <div className="project-content">
                                    <span className="project-label">Our Testimonials</span>
                                    <h4>Our Testimonials</h4>
                                </div>
                            </div>
                            <div className="project-card-large">
                                <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600" alt="Accolades" />
                                <div className="project-content">
                                    <span className="project-label">Our Accolades</span>
                                    <h4>Our Accolades</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Live Classes Section */}
                <section className="live-classes">
                    <div className="container dark-card">
                        <div className="live-header">
                            <h2>Live Classes</h2>
                            <Link to="/contact" className="btn-small-outline">Let's Talk with Us <ArrowRight size={16} /></Link>
                        </div>
                        <div className="live-list">
                            {[
                                { id: '01', title: 'Real Time Interaction', desc: 'We Connect with students directly and facilitate dynamic discussions, questions, and collaborative activities.' },
                                { id: '02', title: 'Recording & sharing', desc: 'record live sessions and if you miss or want to revisit key points, you can easily access recordings within the course platform.' },
                                { id: '03', title: 'Quizzes', desc: 'We conduct quizzes to solicit student opinions and then use their responses as a springboard for discussion or clarification.' },
                                { id: '04', title: 'Online Debates', desc: 'We have students work in groups to conduct on-the-spot research, generate arguments for and against the statement, and formulate their own perspective.' }
                            ].map(item => (
                                <div key={item.id} className="live-item">
                                    <span className="item-id">{item.id}</span>
                                    <h4 className="item-content-title">{item.title}</h4>
                                    <p className="item-content-desc">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Meet the Team Section */}
                <section className="team-section">
                    <div className="container">
                        <h2 className="section-title-simple">Meet the team</h2>
                        <div className="team-featured-simple">
                            <img src="/assets/images/team.png" alt="The Team" />
                            <div className="team-quote-simple">
                                <p>
                                    Our one-on-one sessions provide personalized mentorship tailored to each aspirant's
                                    strengths, weaknesses, and preparation stage. Every session is designed to offer focused
                                    guidance, customized study strategies, and continuous feedback, helping students build
                                    strong fundamentals, improve answer writing, and prepare with clarity and confidence for
                                    every stage of the IAS examination.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Home;
