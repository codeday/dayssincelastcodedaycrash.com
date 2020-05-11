import { DefaultSeo } from 'next-seo';
import Box from '@codeday/topo/Atom/Box';
import Header, { SiteLogo } from '@codeday/topo/Organism/Header';
import Footer from '@codeday/topo/Organism/Footer';
import { CodeDay } from '@codeday/topo/Atom/Logo';

// TODO: Set production domain
const DOMAIN = 'https://dayssincelastcodedaycrash.com';

export default ({ children, title, darkHeader, slug }) => (
  <>
    <DefaultSeo
      title={title}
      description="How many days since the last CodeDay crash?"
      canonical={`${DOMAIN}${slug}`}
      openGraph={{
        type: 'website',
        locale: 'en_US',
        site_name: 'dayssincelastcodedaycrash',
        url: `${DOMAIN}${slug}`,
      }}
      twitter={{
        handle: '@codeday',
        site: '@codeday',
        cardType: 'summary_large_image',
      }}
    />
    <Box position="relative">
      <Header darkBackground={darkHeader} gradAmount={darkHeader && 'lg'} underscore position="relative" zIndex={1000}>
        <SiteLogo>
          <a href="/">
            <CodeDay withText />
          </a>
        </SiteLogo>
      </Header>
      {children}
      <Footer />
    </Box>
  </>
);