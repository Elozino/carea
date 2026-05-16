import {SavedAddress} from '../../../types/navigation';

export type UserProfile = {
  name: string;
  nickname: string;
  phone: string;
  email: string;
  gender: string;
  dob: string;
};

export const MOCK_USER: UserProfile = {
  name: 'Andrew Ainsley',
  nickname: 'andrew.ainsley',
  phone: '+1 111 467 378 399',
  email: 'andrew_ainsley@yourdomain.com',
  gender: 'Male',
  dob: 'December 17, 1995',
};

export const MOCK_ADDRESSES: SavedAddress[] = [
  {
    id: '1',
    name: "Name's House",
    apartment: 'Apt 546',
    address: '346 Tech Square, Cambridge, MA 02139',
    details: 'Near the main entrance',
    notes: 'Leave at door',
  },
  {
    id: '2',
    name: 'Work Office',
    apartment: 'Suite 200',
    address: '100 Innovation Drive, Boston, MA 02110',
    details: 'Reception desk',
    notes: 'Call on arrival',
  },
];

export type NotificationPrefs = {
  general: boolean;
  sound: boolean;
  vibrate: boolean;
  specialOffers: boolean;
  promoAndDiscount: boolean;
  payment: boolean;
  appUpdates: boolean;
  newService: boolean;
  newTips: boolean;
};

export const MOCK_NOTIFICATION_PREFS: NotificationPrefs = {
  general: true,
  sound: true,
  vibrate: false,
  specialOffers: true,
  promoAndDiscount: false,
  payment: true,
  appUpdates: true,
  newService: false,
  newTips: true,
};

export type Language = {id: string; label: string; selected: boolean};

export const MOCK_LANGUAGES: Language[] = [
  {id: 'ro', label: 'Romanian', selected: true},
  {id: 'en_us', label: 'English US', selected: false},
  {id: 'en_uk', label: 'English UK', selected: false},
  {id: 'el', label: 'Greek', selected: false},
  {id: 'hi', label: 'Hindi', selected: false},
  {id: 'bn', label: 'Bengali', selected: false},
  {id: 'zh', label: 'Chinese (Simplified)', selected: false},
  {id: 'id', label: 'Indonesian', selected: false},
];

export type FaqItem = {
  id: string;
  category: 'Account' | 'Report' | 'Others';
  question: string;
  answer: string;
};

export const MOCK_FAQ: FaqItem[] = [
  {
    id: '1',
    category: 'Account',
    question: 'How do I cancel an order?',
    answer:
      'Go to your Orders screen, select the order you wish to cancel, and tap "Cancel Order". Cancellations are only available within 24 hours of placing the order.',
  },
  {
    id: '2',
    category: 'Account',
    question: 'How do I reset my account?',
    answer:
      'Contact our customer support team via the Help Center to request an account reset. We may require identity verification.',
  },
  {
    id: '3',
    category: 'Account',
    question: 'How to redeem a voucher?',
    answer:
      'During checkout, tap "Apply Voucher" and enter your voucher code. The discount will be applied automatically.',
  },
  {
    id: '4',
    category: 'Account',
    question: "Why can't I make a payment?",
    answer:
      'Ensure your payment method is valid and has sufficient funds. If the issue persists, contact your bank or try a different payment method.',
  },
  {
    id: '5',
    category: 'Report',
    question: 'How do I report a seller?',
    answer:
      'On the product page, tap the flag icon next to the seller name and follow the prompts to submit a report.',
  },
  {
    id: '6',
    category: 'Report',
    question: 'How do I report a fraudulent listing?',
    answer:
      'Use the "Report Listing" option on any product page. Our moderation team reviews all reports within 48 hours.',
  },
  {
    id: '7',
    category: 'Others',
    question: 'How do I change my language?',
    answer: 'Go to Profile → Language and select your preferred language.',
  },
  {
    id: '8',
    category: 'Others',
    question: 'How do I invite friends?',
    answer:
      'Go to Profile → Invite Friends, find your contact, and tap "Invite" to send them a referral link.',
  },
];

export type Contact = {
  id: string;
  name: string;
  initials: string;
  invited: boolean;
};

export const MOCK_CONTACTS: Contact[] = [
  {id: '1', name: 'Tamika Diaz', initials: 'TD', invited: false},
  {id: '2', name: 'Rebecca Garrison', initials: 'RG', invited: false},
  {id: '3', name: 'Chanel Bellamy', initials: 'CB', invited: false},
  {id: '4', name: 'Michael Whitby', initials: 'MW', invited: true},
  {id: '5', name: 'Andrea Jones', initials: 'AJ', invited: false},
  {id: '6', name: 'Benny Sanderson', initials: 'BS', invited: false},
  {id: '7', name: 'Tara Miller', initials: 'TM', invited: true},
  {id: '8', name: 'Ahmed Goodwin', initials: 'AG', invited: false},
  {id: '9', name: 'Patio Russell', initials: 'PR', invited: false},
  {id: '10', name: 'Christian Mackay', initials: 'CM', invited: false},
  {id: '11', name: 'Yara Miller', initials: 'YM', invited: false},
  {id: '12', name: 'Peter Round', initials: 'PR', invited: false},
];

export const PRIVACY_POLICY_SECTIONS = [
  {
    id: '1',
    title: '1. Types of Data We Collect',
    body: 'We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This includes your name, email address, phone number, billing information, and any other information you choose to provide.\n\nWe also collect information automatically when you use our services, including log data, device information, usage data, and location information.',
  },
  {
    id: '2',
    title: '2. Use of Your Personal Data',
    body: 'We use the information we collect to provide, maintain, and improve our services, to process transactions, to send you technical notices and support messages, and to respond to your comments and questions.\n\nWe may also use the information to send you promotional communications, subject to your preferences, and to monitor and analyze trends, usage, and activities in connection with our services.',
  },
  {
    id: '3',
    title: '3. Disclosure of Your Personal Data',
    body: 'We may share your personal information with third-party vendors and service providers that perform services on our behalf, such as payment processing, data analysis, email delivery, and customer service.\n\nWe may also disclose your information if we believe disclosure is in accordance with, or required by, any applicable law or legal process, including lawful requests by public authorities to meet national security or law enforcement requirements.',
  },
];
