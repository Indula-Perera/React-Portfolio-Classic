import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import Menu from "./Menu";
import { RiGithubLine, RiLink } from "react-icons/ri";
import { motion } from "framer-motion";
import AOS from "aos";  // Import AOS library
import "aos/dist/aos.css";  // Import AOS styles

const Portfolio = () => {
	const [items, setItems] = useState(Menu);
	const [activeFilter, setActiveFilter] = useState(0);

	// Initialize AOS on component mount
	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: "ease-in-out",
		});
	}, []);

	const filterItems = (categoryItem) => {
		const updatedItems = Menu.filter((curElem) => {
			return curElem.category.includes(categoryItem);
		});

		setItems(updatedItems);
	};

	return (
		<section className="portfolio container section" id="portfolio" data-aos="fade-up">
			<h2 className="section__title" data-aos="fade-down">
				Recent Projects
			</h2>

			<div className="portfolio__filters" data-aos="fade-up">
				<span
					className={activeFilter === 0 ? "portfolio__item portfolio__item-active" : "portfolio__item"}
					onClick={() => {
						setItems(Menu);
						setActiveFilter(0);
					}}
				>
					All
				</span>
				<span
					className={activeFilter === 1 ? "portfolio__item portfolio__item-active" : "portfolio__item"}
					onClick={() => {
						filterItems("Frontend");
						setActiveFilter(1);
					}}
				>
					Frontend
				</span>
				<span
					className={activeFilter === 2 ? "portfolio__item portfolio__item-active" : "portfolio__item"}
					onClick={() => {
						filterItems("React");
						setActiveFilter(2);
					}}
				>
					React
				</span>
				<span
					className={activeFilter === 3 ? "portfolio__item portfolio__item-active" : "portfolio__item"}
					onClick={() => {
						filterItems("PHP");
						setActiveFilter(3);
					}}
				>
					PHP
				</span>
				{/* <span className={activeFilter === 4 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("Backend"); setActiveFilter(4) }}>
					Backend
				</span> */}
			</div>

			<div className="portfolio__container grid">
				{items.map((elem) => {
					const { id, image, title, discription, category, url, repositoryUrl } = elem;

					return (
						<motion.div
							layout
							animate={{ opacity: 1 }}
							initial={{ opacity: 0 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="portfolio__card"
							key={id}
							data-aos="fade-up"  // Add data-aos attribute here
						>
							<div className="portfolio__thumbnail">
								<img src={image} alt="" className="portfolio__img" height="267" />
								<div className="portfolio__mask"></div>
							</div>

							<span className="portfolio__category">{category.join(", ")}</span>
							<h3 className="portfolio__title">{title}</h3>
							<h3 className="portfolio__title1">{discription}</h3>
							<a href={url} target="_blank" rel="noreferrer" className="portfolio__button">
								<RiLink className="portfolio__button-icon" />
							</a>
							<a href={repositoryUrl} target="_blank" rel="noreferrer" className="portfolio__github-button">
								<RiGithubLine className="portfolio__button-icon" />
							</a>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
