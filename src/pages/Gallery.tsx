import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import { galleryData } from '../data/galleryData';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.css';

interface GalleryProps {
    defaultFilter?: string;
}

const Gallery = ({ defaultFilter = 'All' }: GalleryProps) => {
    const location = useLocation();
    const [filter, setFilter] = useState(defaultFilter);
    const filters = ['All', 'Toppers', 'Public Events', 'Podcasts', 'Seminars'];

    useEffect(() => {
        if (location.state && location.state.filter) {
            setFilter(location.state.filter);
        }
    }, [location]);

    const filteredData = filter === 'All'
        ? galleryData
        : galleryData.filter(item => item.tag === filter);

    return (
        <Layout>
            <div className="gallery-page">
                <div className="container">
                    <div className="header-content">
                        <h1 className="gallery-title">Our Gallery</h1>
                    </div>
                </div>

                <div className="container content-container">
                    <div className="filter-container-tabs">
                        {filters.map(f => (
                            <button
                                key={f}
                                className={`filter-tab ${filter === f ? 'active' : ''}`}
                                onClick={() => setFilter(f)}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    <motion.div layout className="gallery-grid">
                        <AnimatePresence mode="popLayout">
                            {filteredData.map((item) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    key={item.id}
                                    className="gallery-item"
                                >
                                    <img src={item.image} alt={item.desc} loading="lazy" />
                                    <div className="gallery-overlay">
                                        <div className="overlay-content">
                                            <span className="gallery-tag">{item.tag}</span>
                                            <p className="gallery-desc">{item.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
};

export default Gallery;
