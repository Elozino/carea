import {ImageProps} from 'react-native';

interface Images {
  [x: string]: ImageProps;
}

export const IMAGES: Images = {
  onboarding: require('../assets/images/onboarding1.jpg'),
};
