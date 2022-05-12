import styled from "@emotion/styled";
import * as THREE from "three";
import React, {
  MutableRefObject,
  RefObject,
  Suspense,
  useRef,
} from "react";
import {
  OrbitControlsProps,
  PresentationControls,
} from "@react-three/drei/web";
import {
  Canvas,
  useFrame,
} from "@react-three/fiber";
import {
  useGLTF,
  Environment,
} from "@react-three/drei";
import {
  BufferGeometry,
  Material,
  Mesh,
} from "three";

type Props = {};

const AboutText = styled.p`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 130px;
  padding: 0px;
  margin: 0 auto;
  font-family: Helvetica Now Display;
  font-style: normal;
  font-weight: 900;
  font-size: 72px;
  line-height: 101px;
  color: ${(props) =>
    props.theme.color.onSurface};
  transition: all 0.1s ease-in-out;
  user-select: none;
`;

const Model = () => {
  const gltf = useGLTF("/model.gltf", true);
  console.log(gltf);
  if (Array.isArray(gltf)) {
    return (
      <>
        {gltf.map((single) => {
          return (
            <primitive
              key={Math.random()}
              object={single.scene}
              dispose={null}
            />
          );
        })}
      </>
    );
  }
  return (
    <primitive
      object={gltf.scene}
      dispose={null}
    />
  );
};

const HTML = () => {
  const group = useRef() as MutableRefObject<
    Mesh<BufferGeometry, Material | Material[]>
  >;
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.x =
      THREE.MathUtils.lerp(
        group.current.rotation.x,
        Math.cos(t / 2) / 20 + 0.25,
        0.1
      );
    group.current.rotation.y =
      THREE.MathUtils.lerp(
        group.current.rotation.y,
        Math.sin(t / 2) / 20,
        0.1
      );
    group.current.rotation.z =
      THREE.MathUtils.lerp(
        group.current.rotation.z,
        Math.sin(t / 4) / 20,
        0.1
      );
    group.current.position.y =
      THREE.MathUtils.lerp(
        group.current.position.y,
        (-230 + Math.sin(t)) / 5,
        0.1
      );
  });
  return (
    <group
      position={[0, 0, -160]}
      rotation={[0.1, -0.425, 0]}
    >
      <ambientLight intensity={0.1} />
      <pointLight
        color="white"
        intensity={0.5}
        position={[10, 40, -20]}
        castShadow
      />
      <mesh
        castShadow
        ref={group}
        position={[-10, -20, -10]}
        scale={[35, 35, 35]}
      >
        <PresentationControls
          global
          config={{ mass: 2, tension: 400 }}
          rotation={[-0.2, 1, -0.1]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <Model />
        </PresentationControls>
      </mesh>
      <mesh castShadow receiveShadow />
    </group>
  );
};

export default function About({}: Props) {
  return (
    <Suspense fallback={null}>
      <Canvas
        performance={{
          current: 1,
          max: 0.2,
          min: 0.1,
        }}
        shadows
        style={{
          maxWidth: 700,
          width: 700,
          maxHeight: 250,
          height: 250,
        }}
        dpr={[1, 2]}
        camera={{
          position: [0, 0, 0],
          fov: 30,
        }}
      >
        <HTML />
        <Environment preset="dawn" />
      </Canvas>
      <AboutText>About</AboutText>
    </Suspense>
  );
}
