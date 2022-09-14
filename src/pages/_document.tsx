import { Html, Head, Main, NextScript } from 'next/document'

export default function _document() {
  return (
    <Html lang="en">
      <Head>
        <title>1v1</title>
        <link rel="manifest" href="manifest.json" />
        <link rel="apple-touch-icon" href="logo.png" />
        <link rel="apple-touch-icon" sizes="72×72" href="logo.png" />
        <link rel="apple-touch-icon" sizes="114×114" href="logo.png" />
        <meta
          name="description"
          content="Aplikacja do liczenia punktów i rywalizacji z przyjaciułmi."
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
