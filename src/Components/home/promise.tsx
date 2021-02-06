import Image from "next/image";
import Link from "next/link";
import {
	FaAccessibleIcon,
	FaCheckCircle,
	FaWrench,
	FaYoast,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

import { Button } from "./cards";

const Section = styled.section`
	box-sizing: border-box;
	padding-bottom: 50px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	z-index: 2000;
	background-color: white;
	& div {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
`;

const StyledTextDiv = styled.div`
	max-width: 400px;
	margin: 20px;
	display: flex;
	flex-direction: column;
	text-align: left;
	h1 {
		text-align: right;
		font-size: 40px;
		margin: 0;
	}
	p {
		font-size: 20px;
	}
`;

const StyledCard = styled.div`
	width: 90%;
	max-width: 450px;
	width: 90%;
	box-sizing: border-box;
	padding-left: 70px;
	margin: 40px 20px;
	display: flex;
	flex-direction: column;
	position: relative;
	.card-img {
		position: absolute;
		left: 0;
		top: 0;
	}
	h2 {
		text-transform: uppercase;
		margin-bottom: 0;
	}
	p {
		font-size: 20px;
	}
	button svg {
		margin-left: 10px;
		transition: transform ease-in-out 0.3s;
	}
	:hover button svg {
		transform: translateX(10px);
	}
`;
const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	text-align: left;
	max-width: 1200px;
	margin: auto;
`;

function Img() {
	return (
		<FaWrench color="var(--secondary)" size="40px" className="card-img" />
	);
}
function Img2() {
	return (
		<FaAccessibleIcon
			color="var(--secondary)"
			size="40px"
			className="card-img"
		/>
	);
}
function Img3() {
	return (
		<FaCheckCircle
			color="var(--secondary)"
			size="40px"
			className="card-img"
		/>
	);
}
function Img4() {
	return (
		<FaYoast color="var(--secondary)" size="40px" className="card-img" />
	);
}

function Card(Props: {
	Image: Function;
	title: string;
	text: string;
	link: string;
}) {
	return (
		<StyledCard>
			<Props.Image />
			<h2>{Props.title}</h2>
			<p>{Props.text}</p>
			<Link href={Props.link}>
				<Button aria-label={`${Props.title} Article`}>
					Learn more <IoIosArrowForward />
				</Button>
			</Link>
		</StyledCard>
	);
}

// eslint-disable-next-line import/no-default-export
export default function Promise(): JSX.Element {
	return (
		<Section>
			<div>
				<StyledTextDiv>
					<h1>FOR HAZIMOS!</h1>
					<p>
						Here at Valley Construction Supply we believe that the
						construction industry is a relationship business and
						that our customers deserve personalized, hands-on
						customer service that serves them beyond their
						construction material needs
					</p>
				</StyledTextDiv>
				<Image
					alt=""
					src="/Images/IMG_7230.png"
					height={288}
					width={384}
				/>
			</div>
			<CardContainer>
				<Card
					link="/"
					Image={Img}
					title="for hazimos"
					text="Valley Construction Supply continually offers promotions. Check out our promotions page for our current specials"
				/>
				<Card
					link="/"
					Image={Img2}
					title="for hazimos"
					text="Valley Construction Supply continually offers promotions. Check out our promotions page for our current specials"
				/>
				<Card
					link="/"
					Image={Img3}
					title="for hazimos"
					text="Valley Construction Supply continually offers promotions. Check out our promotions page for our current specials"
				/>
				<Card
					link="/"
					Image={Img4}
					title="for hazimos"
					text="Valley Construction Supply continually offers promotions. Check out our promotions page for our current specials"
				/>
			</CardContainer>
		</Section>
	);
}