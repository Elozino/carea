import {WalletTransaction} from '../../../types/navigation';

export const MOCK_BALANCE = 299677;

export const MOCK_TRANSACTIONS: WalletTransaction[] = [
  {
    id: '1',
    type: 'purchase',
    label: 'BMW M4 Series',
    subLabel: 'Dec 22, 2024 • 08:34 AM',
    amount: '$150,000',
    isCredit: false,
    imageKey: 'car',
    receiptData: {
      productName: 'BMW M4 Series',
      sellerPrice: '$175,000',
      bidAmount: '$150,000',
      shipping: 'Standard',
      color: 'Black',
      reference: 'TXN-BMWm4-001',
      date: 'Dec 22, 2024 • 08:34 AM',
    },
  },
  {
    id: '2',
    type: 'topup',
    label: 'Tap Up Wallet',
    subLabel: 'Dec 20, 2024 • 11:15 AM',
    amount: '$250,000',
    isCredit: true,
  },
  {
    id: '3',
    type: 'purchase',
    label: 'Ferrari Sports',
    subLabel: 'Dec 18, 2024 • 03:22 PM',
    amount: '$295,000',
    isCredit: false,
    imageKey: 'car',
    receiptData: {
      productName: 'Ferrari Sports',
      sellerPrice: '$320,000',
      bidAmount: '$295,000',
      shipping: 'Express',
      color: 'Red',
      reference: 'TXN-FERR-002',
      date: 'Dec 18, 2024 • 03:22 PM',
    },
  },
  {
    id: '4',
    type: 'purchase',
    label: 'McLaren Sports',
    subLabel: 'Dec 15, 2024 • 09:50 AM',
    amount: '$248,500',
    isCredit: false,
    imageKey: 'car',
    receiptData: {
      productName: 'McLaren Sports',
      sellerPrice: '$270,000',
      bidAmount: '$248,500',
      shipping: 'Standard',
      color: 'Orange',
      reference: 'TXN-MCL-003',
      date: 'Dec 15, 2024 • 09:50 AM',
    },
  },
  {
    id: '5',
    type: 'purchase',
    label: 'Audi Sports',
    subLabel: 'Dec 12, 2024 • 02:10 PM',
    amount: '$150,000',
    isCredit: false,
    imageKey: 'car',
    receiptData: {
      productName: 'Audi Sports',
      sellerPrice: '$165,000',
      bidAmount: '$150,000',
      shipping: 'Standard',
      color: 'White',
      reference: 'TXN-AUDI-004',
      date: 'Dec 12, 2024 • 02:10 PM',
    },
  },
  {
    id: '6',
    type: 'purchase',
    label: 'BMW Store',
    subLabel: 'Dec 10, 2024 • 06:45 AM',
    amount: '$42,000',
    isCredit: false,
    imageKey: 'car',
    receiptData: {
      productName: 'BMW Store',
      sellerPrice: '$48,000',
      bidAmount: '$42,000',
      shipping: 'Express',
      color: 'Blue',
      reference: 'TXN-BMWS-005',
      date: 'Dec 10, 2024 • 06:45 AM',
    },
  },
  {
    id: '7',
    type: 'topup',
    label: 'Tap Up Wallet',
    subLabel: 'Dec 05, 2024 • 10:30 AM',
    amount: '$79,000',
    isCredit: true,
  },
];

export type WalletPaymentOption = {
  key: 'paypal' | 'googlepay' | 'applepay' | 'card';
  label: string;
  detail?: string;
};

export const MOCK_PAYMENT_OPTIONS: WalletPaymentOption[] = [
  {key: 'paypal', label: 'PayPal', detail: 'Connected'},
  {key: 'googlepay', label: 'Google Pay', detail: 'Connected'},
  {key: 'applepay', label: 'Apple Pay', detail: 'Connected'},
  {key: 'card', label: 'Mastercard', detail: '●●●● 4679'},
];
