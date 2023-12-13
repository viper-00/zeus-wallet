import Header from 'components/Common/Header';
import SidebarWithHeader from 'components/Navigation/Sidebar';
import SwapPage from '../SwapPage';

const Swap = () => {
  return (
    <>
      <Header pageName="swap">
        <SidebarWithHeader>
          <SwapPage />
        </SidebarWithHeader>
      </Header>
    </>
  );
};

export default Swap;
