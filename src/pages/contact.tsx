import { Span, StyledButton } from "@styles/index.theme";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { FaMailBulk, FaMobile } from "react-icons/fa";
import styled from "styled-components";

import { COMPANY_INFO } from "../config";

const StyledOutside = styled.div`
	padding: 100px 0;
	background-color: white;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;
const Input = styled.input`
	box-sizing: border-box;
	::placeholder {
		color: black;
	}
`;
const Textarea = styled.textarea`
	resize: vertical;
	min-height: 100px;
	max-height: 300px;
`;
const StyledForm = styled.form`
	margin: 0 100px;
	width: 90%;
	max-width: 400px;
	display: flex;
	flex-direction: column;
	text-align: left;
	border-radius: 15px;
	input,
	textarea {
		background-color: var(--contact);
		color: var(--text);
		padding: 13px;
		border-radius: 5px;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 18px;
		margin: 20px 0;
		::placeholder {
			color: black;
		}
	}
`;
const StyledTitle = styled.h2`
	font-size: 32px;
	font-weight: 500;
	font-family: var(--font-title);
`;
const StyledDivs = styled.div`
	display: flex;
	flex-direction: column;
`;
const ContactInfoDiv = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
	margin-top: 30px;
	div {
		width: 300px;
	}
`;
// eslint-disable-next-line import/no-default-export
export default function Contact(): JSX.Element {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	function handleSubmit() {
		// eslint-disable-next-line no-void
		void axios.post("/api/email", {
			name,
			phone,
			email,
			subject,
			message,
		});
	}

	return (
		<StyledOutside id="contact">
			<StyledForm onSubmit={handleSubmit}>
				<StyledTitle>
					Contact <Span>Us</Span>
				</StyledTitle>
				<Input
					aria-label="Name"
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
					type="text"
					placeholder="Name *"
				/>
				<Input
					aria-label="Phone Number"
					value={phone}
					onChange={(e) => {
						setPhone(e.target.value);
					}}
					type="tel"
					className="input"
					placeholder="Phone *"
				/>
				<Input
					aria-label="email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					type="email"
					placeholder="Email *"
				/>
				<Input
					aria-label="Subject"
					value={subject}
					onChange={(e) => {
						setSubject(e.target.value);
					}}
					type="text"
					placeholder="Subject *"
				/>
				<Textarea
					aria-label="Message"
					value={message}
					onChange={(e) => {
						setMessage(e.target.value);
					}}
					className="input"
					placeholder="Message *"
				/>
				<StyledButton aria-label="Submit">Submit</StyledButton>
			</StyledForm>
			<StyledDivs>
				<ContactInfoDiv>
					<div>
						<FaMailBulk color="var(--secondary)" size="70px" />
						<a
							href={`mailto:${COMPANY_INFO.email}`}
							target="_blank"
							rel="noreferrer"
						>
							<h3>{COMPANY_INFO.email}</h3>
						</a>
					</div>
					<div>
						<FaMobile color="var(--secondary)" size="70px" />
						<a
							href={`tel:+1${COMPANY_INFO.phone}`}
							target="_blank"
							rel="noreferrer"
						>
							<h3>{COMPANY_INFO.phone}</h3>
						</a>
					</div>
				</ContactInfoDiv>
				<Image
					alt=""
					layout="intrinsic"
					src="/contact.png"
					width={600}
					height={600}
				/>
			</StyledDivs>
		</StyledOutside>
	);
}
