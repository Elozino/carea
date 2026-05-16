import {ROUTES} from '../constants/enums';
import {SnapshotCheckoutDraft, WalletTransaction} from '../types/navigation';

const encodeJsonParam = (value: unknown) =>
  encodeURIComponent(JSON.stringify(value));

const decodeJsonParam = <T>(value: string | undefined) => {
  if (!value) {
    return undefined;
  }

  try {
    return JSON.parse(decodeURIComponent(value)) as T;
  } catch {
    return undefined;
  }
};

const linking = {
  prefixes: ['carea://'],
  config: {
    screens: {
      [ROUTES.WELCOME]: 'welcome',
      [ROUTES.GET_STARTED]: 'get-started',
      [ROUTES.AUTH]: 'auth',
      [ROUTES.LOGIN]: 'login',
      [ROUTES.CREATE_ACCOUNT]: 'create-account',
      [ROUTES.PROFILE_FORM]: 'profile-form',
      [ROUTES.APP]: {
        path: '',
        screens: {
          Home: {
            path: 'home',
            screens: {
              [ROUTES.HOME]: '',
              [ROUTES.NOTIFICATION]: 'notification',
              [ROUTES.WISH_LIST]: 'wish-list',
              [ROUTES.SEARCH_PRODUCT]: 'search-product',
              [ROUTES.SPECIAL_OFFER]: 'special-offer',
              [ROUTES.TOP_DEALS]: 'top-deals',
              [ROUTES.PRODUCT_DETAILS]: 'product/:id?',
              [ROUTES.CHAT]: 'chat',
              [ROUTES.CALL]: 'call',
              [ROUTES.SNAPSHOT_INBOX]: 'snapshot-inbox',
              [ROUTES.SNAPSHOT_CHAT]: 'snapshot-chat',
              [ROUTES.SNAPSHOT_OFFER]: 'snapshot-offer',
              [ROUTES.SNAPSHOT_SHIPPING]: {
                path: 'snapshot-shipping',
                parse: {
                  draft: (value: string) =>
                    decodeJsonParam<SnapshotCheckoutDraft>(value),
                },
                stringify: {
                  draft: (value: SnapshotCheckoutDraft) =>
                    encodeJsonParam(value),
                },
              },
              [ROUTES.SNAPSHOT_PAYMENT]: {
                path: 'snapshot-payment',
                parse: {
                  draft: (value: string) =>
                    decodeJsonParam<SnapshotCheckoutDraft>(value),
                },
                stringify: {
                  draft: (value: SnapshotCheckoutDraft) =>
                    encodeJsonParam(value),
                },
              },
              [ROUTES.SNAPSHOT_REVIEW]: {
                path: 'snapshot-review',
                parse: {
                  draft: (value: string) =>
                    decodeJsonParam<SnapshotCheckoutDraft>(value),
                },
                stringify: {
                  draft: (value: SnapshotCheckoutDraft) =>
                    encodeJsonParam(value),
                },
              },
              [ROUTES.SNAPSHOT_PIN]: {
                path: 'snapshot-pin',
                parse: {
                  draft: (value: string) =>
                    decodeJsonParam<SnapshotCheckoutDraft>(value),
                },
                stringify: {
                  draft: (value: SnapshotCheckoutDraft) =>
                    encodeJsonParam(value),
                },
              },
              [ROUTES.SNAPSHOT_SUCCESS]: {
                path: 'snapshot-success',
                parse: {
                  draft: (value: string) =>
                    decodeJsonParam<SnapshotCheckoutDraft>(value),
                },
                stringify: {
                  draft: (value: SnapshotCheckoutDraft) =>
                    encodeJsonParam(value),
                },
              },
            },
          },
          Orders: {
            path: 'orders',
            screens: {
              [ROUTES.ORDERS]: '',
              [ROUTES.TRACK_ORDER]: 'track-order',
            },
          },
          Inbox: {
            path: 'inbox',
            screens: {
              [ROUTES.HOME]: '',
              [ROUTES.CHAT]: 'chat',
              [ROUTES.CALL]: 'call',
            },
          },
          Wallet: {
            path: 'wallet',
            screens: {
              [ROUTES.WALLET]: '',
              [ROUTES.WALLET_TOP_UP_AMOUNT]: 'top-up-amount',
              [ROUTES.WALLET_TOP_UP_METHOD]: 'top-up-method',
              [ROUTES.WALLET_TOP_UP_PIN]: 'top-up-pin',
              [ROUTES.WALLET_TOP_UP_SUCCESS]: 'top-up-success',
              [ROUTES.WALLET_TRANSACTIONS]: 'transactions',
              [ROUTES.WALLET_RECEIPT]: {
                path: 'receipt',
                parse: {
                  transaction: (value: string) =>
                    decodeJsonParam<WalletTransaction>(value),
                },
                stringify: {
                  transaction: (value: WalletTransaction) =>
                    encodeJsonParam(value),
                },
              },
              [ROUTES.ADD_CARD]: 'add-card',
            },
          },
          Profile: {
            path: 'profile',
            screens: {
              [ROUTES.PROFILE]: '',
              [ROUTES.EDIT_PROFILE]: 'edit-profile',
              [ROUTES.ADDRESS_LIST]: 'address-list',
              [ROUTES.ADD_ADDRESS]: 'add-address',
              [ROUTES.NOTIFICATION_SETTINGS]: 'notification-settings',
              [ROUTES.PAYMENT_METHODS]: 'payment-methods',
              [ROUTES.ADD_CARD]: 'add-card',
              [ROUTES.SECURITY_SETTINGS]: 'security-settings',
              [ROUTES.LANGUAGE_SETTINGS]: 'language-settings',
              [ROUTES.PRIVACY_POLICY]: 'privacy-policy',
              [ROUTES.INVITE_FRIENDS]: 'invite-friends',
              [ROUTES.HELP_CENTER]: 'help-center',
              [ROUTES.HELP_CENTER_CHANNELS]: 'help-center-channels',
              [ROUTES.CUSTOMER_SERVICE_CHAT]: 'customer-service-chat',
            },
          },
        },
      },
      ZegoUIKitPrebuiltCallWaitingScreen: 'zego/waiting',
      ZegoUIKitPrebuiltCallInCallScreen: 'zego/in-call',
    },
  },
};

export default linking;
