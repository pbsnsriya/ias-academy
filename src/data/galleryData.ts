export interface GalleryItem {
    id: string;
    image: string;
    desc: string;
    tag: 'Toppers' | 'Podcasts' | 'Seminars' | 'Public Events' | 'All';
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
    }
];
