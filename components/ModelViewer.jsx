import "@google/model-viewer";

const ModelViewer = ({ glb = "/models/3.glb" }) => (
  <div className="w-full h-full">
    <model-viewer
      src={glb}
      ios-src=""
      alt="Rocks "
      shadow-intensity="1"
      camera-controls
      auto-rotate
      rotation-per-second="30deg"
      ar-modes="scene-viewer webxr"
      ar
    ></model-viewer>
  </div>
);

export default ModelViewer;
