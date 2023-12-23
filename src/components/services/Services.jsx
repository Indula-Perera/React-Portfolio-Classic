import React, { useEffect } from 'react';

import Image1 from '../../assets/service-1.svg';
import Image2 from '../../assets/service-2.svg';
import Image3 from '../../assets/service-3.svg';
import AOS from 'aos';  // Import AOS library
import 'aos/dist/aos.css';  // Import AOS styles
import './Services.css';
const data = [
    {
        id: 1,
        image: Image1,
        title: "Responsive design",
        description:
            "Ensuring that the website/mobile app is responsive across all platforms",
    },
    {
        id: 2,
        image: Image2,
        title: "Web Development",
        description:
            "Ensuring that a website meets the correct standards, and also ensuring it's well maintained",
    },
    {
        id: 3,
        image: Image3,
        title: "Mobile Development",
        description:
            "Ensuring that a mobile app meets the correct standards, and also ensuring it's well maintained",
    },
];

const Services = () => {
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

    return (
        <section className="services container section" id="services" data-aos="fade-up">
            <h2 className="section__title" data-aos="fade-down">
                Services
            </h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id} data-aos="fade-up">
                            <img src={image} alt='' className='services__img' width="80" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default Services;
