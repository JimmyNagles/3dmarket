import "@google/model-viewer";

const ModelViewer = ({ glb = "" }) => (
  <div className="w-full h-full">
    <model-viewer
      src={glb}
      ios-src=""
      alt="Genesis NFT"
      shadow-intensity="1"
      camera-controls
      auto-rotate
      ar
    ></model-viewer>
  </div>
);

export default Model;
