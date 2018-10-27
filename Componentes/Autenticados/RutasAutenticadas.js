import { TabNavigator } from 'react-navigation';
import { StackHome } from './StackHome';
import { StackSearch } from './StackSearch';
import { StackFollow } from './StackFollow';
import { StackAdd } from './StackAdd';
import Profile from './Profile';

const RutasAutenticadas = TabNavigator(
  {
    Home: {
      screen: StackHome,
    },
    Search: {
      screen: StackSearch,
    },
    Add: {
      screen: StackAdd,
    },
    Follow: {
      screen: StackFollow,
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    tabBarPosition: 'bottom',
  },
);

export { RutasAutenticadas };
