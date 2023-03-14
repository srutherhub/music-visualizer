import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export default function ThreeD() {
  return (
    <div className="Background">
      <Canvas>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.1}
          enableRotate={false}
          enableZoom={false}
        />
        <Stars count={1000} speed={0.5} factor={4} />
        <ambientLight intensity={1} color="#F6FFE0" />
        {/* <spotLight
          position={[10, 15, 10]}
          angle={0.3}
          color="grey"
          intensity={1}
        /> */}
        <Ground />
      </Canvas>
    </div>
  );
}

function Ground() {
  const dmap = "map.png";
  const nmap = "NormalMap.png";

  const displacementMap = useLoader(TextureLoader, `images/${dmap}`);
  const normalmap = useLoader(TextureLoader, `images/${nmap}`);
  return (
    <mesh position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry args={[100, 100, 100]} />
      <meshStandardMaterial
        map={displacementMap}
        displacementMap={displacementMap}
        normalMap={normalmap}
        displacementScale={5}
        color="grey"
      />
    </mesh>
  );
}
