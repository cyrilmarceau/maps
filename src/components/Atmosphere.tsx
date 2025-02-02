import React, { memo, useMemo } from 'react';
import { requireNativeComponent } from 'react-native';

import type { AtmosphereLayerStyleProps } from '../utils/MapboxStyles';
import { StyleValue, transformStyle } from '../utils/StyleValue';
import type { BaseProps } from '../types/BaseProps';

export const NATIVE_MODULE_NAME = 'RNMBXAtmosphere';

type Props = BaseProps & {
  style: AtmosphereLayerStyleProps;
};

export const Atmosphere = memo((props: Props) => {
  const baseProps = useMemo(() => {
    return {
      ...props,
      reactStyle: transformStyle(props.style),
      style: undefined,
    };
  }, [props]);

  return <RNMBXAtmosphere {...baseProps} />;
});

type NativeProps = {
  reactStyle?: { [key: string]: StyleValue };
  style?: undefined;
};

const RNMBXAtmosphere = requireNativeComponent<NativeProps>(NATIVE_MODULE_NAME);
