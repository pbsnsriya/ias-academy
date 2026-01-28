import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { blogPosts } from '../data/blogPosts';
import './BlogListing.css';

const BlogListing = () => {
    return (
        <Layout>
            <div className="blog-listing-page">
                <section className="blog-hero">
                    <div className="container">
                        <h1 className="section-title-large">Insights & Articles</h1>
                        <p className="blog-subtitle">Expert guidance and analysis for UPSC aspirants</p>
                    </div>
                </section>

                <section className="blog-grid-section">
                    <div className="container">
                        <div className="blog-grid">
                            {blogPosts.map((post) => (
                                <Link to={`/blogs/${post.id}`} key={post.id} className="blog-card">
                                    <div className="blog-card-image">
                                        <img src={post.image} alt={post.title} />
                                        <span className="blog-category">{post.category}</span>
                                    </div>
                                    <div className="blog-card-content">
                                        <div className="blog-meta">
                                            <span className="blog-date">{post.date}</span>
                                            <span className="blog-separator">•</span>
                                            <span className="blog-read-time">{post.readTime}</span>
                                        </div>
                                        <h2 className="blog-card-title">{post.title}</h2>
                                        <p className="blog-card-excerpt">{post.excerpt}</p>
                                        <div className="blog-author">
                                            <div className="author-avatar">{post.authorInitial}</div>
                                            <span className="author-name">{post.author}</span>
                                            <span className="read-more-link">
                                                Read More
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default BlogListing;
