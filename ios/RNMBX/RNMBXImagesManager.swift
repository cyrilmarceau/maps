
@objc(RNMBXImagesManager)
class RNMBXImagesManager : RCTViewManager {
  @objc
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }

  override func view() -> UIView! {
    let layer = RNMBXImages()
    layer.bridge = self.bridge
    return layer
  }
}
