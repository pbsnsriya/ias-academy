import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { getBlogById } from '../data/blogPosts';
import { ArrowLeft } from 'lucide-react';
import './BlogDetails.css';

const BlogDetails = () => {
    const { id } = useParams<{ id: string }>();
    const post = id ? getBlogById(id) : undefined;

    if (!post) {
        return (
            <Layout>
                <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
                    <h1>Blog post not found</h1>
                    <Link to="/blogs" className="back-link">← Back to Blogs</Link>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="blog-details-page">
                <div className="blog-header">
                    <div className="container">
                        <Link to="/blogs" className="back-to-blog">
                            <ArrowLeft size={20} />
                            Back to Blog Feed
                        </Link>
                        <span className="blog-category-badge">{post.category}</span>
                        <h1 className="blog-title">{post.title}</h1>
                        <div className="blog-meta-info">
                            <span>By {post.author}</span>
                            <span className="meta-separator">•</span>
                            <span>{post.date}</span>
                            <span className="meta-separator">•</span>
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </div>

                <div className="blog-featured-image">
                    <img src={post.image} alt={post.title} />
                </div>

                <div className="blog-content-wrapper">
                    <div className="container">
                        <div className="blog-content">
                            {post.content.split('\n\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default BlogDetails;
