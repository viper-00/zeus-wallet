import Header from 'components/Common/Header';
import SidebarWithHeader from 'components/Navigation/Sidebar';
import TransactionsPage from '../TransactionsPage';

const Transactions = () => {
  return (
    <>
      <Header pageName="transactions">
        <SidebarWithHeader>
          <TransactionsPage />
        </SidebarWithHeader>
      </Header>
    </>
  );
};

export default Transactions;
