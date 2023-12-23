import React, { useState, useEffect } from "react";
import "./Resume.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Button from "./Button";
import AOS from 'aos';  // Import AOS library
import 'aos/dist/aos.css';  // Import AOS styles

import WorkExperience from "./WorkExperience";

const Resume = () => {
    const [tabIndex, setTabIndex] = useState(0);

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
        <section className="resume container section" id="resume" data-aos="fade-up">
            <h2 className="section__title" data-aos="fade-down">
                Education
            </h2>

            <div className="resume__container">
                <Tabs
                    className="tabs"
                    selectedIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}
                    selectedTabClassName={"is-active"}
                    selectedTabPanelClassName={"is-active"}
                >
                    <TabList className="tab__list">
                        {WorkExperience.map((experience, index) => {
                            const { id, company } = experience;
                            return (
                                <Tab className="tab" key={`company-${id}`}>
                                    <Button>{company}</Button>
                                </Tab>
                            );
                        })}
                    </TabList>

                    {WorkExperience.map((experience) => {
                        const { id, company, yearsActive, title, information } = experience;
                        return (
                            <TabPanel className="tab__panel" key={`panel-${id}`}>
                                <h2 className="tab__panel-title">
                                    {title} | {company}
                                </h2>
                                <p className="tab__panel-subtitle">{yearsActive}</p>
                                <ul className="tab__panel-list">
                                    {information.map((info, index) => {
                                        return <li key={`info-${index}`}>{info}</li>;
                                    })}
                                </ul>
                            </TabPanel>
                        );
                    })}
                </Tabs>
            </div>
        </section>
    );
};

export default Resume;
