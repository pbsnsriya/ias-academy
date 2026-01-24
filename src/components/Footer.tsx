
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Dribbble, ArrowUpRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer shadow-top">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h3 className="brand-title">Dr Vivek IAS Academy</h3>
                        <p className="cta-text">Do you like what you see?</p>
                        <p className="sub-cta">Let's build the future IAS.</p>
                        <Link to="/contact" className="footer-link-btn">
                            Let's Talk with Us <ArrowUpRight size={18} />
                        </Link>
                    </div>

                    <div className="footer-links">
                        <h4>Useful Links</h4>
                        <Link to="/projects">Our Projects</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/blogs">News & Blogs</Link>
                        <Link to="/team">Our Team</Link>
                    </div>

                    <div className="footer-links">
                        <h4>Information</h4>
                        <Link to="/contact">Contact Us</Link>
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/404">Error 404</Link>
                    </div>

                    <div className="footer-social">
                        <h4>Get In Touch</h4>
                        <p>Connect with us via our socials</p>
                        <div className="social-icons">
                            <a href="#" className="social-icon"><Linkedin size={20} /></a>
                            <a href="#" className="social-icon"><Twitter size={20} /></a>
                            <a href="#" className="social-icon"><Dribbble size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <h1 className="bg-text">IAS ACADEMY</h1>
                    <p className="copyright">© All Rights Reserved by Dr. Vivekananda IAS Academy - 2026</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
