/* eslint-env node */
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './documentation.css'

export const metadata = {
  metadataBase: new URL('https://nextra.site'),
  title: {
    template: '%s'
  },
  description: 'Nextra: the Next.js site builder',
  applicationName: 'Nextra',
  generator: 'Next.js',
  appleWebApp: {
    title: 'Nextra'
  },
  other: {
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'msapplication-TileColor': '#fff'
  },
  twitter: {
    site: 'https://nextra.site'
  }
}

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <div>
          <b>Welsh</b>{' '}
          <span style={{ opacity: '60%' }}>Street</span>
        </div>
      }
      logoLink="/"  // Custom logo link
      // Next.js discord server
      chatLink="https://discord.gg/MRbsmVxZWj"
    />
  )
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦" />
      <body>
        <Layout
          banner={<Banner storageKey="exchangeBanner">The Exchange is Live</Banner>}
          copyPageButton={false}
          docsRepositoryBase="https://github.com/enjoywithouthey/welsh-street-documentation/tree/main"
          editLink="View on GitHub"
          feedback={{ content:"Contribute" }}
          footer={<Footer className="custom-footer" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', textAlign: 'center', padding: '0', margin: '0'}}>
            <a href="https://github.com/enjoywithouthey" target="_blank" rel="noopener" className="footer-link">Made with 🧡 by @enjoywithouthey</a></Footer>}
          navbar={navbar}
          pageMap={pageMap}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
