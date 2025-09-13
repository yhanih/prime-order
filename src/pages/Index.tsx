import { AppShell } from '@/components/layout/AppShell';
import { OrderListPage } from '@/components/orders/OrderListPage';

const Index = () => {
  return (
    <AppShell>
      <OrderListPage />
    </AppShell>
  );
};

export default Index;
