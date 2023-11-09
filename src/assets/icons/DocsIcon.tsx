import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from '@interfaces/IconProps';
const DocsIcon: FC<IconProps> = ({ size = 40, color = '#000' }) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
    <Path
      stroke={color}
      d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM7 7h10M7 12h10M7 17h6"
    />
  </Svg>
);

export default DocsIcon;
