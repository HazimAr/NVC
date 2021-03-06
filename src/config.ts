// google analytics measurement id
const GA_TRACKING_ID = "G-15J1PR03V7";
const IS_PRODUCTION = process.env.NODE_ENV === "production";
const IS_TEST = process.env.NODE_ENV === "test";
const IS_BROWSER = typeof window !== "undefined";

const COMPANY_INFO = {
	name: "Nevada Volleyball Center",
	email: "NevadaVolleyballCenter@gmail.com",
	phone: "702-665-6069",
	address1: "3778 W. Cheyenne Ave STE 120, ",
	address2: "N. Las Vegas, NV 8903",
};
const EMAIL_LIST =
	"hazimarafa69@gmail.com, sparksvolleyballclub@gmail.com, nevadavolleyballcenter@gmail.com";

const COMPANY_SOCIALS = {
	instagram: "https://www.instagram.com/nevadavolleyball/",
	facebook:
		"https://www.facebook.com/Nevada-Volleyball-Center-100180091957646/",
};

export const headerOptions = [
	["Home", "/#"],
	["Court Rentals", "/rentals"],
	["Events", "/events"],
	["Sponsors", "/sponsors"],
	["Covid-19", "/covid"],
	["Contact Us", "/contact"],
];

export {
	COMPANY_SOCIALS,
	GA_TRACKING_ID,
	IS_PRODUCTION,
	IS_TEST,
	IS_BROWSER,
	COMPANY_INFO,
	EMAIL_LIST,
};
