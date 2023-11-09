import { FC } from 'react';
import { View } from 'react-native';

import DocsIcon from '@assets/icons/DocsIcon';
import SettingsIcon from '@assets/icons/SettingsIcon';
import { TabsName } from '@enums/navigation.enum';

interface Props {
  name: string;
  focused: boolean;
  size: number;
}

const TabIcon: FC<Props> = ({ name, focused, size }) => {
  const color: string = focused ? '#42b983' : '#000';

  switch (name) {
    case TabsName.Home:
      return <DocsIcon color={color} size={size} />;
    case TabsName.Settings:
      return <SettingsIcon color={color} size={size} />;
    default:
      return <View></View>;
  }
};

export default TabIcon;
