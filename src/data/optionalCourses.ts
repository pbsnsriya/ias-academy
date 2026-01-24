export interface CourseData {
    id: string;
    title: string;
    subtitle: string;
    faculty: string;
    date: string;
    duration: string;
    fee: string;
    discount: string;
    usps: string[];
    features: string[];
    image: string;
}

export const optionalCourses: CourseData[] = [
    {
        id: 'anthropology',
        title: 'Anthropology Foundation',
        subtitle: 'Comprehensive 250+ Hrs Module',
        faculty: 'Dr Vivekananda',
        date: 'To be announced soon',
        duration: '250Hrs',
        fee: 'Rs 30000/-',
        discount: '10% discount for Women, SC and ST, EBC and Differently abled Aspirants',
        usps: [
            'Taught by faculty who cleared UPSC Civil Services examination',
            'Most affordable Optional coaching in the country.'
        ],
        features: [
            'Taught by Dr Vivekananda who cleared UPSC Civil Services examination and produced the highest number of ranks in Anthropology optional from Hyderabad.',
            'Complete online mode to ensure learning at ease.',
            'Highly suitable for working professionals, students pursuing under graduate education, housewives, aspirants at remote places.',
            'Time bound completion of the syllabus.',
            '12 Sectional tests and 2 Grand tests with evaluation.',
            'A Detailed PDF would be provided after every class for all the Topics.',
            'Mains Answer writing approach with a PYQ focus would be provided after every topic in the class.',
            'All Video recordings would be provided on APP which students can access till completion of the Mains exam.',
            'Personal Mentorship by Dr Vivekananda and weekly monitoring of preparation progress.',
            'Direct access to faculty for doubts clearance.'
        ],
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200'
    },
    {
        id: 'sociology',
        title: 'Sociology Foundation',
        subtitle: 'Complete UPSC Syllabus coverage',
        faculty: 'Dr Vivekananda',
        date: 'To be announced soon',
        duration: '250Hrs',
        fee: 'Rs 30000/-',
        discount: '10% discount for Women, SC and ST, EBC and Differently abled Aspirants',
        usps: [
            'Taught by faculty who cleared UPSC Civil Services examination',
            'Most affordable Optional coaching in the country.'
        ],
        features: [
            'Taught by Dr Vivekananda who cleared UPSC Civil Services examination',
            'Complete online mode to ensure learning at ease.',
            'Highly suitable for working professionals, students pursuing under graduate education, housewives, aspirants at remote places.',
            'Time bound completion of the syllabus.',
            '12 Sectional tests and 2 Grand tests with evaluation.',
            'A Detailed PDF would be provided after every class for all the Topics.',
            'Mains Answer writing approach with a PYQ focus would be provided after every topic in the class.',
            'All Video recordings would be provided on APP which students can access till completion of the Mains exam.',
            'Personal Mentorship by Dr Vivekananda and weekly monitoring of preparation progress.',
            'Direct access to faculty for doubts clearance.'
        ],
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200'
    }
];
