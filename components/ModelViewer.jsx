import "@google/model-viewer";

const ModelViewer = ({
  glb = "/models/3.glb",
  exposure = ".8",
  shadowIntensity = "1",
  autoRotate = "false",
}) => (
  <div className="w-full h-full">
    <model-viewer
      exposure={exposure}
      disable-zoom
      shadow-intensity={shadowIntensity}
      src={glb}
      ios-src=""
      alt="Rocks "
      camera-controls
      auto-rotate={autoRotate}
      rotation-per-second="30deg"
      ar-modes="scene-viewer webxr"
      ar
    ></model-viewer>
  </div>
);

export default ModelViewer;
