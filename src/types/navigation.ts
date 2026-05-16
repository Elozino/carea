export type SnapshotProductContext = {
  productName: string;
  price: string;
};

export type SnapshotCheckoutDraft = {
  productName: string;
  price: string;
  offerAmount: string;
  offerStatus: 'draft' | 'pending' | 'declined' | 'accepted';
  bidAttempts: number;
  lastCounterBid: string;
  shippingMethod: 'standard' | 'express';
  shippingAddress: string;
  city: string;
  postalCode: string;
  paymentMethod: 'bank' | 'paypal' | 'google';
  cardHolder: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  pin: string;
};

export type AuthStackParams = {
  GET_STARTED: undefined;
  WELCOME: undefined;
  AUTH: undefined;
  LOGIN: undefined;
  CREATE_ACCOUNT: undefined;
  PROFILE_FORM: undefined;
  APP: undefined;
};

export type HomeStackParams = {
  HOME: undefined;
  NOTIFICATION: undefined;
  WISH_LIST: undefined;
  SEARCH_PRODUCT: undefined;
  SPECIAL_OFFER: undefined;
  TOP_DEALS: undefined;
  PRODUCT_DETAILS: undefined;
  CHAT: undefined;
  CALL: undefined;
  SNAPSHOT_INBOX: SnapshotProductContext | undefined;
  SNAPSHOT_CHAT: SnapshotProductContext;
  SNAPSHOT_OFFER: SnapshotProductContext;
  SNAPSHOT_SHIPPING: {draft: SnapshotCheckoutDraft};
  SNAPSHOT_PAYMENT: {draft: SnapshotCheckoutDraft};
  SNAPSHOT_REVIEW: {draft: SnapshotCheckoutDraft};
  SNAPSHOT_PIN: {draft: SnapshotCheckoutDraft};
  SNAPSHOT_SUCCESS: {draft: SnapshotCheckoutDraft};
};

export type RootStackParams = {
  Auth: undefined;
  GetStarted: undefined;
  Welcome: undefined;
};

export type WalletPaymentMethod = 'paypal' | 'googlepay' | 'applepay' | 'card';

export type WalletReceiptData = {
  productName: string;
  sellerPrice: string;
  bidAmount: string;
  shipping: string;
  color: string;
  reference: string;
  date: string;
};

export type WalletTransaction = {
  id: string;
  type: 'topup' | 'purchase';
  label: string;
  subLabel: string;
  amount: string;
  isCredit: boolean;
  imageKey?: string;
  receiptData?: WalletReceiptData;
};

export type SavedAddress = {
  id: string;
  name: string;
  apartment: string;
  address: string;
  details: string;
  notes: string;
};

export type BottomStackParams = {};

export type ProfileStackParams = {
  PROFILE: undefined;
  EDIT_PROFILE: undefined;
  ADDRESS_LIST: undefined;
  ADD_ADDRESS: undefined;
  NOTIFICATION_SETTINGS: undefined;
  PAYMENT_METHODS: undefined;
  ADD_CARD: undefined;
  SECURITY_SETTINGS: undefined;
  LANGUAGE_SETTINGS: undefined;
  PRIVACY_POLICY: undefined;
  INVITE_FRIENDS: undefined;
  HELP_CENTER: undefined;
  HELP_CENTER_CHANNELS: undefined;
  CUSTOMER_SERVICE_CHAT: undefined;
};

export type OrderStackParams = {
  ORDERS: undefined;
  TRACK_ORDER: undefined;
};

export type WalletStackParams = {
  WALLET: undefined;
  WALLET_TOP_UP_AMOUNT: undefined;
  WALLET_TOP_UP_METHOD: {amount: string};
  WALLET_TOP_UP_PIN: {amount: string; method: WalletPaymentMethod};
  WALLET_TOP_UP_SUCCESS: {amount: string};
  WALLET_TRANSACTIONS: undefined;
  WALLET_RECEIPT: {transaction: WalletTransaction};
  ADD_CARD: undefined;
};

export type InboxStackParams = {
  CHAT: undefined;
  CALL: undefined;
};
