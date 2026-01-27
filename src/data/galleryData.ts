export interface GalleryItem {
    id: string;
    image: string;
    desc: string;
    tag: 'Toppers' | 'Podcasts' | 'Seminars' | 'Public Events' | 'All' | 'Testimonials';
    videoUrl?: string;
}

export const galleryData: GalleryItem[] = [
    {
        id: '1',
        image: '/assets/gallery/With Banna Venkatesh AIR-15 IAS (Under Trainee).jpeg',
        desc: 'With Banna Venkatesh AIR-15 IAS (Under Trainee)',
        tag: 'Toppers'
    },
    {
        id: '2',
        image: '/assets/gallery/With Bhargav Potupureddi IPS (Under Trainee).jpeg',
        desc: 'With Bhargav Potupureddi IPS (Under Trainee)',
        tag: 'Toppers'
    },
    {
        id: '3',
        image: '/assets/gallery/With Chaitanya Reddy IPS Addl Superintendent of Police, Kamareddy.jpeg',
        desc: 'With Chaitanya Reddy IPS Addl Superintendent of Police, Kamareddy',
        tag: 'Toppers'
    },
    {
        id: '4',
        image: '/assets/gallery/With Mantri Mourya Bharadwaj IAS Joint Collector & Addl District Magistrate Puttaparthi Sri Satya Sai District.jpeg',
        desc: 'With Mantri Mourya Bharadwaj IAS Joint Collector',
        tag: 'Toppers'
    },
    {
        id: '5',
        image: '/assets/gallery/With Mounika.P IPS Addl SP, Adilabad.jpeg',
        desc: 'With Mounika.P IPS Addl SP, Adilabad',
        tag: 'Toppers'
    },
    {
        id: '6',
        image: '/assets/gallery/With Shri Avula Ramesh Reddy Inspector General Police.jpeg',
        desc: 'With Shri Avula Ramesh Reddy Inspector General Police',
        tag: 'Public Events'
    },
    {
        id: '7',
        image: '/assets/gallery/With Mr Shashikanth Korravath IRS.jpeg',
        desc: 'With Mr Shashikanth Korravath IRS',
        tag: 'Public Events'
    },
    {
        id: 't1',
        image: '/assets/gallery/With Banna Venkatesh AIR-15 IAS (Under Trainee).jpeg',
        desc: '"Dr. Vivekananda sir’s guidance was pivotal in my journey. His anthropology classes gave me the conceptual clarity I needed to score high." - Banna Venkatesh',
        tag: 'Testimonials',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        id: 't2',
        image: '/assets/gallery/With Bhargav Potupureddi IPS (Under Trainee).jpeg',
        desc: '"The personalized mentorship and the disciplined approach at the academy helped me stay focused throughout the preparation." - Bhargav Potupureddi',
        tag: 'Testimonials',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        id: 't3',
        image: '/assets/gallery/With Chaitanya Reddy IPS Addl Superintendent of Police, Kamareddy.jpeg',
        desc: '"The test series and the detailed feedback on my answers were instrumental in improving my writing skills." - Chaitanya Reddy',
        tag: 'Testimonials',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        id: 't4',
        image: '/assets/gallery/With Mantri Mourya Bharadwaj IAS Joint Collector & Addl District Magistrate Puttaparthi Sri Satya Sai District.jpeg',
        desc: '"Consistency is key, and this academy provides the perfect environment to maintain it. Truly grateful for the support." - Mantri Mourya Bharadwaj',
        tag: 'Testimonials',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        id: 't5',
        image: '/assets/gallery/With Mounika.P IPS Addl SP, Adilabad.jpeg',
        desc: '"A transformative journey. The faculty doesn\'t just teach, they mentor you for life as a civil servant." - Mounika P',
        tag: 'Testimonials',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
];
