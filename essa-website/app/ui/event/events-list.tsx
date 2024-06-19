import { EventType } from './event-type';

export const eventsList: EventType[] = [
  {
    id: 1,
    name: 'Economics Seminar',
    type: 'Career',
    date: 'Monday, 10th July 2024', // Updated with day and date
    time: '3:00pm-6:00pm',
    description: 'Join us for an insightful seminar on current economic trends. Network with industry experts and gain valuable insights into the future of the economy.',
    campus: 'Uni Melb',
    address: '123 University Ave, Melbourne',
    image: '/event-careercompass.png',
    details: [
      `The Economics Seminar is designed for students and professionals interested in understanding the latest trends and developments in the field of economics. During this event, participants will have the opportunity to engage with renowned economists and industry leaders. Topics covered will include macroeconomic policies, global financial markets, and sustainable economic growth.`,
      `Attendees will benefit from keynote speeches, panel discussions, and networking sessions. Whether you are exploring career opportunities or seeking to deepen your knowledge in economics, this seminar offers valuable insights and networking opportunities.`,
      `Don't miss out on this chance to broaden your understanding of economic theories and real-world applications. Join us for an enriching experience at the University of Melbourne's main campus.`,
    ],
    registrationLink: '/',
  },
  {
    id: 2,
    name: 'Networking Event',
    type: 'Social',
    date: 'Friday, 15th August 2024', // Updated with day and date
    time: '3:00pm-6:00pm',
    description: 'Join us for an evening of networking with professionals in various fields. Expand your connections and opportunities while enjoying refreshments and insightful conversations.',
    campus: 'Clayton',
    address: '456 Main Street, Clayton',
    image: '/event-careerspanel.png',
    details: [
      `The Networking Event provides a platform for students and professionals to connect and build meaningful relationships. This informal gathering encourages participants to share experiences, exchange ideas, and explore potential collaborations.`,
      `Participants can expect engaging discussions, interactive activities, and opportunities to meet industry professionals from diverse backgrounds. Whether you are a student looking for internship opportunities or a professional seeking new connections, this event offers a relaxed environment to expand your network.`,
      `Join us at Clayton campus for an evening of networking, knowledge-sharing, and community building.`,
    ],
    registrationLink: '/',
  },
  {
    id: 3,
    name: 'Workshop on Data Analysis',
    type: 'Education',
    date: 'Tuesday, 20th September 2024', // Updated with day and date
    time: '3:00pm-6:00pm',
    description: 'Join us for a hands-on workshop exploring fundamental techniques in data analysis. Learn essential skills and tools used in the industry today.',
    campus: 'Caulfield',
    address: '789 High Street, Caulfield',
    image: '/event-ppccworkshop.png',
    details: [
      `The Workshop on Data Analysis is designed for students and professionals interested in enhancing their skills in data analysis and interpretation. Participants will engage in practical exercises and case studies, covering topics such as data visualization, statistical analysis, and data-driven decision making.`,
      `Led by experienced instructors and industry experts, this workshop offers a comprehensive overview of essential techniques and tools used in data analysis. Whether you are new to data science or looking to deepen your expertise, this hands-on session provides valuable insights and practical knowledge.`,
      `Join us at Caulfield campus for an interactive workshop that will equip you with the skills and confidence to tackle real-world data challenges.`,
    ],
    registrationLink: '/',
  },
];
