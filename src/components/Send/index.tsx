import Header from 'components/Common/Header';
import SidebarWithHeader from 'components/Navigation/Sidebar';
import SendPage from '../SendPage';

const Receive = () => {
  return (
    <>
      <Header pageName="transactions">
        <SidebarWithHeader>
          <SendPage />
        </SidebarWithHeader>
      </Header>
    </>
  );
};

export default Receive;
