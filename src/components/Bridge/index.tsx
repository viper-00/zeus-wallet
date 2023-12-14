import Header from 'components/Common/Header';
import SidebarWithHeader from 'components/Navigation/Sidebar';
import BridgePage from '../BridgePage';

const Bridge = () => {
  return (
    <>
      <Header pageName="bridge">
        <SidebarWithHeader>
          <BridgePage />
        </SidebarWithHeader>
      </Header>
    </>
  );
};

export default Bridge;
