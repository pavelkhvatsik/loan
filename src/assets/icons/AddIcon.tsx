import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from '@interfaces/IconProps';
const AddIcon: FC<IconProps> = ({ size = 40, color = '#fff' }) => (
  <Svg width={size} height={size} stroke={color} viewBox="0 0 24 24">
    <Path d="M6 12h6m0 0h6m-6 0v6m0-6V6" />
  </Svg>
);

export default AddIcon;
