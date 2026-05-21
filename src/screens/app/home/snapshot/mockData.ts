import {
  SnapshotCheckoutDraft,
  SnapshotProductContext,
} from '../../../../types/navigation';

export const createInitialDraft = (
  context: SnapshotProductContext,
): SnapshotCheckoutDraft => ({
  productName: context.productName,
  price: context.price,
  offerAmount: '170000',
  offerStatus: 'draft',
  bidAttempts: 0,
  lastCounterBid: '',
  shippingMethod: 'standard',
  shippingAddress: '',
  city: '',
  postalCode: '',
  paymentMethod: 'bank',
  cardHolder: '',
  cardNumber: '',
  expiryDate: '',
  cvv: '',
  pin: '',
});

export const formatCurrency = (raw: string) => {
  if (!raw.length) {
    return '$0';
  }

  const numeric = Number(raw);
  if (Number.isNaN(numeric)) {
    return '$0';
  }

  return `$${numeric.toLocaleString('en-US')}`;
};

export const parseCurrency = (raw: string) => {
  const numeric = Number(raw.replace(/[^\d]/g, ''));
  return Number.isNaN(numeric) ? 0 : numeric;
};

export const evaluateBid = ({
  bidAmount,
  sellerPrice,
  attempt,
}: {
  bidAmount: number;
  sellerPrice: number;
  attempt: number;
}) => {
  const floorThreshold = Math.round(sellerPrice * 0.94);
  const targetThreshold = Math.round(sellerPrice * 0.97);
  const adaptiveThreshold = Math.max(
    floorThreshold,
    targetThreshold - (attempt - 1) * 1500,
  );

  const accepted = bidAmount >= adaptiveThreshold;
  const counterBid = Math.max(
    adaptiveThreshold,
    Math.round((bidAmount + sellerPrice) / 2),
  );

  return {
    accepted,
    counterBid,
    threshold: adaptiveThreshold,
  };
};
