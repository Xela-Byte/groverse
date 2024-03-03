import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath, Rect} from 'react-native-svg';

const FacebookIcon = (props: SvgProps) => (
  <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
    <G clipPath="url(#clip0_93_191)">
      <Path
        d="M24.5 12C24.5 5.37262 19.1274 0 12.5 0C5.87262 0 0.5 5.37253 0.5 12C0.5 17.9895 4.88825 22.954 10.625 23.8542V15.4688H7.57812V12H10.625V9.35625C10.625 6.34875 12.4166 4.6875 15.1575 4.6875C16.4705 4.6875 17.8438 4.92188 17.8438 4.92188V7.875H16.3306C14.8398 7.875 14.375 8.80003 14.375 9.74906V12H17.7031L17.1711 15.4688H14.375V23.8542C20.1117 22.954 24.5 17.9896 24.5 12Z"
        fill="#1877F2"
      />
      <Path
        d="M17.1711 15.4688L17.7031 12H14.375V9.74906C14.375 8.79994 14.8399 7.875 16.3306 7.875H17.8438V4.92188C17.8438 4.92188 16.4705 4.6875 15.1575 4.6875C12.4166 4.6875 10.625 6.34875 10.625 9.35625V12H7.57812V15.4688H10.625V23.8542C11.2453 23.9514 11.8722 24.0002 12.5 24C13.1278 24.0002 13.7547 23.9514 14.375 23.8542V15.4688H17.1711Z"
        fill="white"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_93_191">
        <Rect width={24} height={24} fill="white" transform="translate(0.5)" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default FacebookIcon;
