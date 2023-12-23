import React, { useEffect } from 'react';
import './About.css';
import Image from '../../assets/aboutimg.png';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';
import AOS from 'aos';  // Import AOS library
import 'aos/dist/aos.css';  // Import AOS styles

const About = () => {
    useEffect(() => {
        // Initialize AOS on component mount
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
        });

        // Optional: Reset AOS when the component unmounts
        return () => {
            AOS.refresh();
        };
    }, []);

    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }

    return (
        <section className="about container section" id="about" data-aos="fade-up">
            <h2 className="section__title" data-aos="fade-down">
                About Me
            </h2>

            <div className="about__container grid" data-aos="fade-up">
                <img src={Image} alt="" className="about__img" data-aos="fade-right" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hello, I am Indula Perera, a highly motivated software engineering graduate holding a Bachelor of Science degree. I possess proficiency in various programming languages, including Java, JavaScript, HTML, PHP, Spring Boot, MySQL, MongoDB, OOP, and Android App Development, along with expertise in React JS. My career aspiration is to establish a successful career as a software engineer, utilizing my knowledge and skills to craft innovative software solutions tailored to meet the needs of businesses and end-users. With a solid foundation in education and practical experience, I am well-prepared to pursue my professional objectives and excel in the software engineering industry.
                        </p>
                        <button className="btn" onClick={downloadResume} data-aos="fade-up">
                            Download CV
                        </button>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    );
}

export default About;
