import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    const analyticsId = process.env.NEXT_PUBLIC_GA_ID

    return (
      <Html lang='en-GB'>
        <Head>
          <title>Haris Arshad | PMP Project Manager</title>
          <meta name="description" content="Portfolio of Haris Arshad, PMP Project Manager delivering technology programs, PMO control, Agile coordination, and measurable business outcomes." />
          <meta name="author" content="Haris Arshad" />
          <meta name="theme-color" content="#F4F0EA" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Haris Arshad | PMP Project Manager" />
          <meta property="og:description" content="Technology delivery, PMO control, and Agile coordination for complex initiatives." />
          <meta property="og:image" content="/images/haris-arshad-profile.jpeg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Haris Arshad | PMP Project Manager" />
          <meta name="twitter:description" content="Technology delivery, PMO control, and Agile coordination for complex initiatives." />
          <meta name="twitter:image" content="/images/haris-arshad-profile.jpeg" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet"/>
          {analyticsId && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${analyticsId}', { anonymize_ip: true });`,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}