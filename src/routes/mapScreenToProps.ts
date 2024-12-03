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
      focused: 'home',
      unfocused: 'home-outline',
    },
  },
  GalleryScreen: {
    label: 'Galeria',
    icon: {
      focused: 'images',
      unfocused: 'images-outline',
    },
  },
  ChatScreen: {
    label: 'Chat',
    icon: {
      focused: 'chatbubble',
      unfocused: 'chatbubble-outline',
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
