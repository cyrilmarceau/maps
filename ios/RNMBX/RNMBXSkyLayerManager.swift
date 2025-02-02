@objc(RNMBXSkyLayerManager)
class RNMBXSkyLayerManager: RCTViewManager {
    @objc
    override static func requiresMainQueueSetup() -> Bool {
        return true
    }
  
    override func view() -> UIView! {
      let layer = RNMBXSkyLayer()
      layer.bridge = self.bridge
      return layer
    }
}
