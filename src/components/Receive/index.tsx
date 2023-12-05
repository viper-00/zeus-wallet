import Header from 'components/Common/Header';
import SidebarWithHeader from 'components/Navigation/Sidebar';
import ReceivePage from '../ReceivePage';

const Receive = () => {
  return (
    <>
      <Header pageName="transactions">
        <SidebarWithHeader>
          <ReceivePage />
        </SidebarWithHeader>
      </Header>
    </>
  );
};

export default Receive;
