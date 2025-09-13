// Mock data for Order Management Dashboard
export interface Order {
  id: string;
  productName: string;
  productCategory: string;
  customerName: string;
  customerAvatar: string;
  orderId: string;
  amount: number;
  paymentMethod: string;
  status: 'Confirm' | 'Cancel' | 'warning';
  createdDate: string;
}

export const mockOrders: Order[] = [
  {
    id: '1',
    productName: 'i phone',
    productCategory: 'Electric product',
    customerName: 'Mst. Ratna',
    customerAvatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Mst.Ratna',
    orderId: '# 01703044243',
    amount: 99,
    paymentMethod: 'cash on delivery',
    status: 'Confirm',
    createdDate: 'Jan 01, 2025'
  },
  {
    id: '2',
    productName: 'i phone',
    productCategory: 'Electric product',
    customerName: 'Flores, Juanita',
    customerAvatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Flores.Juanita',
    orderId: '# 01703044243',
    amount: 77,
    paymentMethod: 'cash on delivery',
    status: 'Confirm',
    createdDate: 'Jan 01, 2025'
  },
  {
    id: '3',
    productName: 'i phone',
    productCategory: 'Electric product',
    customerName: 'Henry, Arthur',
    customerAvatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Henry.Arthur',
    orderId: '# 01703044243',
    amount: 49,
    paymentMethod: 'cash on delivery',
    status: 'Cancel',
    createdDate: 'Jan 01, 2025'
  },
  {
    id: '4',
    productName: 'i phone',
    productCategory: 'Electric product',
    customerName: 'Miles, Esther',
    customerAvatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Miles.Esther',
    orderId: '# 01703044243',
    amount: 90,
    paymentMethod: 'cash on delivery',
    status: 'Cancel',
    createdDate: 'Jan 01, 2025'
  },
  {
    id: '5',
    productName: 'i phone',
    productCategory: 'Electric product',
    customerName: 'Black, Marvin',
    customerAvatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Black.Marvin',
    orderId: '# 01703044243',
    amount: 99,
    paymentMethod: 'cash on delivery',
    status: 'warning',
    createdDate: 'Jan 01, 2025'
  },
  {
    id: '6',
    productName: 'i phone',
    productCategory: 'Electric product',
    customerName: 'Nguyen, Shane',
    customerAvatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Nguyen.Shane',
    orderId: '# 01703044243',
    amount: 88,
    paymentMethod: 'cash on delivery',
    status: 'Confirm',
    createdDate: 'Jan 01, 2025'
  },
  {
    id: '7',
    productName: 'i phone',
    productCategory: 'Electric product',
    customerName: 'Miles, Esther',
    customerAvatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Miles.Esther2',
    orderId: '# 01703044243',
    amount: 90,
    paymentMethod: 'cash on delivery',
    status: 'Confirm',
    createdDate: 'Jan 01, 2025'
  },
  {
    id: '8',
    productName: 'i phone',
    productCategory: 'Electric product',
    customerName: 'Black, Marvin',
    customerAvatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Black.Marvin2',
    orderId: '# 01703044243',
    amount: 99,
    paymentMethod: 'cash on delivery',
    status: 'warning',
    createdDate: 'Jan 01, 2025'
  }
];

export const kpiData = {
  totalOrders: '3,922',
  newOrders: '9,98',
  completedOrders: '2,899',
  cancelledOrders: '5,00'
};