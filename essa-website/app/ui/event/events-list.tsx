// Mock data atm - will fetch from backend later instead
import { EventType } from './event-type';

export const eventsList: EventType[] = [
  {
    id: 1,
    name: 'Economics Seminar',
    type: 'Career',
    date: '2024-07-10',
    time: '3:00pm-6:00pm',
    description: 'A seminar on current economic trends.',
    campus: 'Uni Melb',
    image: '/event-careercompass.png',
    details: 'dfajsldkfjlsdjf',
    registrationLink: '/',
  },
  {
    id: 2,
    name: 'Networking Event',
    type: 'Social',
    date: '2024-08-15',
    time: '3:00pm-6:00pm',
    description: 'Meet and connect with professionals in the field.',
    campus: 'Clayton',
    image: '/event-careerspanel.png',
    details: 'dfajsldkfjlsdjf',
    registrationLink: '/',
  },
  {
    id: 3,
    name: 'Workshop on Data Analysis',
    type: 'Education',
    date: '2024-09-20',
    time: '3:00pm-6:00pm',
    description: 'Hands-on workshop on data analysis techniques.',
    campus: 'Caulfield',
    image: '/event-ppccworkshop.png',
    details: 'dfajsldkfjlsdjf',
    registrationLink: '/',
  },
];
