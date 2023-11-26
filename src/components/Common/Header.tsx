import Head from 'next/head';
import { FC, ReactNode } from 'react';

const Header: FC<{ children: ReactNode; pageName: string }> = ({ children, pageName }) => (
  <>
    <Head>
      <title>{`${pageName} | ETH`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {/* <Container as="main" minW={"100%"}> */}
    {children}
    {/* </Container> */}
    {/* <Footer /> */}
  </>
);

export default Header;
