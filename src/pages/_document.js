import { GA_TRACKING_ID } from "@src/config.ts";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
// eslint-disable-next-line import/no-default-export
export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
	render() {
		return (
			<Html lang="en-us">
				<Head>
					<meta
						name="description"
						content="Gym"
					/>

					<meta
						itemProp="name"
						content="Nevada Volleyball Center"
					/>
					<meta
						itemProp="description"
						content="Gym"
					/>
					<meta itemProp="image" content="/logo.png" />

					<meta
						property="og:url"
						content="https://nevadavolleyballcenter.com"
					/>
					<meta property="og:type" content="website" />
					<meta
						property="og:title"
						content="Nevada Volleyball Center"
					/>
					<meta
						property="og:description"
						content="Gym"
					/>
					<meta property="og:image" content="/logo.png" />

					<meta name="twitter:card" content="summary_large_image" />
					<meta
						name="twitter:title"
						content="Nevada Volleyball Center"
					/>
					<meta
						name="twitter:description"
						content="Gym"
					/>
					<meta name="twitter:image" content="/logo.png" />

					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
					/>
					<script
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{
							__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
						}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
