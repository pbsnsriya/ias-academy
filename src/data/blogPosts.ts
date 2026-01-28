export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    authorInitial: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: 'mastering-answer-writing-gs-paper-3',
        title: 'Mastering Answer Writing for GS Paper III',
        excerpt: 'Success in the UPSC Mains depends heavily on how you present your arguments. Learn the art of structured answer writing.',
        content: `Answer writing is the most critical skill for a UPSC aspirant. In GS Paper III, which covers Economy, Science & Technology, Environment, and Security, the questions are often direct but require data-driven answers. Start with a crisp introduction, use subheadings for the body, and conclude with a forward-looking positive note. Always include relevant diagrams or flowcharts to score that extra half mark.

Dr. Vivekananda IAS Academy is committed to providing the highest quality education. This article is part of our series on civil services preparation. For more structured learning, consider exploring our comprehensive courses.`,
        author: 'Dr. Vivekananda',
        authorInitial: 'D',
        date: 'Oct 24, 2023',
        readTime: '8 min read',
        category: 'STRATEGY',
        image: '/assets/images/blog/bamboo-forest.jpg'
    },
    {
        id: 'india-middle-east-europe-corridor',
        title: 'Understanding the India-Middle East-Europe Economic Corridor (IMEC)',
        excerpt: 'A deep dive into the geopolitical and economic significance of the newly proposed IMEC corridor announced at G20.',
        content: `The India-Middle East-Europe Economic Corridor (IMEC) represents a transformative infrastructure initiative that aims to enhance connectivity between Asia, the Middle East, and Europe. Announced during the G20 Summit, this corridor is expected to boost trade, energy security, and digital connectivity across three continents.

The IMEC comprises two separate corridors: the east corridor connecting India to the Arabian Gulf, and the northern corridor connecting the Gulf to Europe. This ambitious project includes railway networks, shipping routes, and digital infrastructure that will facilitate seamless movement of goods and services.

For UPSC aspirants, understanding IMEC is crucial as it touches upon multiple dimensions - international relations, economic development, infrastructure, and geopolitics. The corridor is seen as a counter to China's Belt and Road Initiative and represents India's growing role in global infrastructure development.`,
        author: 'A. K. Sharma',
        authorInitial: 'A',
        date: 'Oct 22, 2023',
        readTime: '12 min read',
        category: 'CURRENT AFFAIRS',
        image: '/assets/images/blog/mountain-sunset.jpg'
    },
    {
        id: 'ethics-integrity-upsc-preparation',
        title: 'Ethics and Integrity in UPSC Preparation',
        excerpt: 'Understanding the importance of ethical values and integrity in civil services and how to prepare for the Ethics paper.',
        content: `Ethics, Integrity, and Aptitude form a crucial part of the UPSC Mains examination. This paper tests not just your theoretical knowledge but your ability to apply ethical principles to real-world scenarios. The paper is designed to assess your moral compass and decision-making abilities in challenging situations.

Key topics include ethical theories, public service values, emotional intelligence, case studies, and application-based questions. Success in this paper requires regular practice of case studies, understanding different ethical frameworks, and developing a balanced perspective on moral dilemmas.

Dr. Vivekananda IAS Academy offers specialized coaching for Ethics and Integrity, helping aspirants develop a structured approach to tackle this important paper. Our methodology focuses on building conceptual clarity while enhancing answer-writing skills through regular practice and personalized feedback.`,
        author: 'Dr. Vivekananda',
        authorInitial: 'D',
        date: 'Oct 18, 2023',
        readTime: '10 min read',
        category: 'STRATEGY',
        image: '/assets/images/blog/study-desk.jpg'
    },
    {
        id: 'current-affairs-integration-strategy',
        title: 'Integrating Current Affairs with Static Syllabus',
        excerpt: 'Learn effective strategies to seamlessly integrate current affairs with your static syllabus preparation for UPSC.',
        content: `One of the biggest challenges UPSC aspirants face is integrating current affairs with static syllabus. The key is to not treat them as separate entities but as complementary components of your preparation. Every current event should be analyzed through the lens of the static syllabus.

For instance, when studying about a new government scheme, connect it with relevant constitutional provisions, previous policies, and socio-economic impacts. This approach not only helps in retention but also enables you to write comprehensive answers that demonstrate depth of understanding.

Create a system where you maintain topic-wise notes that include both static concepts and related current developments. This integrated approach will help you in both Prelims and Mains, as questions increasingly demand a holistic understanding of issues.

Regular revision, making connections between different topics, and practicing answer writing with current examples are essential components of this strategy.`,
        author: 'A. K. Sharma',
        authorInitial: 'A',
        date: 'Oct 15, 2023',
        readTime: '9 min read',
        category: 'CURRENT AFFAIRS',
        image: '/assets/images/blog/newspaper.jpg'
    }
];

export const getBlogById = (id: string): BlogPost | undefined => {
    return blogPosts.find(post => post.id === id);
};

export const getBlogsByCategory = (category: string): BlogPost[] => {
    return blogPosts.filter(post => post.category === category);
};
