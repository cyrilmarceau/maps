import React from 'react';
import { MapView, Camera } from '@rnmapbox/maps';

import sheet from '../../styles/sheet';
import BaseExamplePropTypes from '../common/BaseExamplePropTypes';
import Page from '../common/Page';

class ScaleBarView extends React.Component {
  static propTypes = {
    ...BaseExamplePropTypes,
  };

  render() {
    return (
      <Page {...this.props}>
        <MapView
          style={sheet.matchParent}
          compassEnabled
          logoEnabled={false}
          compassViewPosition={2}
          enabledScaleBar={true}
        >
          <Camera heading={21} />
        </MapView>
      </Page>
    );
  }
}

export default ScaleBarView;
