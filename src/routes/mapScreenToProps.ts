import {IconProps} from '@components';

import {AppTabBottomParamList} from './AppTabNavigator';

export const mapScreenToProps: Record<
  keyof AppTabBottomParamList,
  {
    label: string;
    icon: {
      focused: IconProps['name'];
      unfocused: IconProps['name'];
    };
  }
> = {
  HomeScreen: {
    label: 'Início',
    icon: {
      focused: 'home-sharp',
      unfocused: 'home-outline',
    },
  },
  ChatScreen: {
    label: 'Amigos',
    icon: {
      focused: 'people',
      unfocused: 'people-outline',
    },
  },
  ProfileScreen: {
    label: 'Perfil',
    icon: {
      focused: 'person',
      unfocused: 'person-outline',
    },
  },
};
