import logo from './logo.png';
import city from './1png.png';
import pandit from './4png.png';
import puja from './3png.png';
import handshake from './2png.png';
import janmasthami from './janmasthami.png';
import Pandit from './about-home.png';
import Hero from './hero.png';
import About from './our_story.png';
import Story from './about_us.png';
import Mission from './mission.png';
import Vision from './vision.png';

export const images = {
    logo,
    city,
    pandit,
    puja,
    handshake,
    janmasthami,
    Pandit,
    Hero,
    Story,
    About,
    Mission,
    Vision
}

export const menuLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Pujas', path: '/our-pujas' },
    { name: 'Pandits', path: '/our-pandits' },
]

export const pujaServices = [
    {
        id: 1,
        title: "Janmasthami Puja",
        description: "Auspicious beginning for your new home",
        image: janmasthami,
    },
    {
        id: 2,
        title: "Satyanarayan Katha",
        description: "For peace, prosperity, and blessings",
        image: "https://img.freepik.com/free-vector/puja-illustration_1284-53279.jpg",
    },
    {
        id: 3,
        title: "Wedding Puja",
        description: "Complete Vedic rituals for your marriage",
        image: "https://img.freepik.com/free-vector/puja-illustration_1284-53279.jpg",
    },
    {
        id: 4,
        title: "Mundan Ceremony",
        description: "Bless your child with good fortune",
        image: "https://img.freepik.com/free-vector/puja-illustration_1284-53279.jpg",
    },
];

export const panditProfiles = [
    {
        id: 1,
        name: "Pandit Ram Sharma",
        image: "https://img.freepik.com/free-vector/puja-illustration_1284-53279.jpg",
        experience: "10 yrs",
        location: "Varanasi, Uttar Pradesh",
        specialties: ["Griha Pravesh", "Satyanarayan Katha"],
        languages: ["Hindi", "Sanskrit", "English"],
        pujas: [
            {
                name: "Satyanarayan Katha",
                image: "https://img.freepik.com/free-vector/puja-illustration_1284-53279.jpg",
            },
            {
                name: "Griha Pravesh Puja",
                image: "https://img.freepik.com/free-vector/puja-illustration_1284-53279.jpg",
            },
            {
                name: "Wedding Puja",
                image: "https://img.freepik.com/free-vector/puja-illustration_1284-53279.jpg",
            },
            {
                name: "Navagraha Shanti",
                image: "https://img.freepik.com/free-vector/puja-illustration_1284-53279.jpg",
            },
        ],
    },
    {
        id: 2,
        name: "Pandit Ram Sharma",
        experience: "10 yrs",
        specialties: ["Griha Pravesh", "Satyanarayan Katha"],
        image: "https://img.freepik.com/free-vector/puja-illustration_1284-53279.jpg",
    },
    {
        id: 3,
        name: "Pandit Ram Sharma",
        experience: "10 yrs",
        specialties: ["Griha Pravesh", "Satyanarayan Katha"],
        image: "https://img.freepik.com/free-vector/puja-illustration_1284-53279.jpg",
    },
    {
        id: 4,
        name: "Pandit Ram Sharma",
        experience: "10 yrs",
        specialties: ["Griha Pravesh", "Satyanarayan Katha"],
        image: "https://img.freepik.com/free-vector/puja-illustration_1284-53279.jpg",
    }
];