import { useState } from 'react';
import Layout from '../components/Layout';
import { testimonials, Testimonial } from '../data/testimonialsData';
// import { Play, X } from 'lucide-react';
import { Play } from 'lucide-react';
import { X } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    const openModal = (videoUrl: string) => {
        setSelectedVideo(videoUrl);
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    const closeModal = () => {
        setSelectedVideo(null);
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    return (
        <Layout>
            <div className="testimonials-page">
                <section className="testimonials-hero">
                    <div className="container">
                        <h1 className="section-title-large">Stories of Success</h1>
                        <p className="section-subtitle-center">
                            Hear from our students who have transformed their dreams into reality.
                        </p>

                        <div className="testimonials-grid">
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="testimonial-card" onClick={() => openModal(testimonial.videoUrl)}>
                                    <div className="testimonial-image-wrap">
                                        <img src={testimonial.image} alt={testimonial.name} />
                                        <div className="play-overlay">
                                            <Play size={32} fill="white" />
                                        </div>
                                    </div>
                                    <div className="testimonial-content">
                                        <p className="testimonial-quote">"{testimonial.quote}"</p>
                                        <div className="testimonial-author">
                                            <h4>{testimonial.name}</h4>
                                            <span>{testimonial.role}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Video Modal */}
                {selectedVideo && (
                    <div className="video-modal-overlay" onClick={closeModal}>
                        <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close-btn" onClick={closeModal}>
                                <X size={24} />
                            </button>
                            <div className="video-wrapper">
                                <iframe
                                    src={selectedVideo}
                                    title="Testimonial Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default Testimonials;
