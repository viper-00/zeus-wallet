import Header from 'components/Common/Header';
import SidebarWithHeader from 'components/Navigation/Sidebar';
import { usePathname } from 'next/navigation';
import WalletPage from '../Wallet';

const Portfolio = () => {
  const path = usePathname();
  return (
    <>
      <Header pageName="portfolio">
        <SidebarWithHeader>{path === '/portfolio' && <WalletPage />}</SidebarWithHeader>
      </Header>
    </>
  );
};

export default Portfolio;
