import React from "react";
import Fade from "react-reveal/Fade";

import Container from "common/components/UI/ContainerTwo";
import Link from "common/components/Link";
import {
	Section,
	FooterTop,
	FooterWidget,
	FooterBottom,
	Copyright,
	FooterNav,
} from "./footer.style";
import data from "common/data/AgencyFormal";
import logo from "common/assets/image/AgencyFormal/logo.png";

const Footer = () => {
	return (
		<Section id="about">
			<Container>
				<FooterTop>
					{data.footer.map((item) => (
						<Fade key={item.id} up delay={100 * item.id}>
							<FooterWidget key={item.id}>
								<h4>{item.title}</h4>
								<ul>
									{item.list.map((item) => (
										<li className="widgetListItem" key={item.id}>
											<Link href={item.link}>{item.title}</Link>
										</li>
									))}
								</ul>
							</FooterWidget>
						</Fade>
					))}
				</FooterTop>
				<FooterBottom>
					<Copyright>
						<img src={logo?.src} alt="Agency Digital" />
						Copyright &copy; {new Date().getFullYear()} by Redq, Inc
					</Copyright>
					<FooterNav>
						{data.footerNav.map((item) => (
							<li key={item.id}>{item.title}</li>
						))}
					</FooterNav>
				</FooterBottom>
			</Container>
		</Section>
	);
};

export default Footer;
