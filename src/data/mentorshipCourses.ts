export interface CourseData {
    id: string;
    title: string;
    subtitle: string;
    faculty: string;
    date: string;
    duration?: string;
    fee: string;
    discount?: string;
    features: string[];
    tests?: string;
    timings?: string;
    image: string;
}

export const mentorshipCourses: CourseData[] = [
    {
        id: 'parinaam',
        title: 'Parinaam (Advanced)',
        subtitle: 'Anthropology Mains Test Series by Dr G. Vivekananda',
        faculty: 'Dr G. Vivekananda',
        date: 'To be announced soon',
        tests: '12 (8 Sectional, 4 Full length)',
        timings: 'Test: 2:30-5:30 PM (Sun) | Discussion: 6PM - 9PM (Sun)',
        fee: 'To be announced',
        discount: 'Concessional fee of Rs 1000/- to students who appeared for Mains examination previously with Reflections IAS Academy',
        features: [
            'Only for Students Appearing Mains and only 50 Admissions',
            'Test copy evaluation within 2 weeks.',
            'For 3 out of 12 Tests, copies would be evaluated one on one for both Offline and online students.',
            'A detailed image based PDF will be shared soon after the test discussion.',
            'A comprehensive test discussion of 2-3 hrs after each test would be done both offline and online. (Recordings are also available)',
            'Tests can be written both online and Offline.',
            'Limited Admissions of 50 students to maintain quality in evaluation.',
            'Flexible Schedule, but students must write the test before the next test without failure.',
            'A dedicated telegram group for sharing content related to current developments in Anthropology.',
            'Scientific Scheduling mindful of students learning abilities.'
        ],
        image: '/assets/images/mentorship.png'
    },
    {
        id: 'parishrama',
        title: 'Parishrama',
        subtitle: 'Anthropology long term Mentorship programme with test series',
        faculty: 'Dr G. Vivekananda',
        date: 'Batch 1: To be announced soon',
        duration: '6 months intensive training',
        fee: 'To be announced',
        features: [
            'Daily PYQs plus FYQs Answer writing practice according to a fixed schedule with Evaluation.',
            'Forty five minutes, one on one Session, with Dr Vivekananda Sir in the beginning itself to identify past mistakes, strengths and accordingly design preparation.',
            '14 Sectional tests (Duration: 1 and 1/2 hr with Evaluation) + 2 Full length sectional tests.',
            'Complete (Image based plus Text based) PDFs of Whole Anthropology Syllabus.',
            'Live Access to 50 Hrs Anthropology crash course with a special emphasis on PYQs.',
            'Daily reporting to the mentor on the number of hours allotted to Anthropology.',
            'Access to 50 hrs of recorded sessions on Anthropology PYQs (Samagra).'
        ],
        image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200'
    },
    {
        id: 'samarpan',
        title: 'Samarpan (Advanced)',
        subtitle: 'Sociology Mains Test Series by Dr G. Vivekananda',
        faculty: 'Dr G. Vivekananda',
        date: 'To be announced soon',
        tests: '12 (8 Sectional, 4 Full length)',
        timings: 'Test: 2:30-5:30 PM (Sun) | Discussion: 6PM - 9PM (Sun)',
        fee: 'To be announced',
        discount: 'Concessional fee of Rs 1000/- to students who appeared for Mains examination previously',
        features: [
            'Only for Students Appearing Mains and only 50 Admissions',
            'Test copy evaluation within 2 weeks.',
            'For 3 out of 12 Tests, copies would be evaluated one on one for both Offline and online students.',
            'A detailed image based PDF will be shared soon after the test discussion.',
            'A comprehensive test discussion of 2-3 hrs after each test would be done both offline and online. (Recordings are also available)',
            'Tests can be written both online and Offline.',
            'Limited Admissions of 50 students to maintain quality in evaluation.',
            'Flexible Schedule, but students must write the test before the next test without failure.',
            'A dedicated telegram group for sharing content related to current developments in Sociology.',
            'Scientific Scheduling mindful of students learning abilities.'
        ],
        image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200'
    },
    {
        id: 'samvedana',
        title: 'Samvedana',
        subtitle: 'Sociology long term Mentorship programme with test series',
        faculty: 'Dr G. Vivekananda',
        date: 'Batch 1: To be announced soon',
        duration: '6 months intensive training',
        fee: 'To be announced',
        features: [
            'Daily PYQs plus FYQs Answer writing practice according to a fixed schedule with Evaluation.',
            'Forty five minutes, one on one Session, with Dr Vivekananda Sir in the beginning itself to identify past mistakes, strengths and accordingly design preparation.',
            '14 Sectional tests (Duration: 1 and 1/2 hr with Evaluation) + 2 Full length sectional tests.',
            'Live Access to 50 Hrs Sociology crash course with a special emphasis on PYQs.',
            'Daily reporting to the mentor on the number of hours allotted to Sociology.'
        ],
        image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1200'
    }
];
