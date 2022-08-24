import {
  Debug,
  Physics,
  RigidBody,
  InstancedRigidBodies,
  InstancedRigidBodyApi,
  CuboidCollider,
} from '@react-three/rapier';
import { Subtraction, Brush } from '@react-three/csg';
import { Canvas, useFrame } from '@react-three/fiber';
import * as React from 'react';
import './style.css';

function HollowSphere() {
  return (
    <mesh>
      <Subtraction>
        <Brush a>
          <sphereGeometry args={[2]} />
        </Brush>
        <Brush b>
          <sphereGeometry args={[1]} />
        </Brush>
      </Subtraction>
      <meshPhysicalMaterial transmission="0.9" ior="0.97" />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas>
      <Physics>
        <RigidBody colliders="trimesh">
          <HollowSphere />
        </RigidBody>
        <RigidBody>
          <mesh>
            <sphereGeometry args={[0.4]} />
            <meshBasicMaterial color="green" />
          </mesh>
        </RigidBody>
      </Physics>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
    </Canvas>
  );
}
