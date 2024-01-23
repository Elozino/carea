
import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import OnBoardingScreen from '../OnBoardingScreen';

type GLTFResult = GLTF & {
  nodes: {
    Cylinder001: THREE.Mesh;
    Cylinder003: THREE.Mesh;
    Plane049: THREE.Mesh;
    ["Bamper-Front006"]: THREE.Mesh;
    ["Bamper-Front004"]: THREE.Mesh;
    Circle001: THREE.Mesh;
    Sphere010: THREE.Mesh;
    Circle: THREE.Mesh;
    Plane012: THREE.Mesh;
    Plane010: THREE.Mesh;
    Plane011: THREE.Mesh;
    Plane009: THREE.Mesh;
    Plane007: THREE.Mesh;
    Plane008: THREE.Mesh;
    GuideGrill000: THREE.Mesh;
    GuideGrill001: THREE.Mesh;
    Plane004: THREE.Mesh;
    ["Bamper-Front005"]: THREE.Mesh;
    Plane126: THREE.Mesh;
    Plane126_1: THREE.Mesh;
    GrillBorder: THREE.Mesh;
    ["Bamper-Front001"]: THREE.Mesh;
    ["Bamper-Front003"]: THREE.Mesh;
    Front_Fender001: THREE.Mesh;
    ["Bamper-Front"]: THREE.Mesh;
    Plane005: THREE.Mesh;
    Plane006: THREE.Mesh;
    Plane003: THREE.Mesh;
    Front_Fender009: THREE.Mesh;
    Front_Fender008: THREE.Mesh;
    Plane030: THREE.Mesh;
    Sphere009: THREE.Mesh;
    Front_Fender004: THREE.Mesh;
    BackFendenLeft013: THREE.Mesh;
    Plane001: THREE.Mesh;
    Plane: THREE.Mesh;
    BackFendenLeft008: THREE.Mesh;
    BackFendenLeft009: THREE.Mesh;
    BackFendenLeft007: THREE.Mesh;
    BackFendenLeft006: THREE.Mesh;
    BackFendenLeft010: THREE.Mesh;
    BackFendenLeft005: THREE.Mesh;
    BackFendenLeft003: THREE.Mesh;
    Roof1004: THREE.Mesh;
    Roof1003: THREE.Mesh;
    Front_Fender007: THREE.Mesh;
    Front_Fender002: THREE.Mesh;
    BackFendenRight001: THREE.Mesh;
    P_anelUnderDoor: THREE.Mesh;
    BackFendenRight: THREE.Mesh;
    Front_Fender: THREE.Mesh;
    BackFendenLeft011: THREE.Mesh;
    BackFendenLeft012: THREE.Mesh;
    BackWindshieldFrame001: THREE.Mesh;
    BackWindshieldFrame002: THREE.Mesh;
    Roof1002: THREE.Mesh;
    Roof1005: THREE.Mesh;
    Roof1001: THREE.Mesh;
    Plane017_1: THREE.Mesh;
    Plane017_2: THREE.Mesh;
    Plane018_1: THREE.Mesh;
    Plane018_2: THREE.Mesh;
    BackWindshieldFrame: THREE.Mesh;
    ["Guide-Back_Fenden_and_Top003"]: THREE.Mesh;
    ["Guide-Back_Fenden_and_Top002"]: THREE.Mesh;
    BackFendenLeft: THREE.Mesh;
    Tail023: THREE.Mesh;
    Tail022: THREE.Mesh;
    Tail021: THREE.Mesh;
    Tail020: THREE.Mesh;
    Plane129: THREE.Mesh;
    Plane129_1: THREE.Mesh;
    Plane017: THREE.Mesh;
    Circle002: THREE.Mesh;
    Tail018: THREE.Mesh;
    Plane016: THREE.Mesh;
    Tail017: THREE.Mesh;
    Plane096: THREE.Mesh;
    Plane096_1: THREE.Mesh;
    Tail015: THREE.Mesh;
    Tail014: THREE.Mesh;
    Tail012: THREE.Mesh;
    Tail011: THREE.Mesh;
    Tail010: THREE.Mesh;
    Tail008: THREE.Mesh;
    Tail005: THREE.Mesh;
    Tail009: THREE.Mesh;
    Plane082: THREE.Mesh;
    Plane082_1: THREE.Mesh;
    Plane081: THREE.Mesh;
    Plane081_1: THREE.Mesh;
    Plane081_2: THREE.Mesh;
    Tail004: THREE.Mesh;
    Plane063: THREE.Mesh;
    Plane063_1: THREE.Mesh;
    Plane062: THREE.Mesh;
    Plane062_1: THREE.Mesh;
    Plane062_2: THREE.Mesh;
    Plane061: THREE.Mesh;
    Plane061_1: THREE.Mesh;
    Plane059: THREE.Mesh;
    Plane059_1: THREE.Mesh;
    Tail: THREE.Mesh;
    Tail001: THREE.Mesh;
    Plane014: THREE.Mesh;
    BackFendenLeft014: THREE.Mesh;
    Plane015: THREE.Mesh;
    Circle013: THREE.Mesh;
    Circle014: THREE.Mesh;
    Circle015: THREE.Mesh;
    Circle016: THREE.Mesh;
    Circle017: THREE.Mesh;
    Plane025: THREE.Mesh;
    Plane026: THREE.Mesh;
    Plane024: THREE.Mesh;
    Circle005: THREE.Mesh;
    Circle003: THREE.Mesh;
    Circle004: THREE.Mesh;
    Circle006: THREE.Mesh;
    Circle007: THREE.Mesh;
    Plane019: THREE.Mesh;
    Plane020: THREE.Mesh;
    Plane018: THREE.Mesh;
    Plane092: THREE.Mesh;
    Plane092_1: THREE.Mesh;
    Plane028: THREE.Mesh;
    Plane027: THREE.Mesh;
    Sphere001: THREE.Mesh;
    Sphere: THREE.Mesh;
    Plane031: THREE.Mesh;
    Plane029: THREE.Mesh;
    Plane152: THREE.Mesh;
    Plane152_1: THREE.Mesh;
    Plane151: THREE.Mesh;
    Plane151_1: THREE.Mesh;
    ["Interior_-_Steering_Wheel"]: THREE.Mesh;
    Circle049: THREE.Mesh;
    Circle050: THREE.Mesh;
    Circle021_1: THREE.Mesh;
    Circle021_2: THREE.Mesh;
    Plane047: THREE.Mesh;
    Bolt023: THREE.Mesh;
    Nut027: THREE.Mesh;
    Nut026: THREE.Mesh;
    Bolt022: THREE.Mesh;
    Bolt021: THREE.Mesh;
    Nut025: THREE.Mesh;
    Nut024: THREE.Mesh;
    Bolt020: THREE.Mesh;
    Bolt019: THREE.Mesh;
    Nut023: THREE.Mesh;
    Nut022: THREE.Mesh;
    Bolt018: THREE.Mesh;
    Circle047: THREE.Mesh;
    Circle046: THREE.Mesh;
    Circle025_1: THREE.Mesh;
    Circle025_2: THREE.Mesh;
    Circle044: THREE.Mesh;
    Circle043: THREE.Mesh;
    Plane046: THREE.Mesh;
    Nut021: THREE.Mesh;
    Plane045: THREE.Mesh;
    Plane044: THREE.Mesh;
    Plane043: THREE.Mesh;
    Plane042: THREE.Mesh;
    Nut020: THREE.Mesh;
    Plane041: THREE.Mesh;
    Circle042: THREE.Mesh;
    Circle041: THREE.Mesh;
    // Circle025_1: THREE.Mesh;
    // Circle025_2: THREE.Mesh;
    Circle039: THREE.Mesh;
    Circle038: THREE.Mesh;
    Bolt017: THREE.Mesh;
    Nut019: THREE.Mesh;
    Nut018: THREE.Mesh;
    Bolt016: THREE.Mesh;
    Bolt015: THREE.Mesh;
    Nut017: THREE.Mesh;
    Nut016: THREE.Mesh;
    Bolt014: THREE.Mesh;
    Bolt013: THREE.Mesh;
    Nut015: THREE.Mesh;
    Nut014: THREE.Mesh;
    Bolt012: THREE.Mesh;
    Plane040: THREE.Mesh;
    // Circle021_1: THREE.Mesh;
    // Circle021_2: THREE.Mesh;
    Circle035: THREE.Mesh;
    Circle036: THREE.Mesh;
    Circle033: THREE.Mesh;
    Circle034: THREE.Mesh;
    // Circle021_1: THREE.Mesh;
    // Circle021_2: THREE.Mesh;
    Plane039: THREE.Mesh;
    Bolt011: THREE.Mesh;
    Nut013: THREE.Mesh;
    Nut012: THREE.Mesh;
    Bolt010: THREE.Mesh;
    Bolt009: THREE.Mesh;
    Nut011: THREE.Mesh;
    Nut010: THREE.Mesh;
    Bolt008: THREE.Mesh;
    Bolt007: THREE.Mesh;
    Nut009: THREE.Mesh;
    Nut008: THREE.Mesh;
    Bolt006: THREE.Mesh;
    Circle031: THREE.Mesh;
    Circle030: THREE.Mesh;
    // Circle025_1: THREE.Mesh;
    // Circle025_2: THREE.Mesh;
    Circle028: THREE.Mesh;
    Circle027: THREE.Mesh;
    Plane038: THREE.Mesh;
    Nut007: THREE.Mesh;
    Plane037: THREE.Mesh;
    Plane036: THREE.Mesh;
    Plane035: THREE.Mesh;
    Plane034: THREE.Mesh;
    Nut006: THREE.Mesh;
    Plane033: THREE.Mesh;
    Circle025: THREE.Mesh;
    Circle023: THREE.Mesh;
    // Circle025_1: THREE.Mesh;
    // Circle025_2: THREE.Mesh;
    Circle022: THREE.Mesh;
    Circle019: THREE.Mesh;
    Bolt005: THREE.Mesh;
    Nut005: THREE.Mesh;
    Nut004: THREE.Mesh;
    Bolt004: THREE.Mesh;
    Bolt003: THREE.Mesh;
    Nut003: THREE.Mesh;
    Nut002: THREE.Mesh;
    Bolt002: THREE.Mesh;
    Bolt001: THREE.Mesh;
    Nut001: THREE.Mesh;
    Nut: THREE.Mesh;
    Bolt: THREE.Mesh;
    Plane032: THREE.Mesh;
    // Circle021_1: THREE.Mesh;
    // Circle021_2: THREE.Mesh;
    Circle018: THREE.Mesh;
    Circle021: THREE.Mesh;
    Front_Fender015: THREE.Mesh;
    Shadow_Planes001: THREE.Mesh;
    Cylinder: THREE.Mesh;
  };
  materials: {
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
    ["Tiles.004"]: THREE.MeshStandardMaterial;
    ["Metal - Chrome"]: THREE.MeshStandardMaterial;
    ["Metal - Black - Rough 0.2"]: THREE.MeshStandardMaterial;
    ["Metal - Black"]: THREE.MeshPhysicalMaterial;
    ["Glass - Clear"]: THREE.MeshPhysicalMaterial;
    ["Metal - Chrome - Dark"]: THREE.MeshStandardMaterial;
    ["Plastic - Black - Bumpy Small"]: THREE.MeshStandardMaterial;
    ["Car Paint - Black"]: THREE.MeshStandardMaterial;
    ["Glass - Orange"]: THREE.MeshPhysicalMaterial;
    ["Glass - Orange - Bump"]: THREE.MeshPhysicalMaterial;
    ["Car Paint - Red"]: THREE.MeshStandardMaterial;
    ["Rubber - Black"]: THREE.MeshStandardMaterial;
    ["Light Bulb - Off"]: THREE.MeshPhysicalMaterial;
    ["Glass - Tinted"]: THREE.MeshPhysicalMaterial;
    ["Window Border"]: THREE.MeshStandardMaterial;
    ["Glass - Red"]: THREE.MeshPhysicalMaterial;
    ["Glass - Red - Bump"]: THREE.MeshPhysicalMaterial;
    ["Metal - Chrome - Rough 0.2"]: THREE.MeshStandardMaterial;
    ["Glass - Clear - Ridged - UV"]: THREE.MeshPhysicalMaterial;
    ["Glass - Red - Ridged"]: THREE.MeshPhysicalMaterial;
    ["Glass - Red - Rough 0.4"]: THREE.MeshPhysicalMaterial;
    ["Glass - Clear - Bumps"]: THREE.MeshPhysicalMaterial;
    ["Glass - Clear - Ridged - Trunk Light Lens"]: THREE.MeshPhysicalMaterial;
    ["Flag Logo"]: THREE.MeshStandardMaterial;
    ["Interior - Black"]: THREE.MeshStandardMaterial;
    ["Interior - Black.001"]: THREE.MeshStandardMaterial;
    ["Brake Disc"]: THREE.MeshStandardMaterial;
    ["Brake Hub"]: THREE.MeshStandardMaterial;
    ["Tire.001"]: THREE.MeshPhysicalMaterial;
    ["Black Diffuse"]: THREE.MeshStandardMaterial;
    ["Black Diffuse.001"]: THREE.MeshStandardMaterial;
  };
};

export default function OnBoardingModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    require('../../assets/3DModels/OnboardingModel.glb')
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials["Material.005"]}
        position={[0, 1.548, 0]}
        scale={[8.434, 0.949, 8.434]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials["Material.006"]}
        position={[0, 3.948, 0]}
        scale={[8.434, 0.949, 8.434]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane049.geometry}
        material={materials["Tiles.004"]}
        scale={17.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Bamper-Front006"].geometry}
        material={materials["Metal - Chrome"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Bamper-Front004"].geometry}
        material={materials["Metal - Black - Rough 0.2"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={materials["Metal - Black"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere010.geometry}
        material={materials["Glass - Clear"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={materials["Metal - Chrome - Dark"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane012.geometry}
        material={materials["Glass - Clear"]}
        scale={[0.905, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane010.geometry}
        material={materials["Metal - Chrome - Dark"]}
        scale={[0.905, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane011.geometry}
        material={materials["Metal - Chrome"]}
        scale={[0.905, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane009.geometry}
        material={materials["Plastic - Black - Bumpy Small"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={materials["Plastic - Black - Bumpy Small"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={materials["Car Paint - Black"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GuideGrill000.geometry}
        material={materials["Plastic - Black - Bumpy Small"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GuideGrill001.geometry}
        material={materials["Plastic - Black - Bumpy Small"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials["Plastic - Black - Bumpy Small"]}
        position={[0, 0.412, 2.088]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Bamper-Front005"].geometry}
        material={materials["Metal - Chrome"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GrillBorder.geometry}
        material={materials["Car Paint - Black"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Bamper-Front001"].geometry}
        material={materials["Car Paint - Black"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Bamper-Front003"].geometry}
        material={materials["Car Paint - Black"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Front_Fender001.geometry}
        material={materials["Glass - Clear"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Bamper-Front"].geometry}
        material={materials["Car Paint - Red"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials["Car Paint - Black"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={materials["Car Paint - Black"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials["Car Paint - Red"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Front_Fender009.geometry}
        material={materials["Rubber - Black"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Front_Fender008.geometry}
        material={materials["Rubber - Black"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane030.geometry}
        material={materials["Metal - Chrome"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere009.geometry}
        material={materials["Light Bulb - Off"]}
        scale={1.095}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Front_Fender004.geometry}
        material={materials["Metal - Chrome - Dark"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BackFendenLeft013.geometry}
        material={materials["Plastic - Black - Bumpy Small"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials["Metal - Chrome"]}
        position={[-0.047, -0.031, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Car Paint - Red"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BackFendenLeft008.geometry}
        material={materials["Rubber - Black"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BackFendenLeft009.geometry}
        material={materials["Glass - Tinted"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BackFendenLeft007.geometry}
        material={materials["Rubber - Black"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BackFendenLeft006.geometry}
        material={materials["Glass - Tinted"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BackFendenLeft010.geometry}
        material={materials["Window Border"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BackFendenLeft005.geometry}
        material={materials["Rubber - Black"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BackFendenLeft003.geometry}
        material={materials["Rubber - Black"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof1004.geometry}
        material={materials["Rubber - Black"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof1003.geometry}
        material={materials["Rubber - Black"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Front_Fender007.geometry}
        material={materials["Rubber - Black"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Front_Fender002.geometry}
        material={materials["Car Paint - Black"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BackFendenRight001.geometry}
        material={materials["Metal - Black - Rough 0.2"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.P_anelUnderDoor.geometry}
        material={materials["Car Paint - Red"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BackFendenRight.geometry}
        material={materials["Car Paint - Red"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Front_Fender.geometry}
        material={materials["Car Paint - Red"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BackFendenLeft011.geometry}
        material={materials["Car Paint - Black"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BackFendenLeft012.geometry}
        material={materials["Car Paint - Black"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BackWindshieldFrame001.geometry}
        material={materials["Glass - Tinted"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BackWindshieldFrame002.geometry}
        material={materials["Window Border"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof1002.geometry}
        material={materials["Glass - Tinted"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof1005.geometry}
        material={materials["Window Border"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof1001.geometry}
        material={materials["Car Paint - Black"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BackWindshieldFrame.geometry}
        material={materials["Car Paint - Red"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Guide-Back_Fenden_and_Top003"].geometry}
        material={materials["Car Paint - Red"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Guide-Back_Fenden_and_Top002"].geometry}
        material={materials["Car Paint - Red"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BackFendenLeft.geometry}
        material={materials["Car Paint - Red"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tail023.geometry}
        material={materials["Metal - Black - Rough 0.2"]}
        position={[0, 0, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tail022.geometry}
        material={materials["Metal - Black - Rough 0.2"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tail021.geometry}
        material={materials["Metal - Chrome"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tail020.geometry}
        material={materials["Metal - Black - Rough 0.2"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane017.geometry}
        material={materials["Metal - Black - Rough 0.2"]}
        position={[0, 0.526, -2.197]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle002.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[0.058, 0.343, -2.018]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tail018.geometry}
        material={materials["Metal - Black"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane016.geometry}
        material={materials["Plastic - Black - Bumpy Small"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tail017.geometry}
        material={materials["Plastic - Black - Bumpy Small"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tail015.geometry}
        material={materials["Metal - Chrome"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tail014.geometry}
        material={materials["Car Paint - Black"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tail012.geometry}
        material={materials["Light Bulb - Off"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tail011.geometry}
        material={materials["Metal - Chrome"]}
        position={[0, 0, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tail010.geometry}
        material={materials["Car Paint - Black"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tail008.geometry}
        material={materials["Metal - Chrome"]}
        position={[0, 0, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tail005.geometry}
        material={materials["Metal - Chrome"]}
        position={[0, 0, 0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tail009.geometry}
        material={materials["Metal - Chrome"]}
        position={[0, 0, 0.001]}
      />
      <group position={[0, 0, 0.001]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane082.geometry}
          material={materials["Glass - Clear"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane082_1.geometry}
          material={materials["Glass - Clear - Ridged - UV"]}
        />
      </group>
      <group position={[0, 0, 0.001]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane081.geometry}
          material={materials["Glass - Red"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane081_1.geometry}
          material={materials["Glass - Red - Ridged"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane081_2.geometry}
          material={materials["Glass - Red - Rough 0.4"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tail004.geometry}
        material={materials["Metal - Chrome"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tail.geometry}
        material={materials["Car Paint - Red"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tail001.geometry}
        material={materials["Car Paint - Black"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane014.geometry}
        material={materials["Car Paint - Black"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BackFendenLeft014.geometry}
        material={materials["Car Paint - Black"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane015.geometry}
        material={materials["Plastic - Black - Bumpy Small"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <group position={[0.026, 0.782, 0.835]} rotation={[0.522, -0.379, 0.014]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle013.geometry}
          material={materials["Metal - Black - Rough 0.2"]}
          position={[0, 0.09, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle014.geometry}
            material={materials["Metal - Black - Rough 0.2"]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle015.geometry}
              material={materials["Metal - Black - Rough 0.2"]}
              position={[-0.135, -0.01, 0]}
              rotation={[0, 0, 0.125]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle016.geometry}
                material={materials["Metal - Black - Rough 0.2"]}
              />
              <group
                position={[-0.421, -0.017, -0.028]}
                rotation={[0, 0, 0.083]}
                scale={[0.612, 0.03, 0.03]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle017.geometry}
                  material={materials["Metal - Black - Rough 0.2"]}
                  position={[0.688, 0.153, 0.921]}
                  scale={[1.635, 33.357, 33.357]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane025.geometry}
                  material={materials["Metal - Black - Rough 0.2"]}
                  position={[0, -0.052, 0]}
                  scale={[1.635, 33.357, 33.357]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane026.geometry}
                  material={materials["Rubber - Black"]}
                  position={[0.004, 0.141, 0.004]}
                  scale={[1.635, 33.357, 33.357]}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane024.geometry}
                material={materials["Metal - Black - Rough 0.2"]}
                position={[-0.294, 0.01, 0]}
              />
            </mesh>
          </mesh>
        </mesh>
      </group>
      <group position={[0.619, 0.776, 0.66]} rotation={[0.482, 0.034, -0.213]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle005.geometry}
          material={materials["Metal - Black - Rough 0.2"]}
          position={[0, 0.09, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle003.geometry}
            material={materials["Metal - Black - Rough 0.2"]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle004.geometry}
              material={materials["Metal - Black - Rough 0.2"]}
              position={[-0.135, -0.01, 0]}
              rotation={[0, 0, 0.11]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle006.geometry}
                material={materials["Metal - Black - Rough 0.2"]}
              />
              <group
                position={[-0.421, -0.017, -0.028]}
                rotation={[0, 0, 0.08]}
                scale={[0.612, 0.03, 0.03]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle007.geometry}
                  material={materials["Metal - Black - Rough 0.2"]}
                  position={[0.688, 0.153, 0.921]}
                  scale={[1.635, 33.357, 33.357]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane019.geometry}
                  material={materials["Metal - Black - Rough 0.2"]}
                  position={[0, -0.052, 0]}
                  scale={[1.635, 33.357, 33.357]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane020.geometry}
                  material={materials["Rubber - Black"]}
                  position={[0.004, 0.141, 0.004]}
                  scale={[1.635, 33.357, 33.357]}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane018.geometry}
                material={materials["Metal - Black - Rough 0.2"]}
                position={[-0.294, 0.01, 0]}
              />
            </mesh>
          </mesh>
        </mesh>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane028.geometry}
        material={materials["Flag Logo"]}
        position={[0, 0.62, 2.116]}
        rotation={[0.525, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane027.geometry}
        material={materials["Flag Logo"]}
        position={[0, 0.844, -2.195]}
        rotation={[1.752, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001.geometry}
        material={materials["Light Bulb - Off"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials["Light Bulb - Off"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane031.geometry}
        material={materials["Rubber - Black"]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane029.geometry}
        material={materials["Metal - Chrome"]}
        position={[-0.001, 0.713, -2.22]}
        rotation={[0.125, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Interior_-_Steering_Wheel"].geometry}
        material={materials["Interior - Black"]}
        position={[0.388, 0.825, 0.13]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle049.geometry}
        material={materials["Metal - Black"]}
        position={[-0.898, 0.361, -1.354]}
        rotation={[2.827, 0, Math.PI / 2]}
        scale={1.038}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle050.geometry}
        material={materials["Metal - Black"]}
        position={[-0.898, 0.361, -1.354]}
        rotation={[2.827, 0, Math.PI / 2]}
        scale={1.038}
      />
      <group
        position={[-0.898, 0.362, -1.354]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={1.038}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle021_1.geometry}
          material={materials["Car Paint - Black"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle021_2.geometry}
          material={materials["Metal - Chrome"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane047.geometry}
        material={materials["Flag Logo"]}
        position={[-0.896, 0.359, -1.354]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.357}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt023.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[-0.874, 0.415, -1.314]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nut027.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[-0.856, 0.417, -1.314]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.033}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nut026.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[-0.856, 0.416, -1.395]}
        rotation={[Math.PI / 10, 0, Math.PI / 2]}
        scale={0.033}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt022.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[-0.874, 0.416, -1.393]}
        rotation={[-2.827, 0, -Math.PI / 2]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt021.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[-0.874, 0.416, -1.393]}
        rotation={[-2.827, 0, -Math.PI / 2]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nut025.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[-0.856, 0.416, -1.395]}
        rotation={[Math.PI / 10, 0, Math.PI / 2]}
        scale={0.033}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nut024.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[-0.856, 0.293, -1.354]}
        rotation={[-2.199, 0, Math.PI / 2]}
        scale={0.033}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt020.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[-0.874, 0.294, -1.355]}
        rotation={[0.942, 0, -Math.PI / 2]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt019.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[-0.874, 0.341, -1.418]}
        rotation={[2.199, 0, -Math.PI / 2]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nut023.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[-0.856, 0.34, -1.419]}
        rotation={[-0.942, 0, Math.PI / 2]}
        scale={0.033}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nut022.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[-0.856, 0.34, -1.289]}
        rotation={[2.827, 0, Math.PI / 2]}
        scale={0.033}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt018.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[-0.874, 0.34, -1.291]}
        rotation={[-Math.PI / 10, 0, -Math.PI / 2]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle047.geometry}
        material={materials["Rubber - Black"]}
        position={[-0.885, 0.622, -1.354]}
        rotation={[Math.PI / 2, 0.531, Math.PI / 2]}
        scale={0.525}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle046.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[-0.887, 0.621, -1.354]}
        rotation={[Math.PI / 2, 0.531, Math.PI / 2]}
        scale={0.525}
      />
      <group
        position={[-0.804, 0.362, -1.354]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={1.038}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle025_1.geometry}
          material={materials["Brake Disc"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle025_2.geometry}
          material={materials["Metal - Black - Rough 0.2"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle044.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[-0.804, 0.362, -1.354]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={1.038}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle043.geometry}
        material={materials["Brake Hub"]}
        position={[-0.804, 0.362, -1.354]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={1.038}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane046.geometry}
        material={materials["Car Paint - Red"]}
        position={[-0.81, 0.362, -1.354]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={1.038}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nut021.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[-0.842, 0.501, -1.198]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={0.028}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane045.geometry}
        material={materials["Car Paint - Black"]}
        position={[-0.81, 0.362, -1.354]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={1.038}
      />
      <group
        position={[-0.766, 0.362, -1.354]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.743, 0.311, 0.743]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane044.geometry}
          material={materials["Tire.001"]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[3.339, 1.397, 1.397]}
        />
      </group>
      <group
        position={[-0.766, 0.362, 1.352]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.743, 0.311, 0.743]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane043.geometry}
          material={materials["Tire.001"]}
          rotation={[Math.PI, 0, -1.2]}
          scale={[3.239, 1.616, 1.397]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane042.geometry}
        material={materials["Car Paint - Black"]}
        position={[-0.81, 0.362, 1.041]}
        rotation={[Math.PI / 2, 0, 1.3]}
        scale={1.038}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nut020.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[-0.842, 0.501, 1.197]}
        rotation={[-3.142, 1.3, 0]}
        scale={0.028}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane041.geometry}
        material={materials["Car Paint - Red"]}
        position={[-0.81, 0.362, 1.352]}
        rotation={[-Math.PI / 2, 0, 1.842]}
        scale={1.038}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle042.geometry}
        material={materials["Brake Hub"]}
        position={[-0.804, 0.362, 1.352]}
        rotation={[-Math.PI / 2, 0, 1.842]}
        scale={1.038}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle041.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[-0.804, 0.362, 1.352]}
        rotation={[-Math.PI / 2, 0, 1.842]}
        scale={1.038}
      />
      <group
        position={[-0.804, 0.362, 1.352]}
        rotation={[-Math.PI / 2, 0, 1.842]}
        scale={1.038}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle025_1.geometry}
          material={materials["Brake Disc"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle025_2.geometry}
          material={materials["Metal - Black - Rough 0.2"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle039.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[-0.887, 0.103, 1.352]}
        rotation={[-1.727, 0.51, 1.883]}
        scale={0.525}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle038.geometry}
        material={materials["Rubber - Black"]}
        position={[-0.885, 0.102, 1.352]}
        rotation={[-1.727, 0.51, 1.883]}
        scale={0.525}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt017.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[-0.874, 0.384, 1.288]}
        rotation={[2.816, -0.257, -1.656]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nut019.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[-0.856, 0.383, 1.287]}
        rotation={[-0.325, 0.257, 1.656]}
        scale={0.033}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nut018.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[-0.856, 0.384, 1.417]}
        rotation={[2.182, -0.158, 1.35]}
        scale={0.033}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt016.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[-0.874, 0.383, 1.416]}
        rotation={[-0.96, 0.158, -1.35]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt015.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[-0.874, 0.43, 1.353]}
        rotation={[-2.182, -0.158, -1.35]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nut017.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[-0.856, 0.431, 1.352]}
        rotation={[0.96, 0.158, 1.35]}
        scale={0.033}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nut016.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[-0.856, 0.308, 1.393]}
        rotation={[-2.816, -0.257, 1.656]}
        scale={0.033}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt014.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[-0.874, 0.308, 1.391]}
        rotation={[0.325, 0.257, -1.656]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt013.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[-0.874, 0.308, 1.391]}
        rotation={[0.325, 0.257, -1.656]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nut015.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[-0.856, 0.308, 1.393]}
        rotation={[-2.816, -0.257, 1.656]}
        scale={0.033}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nut014.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[-0.856, 0.307, 1.312]}
        rotation={[-Math.PI / 2, 0, 1.842]}
        scale={0.033}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt012.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[-0.874, 0.309, 1.312]}
        rotation={[Math.PI / 2, 0, -1.842]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane040.geometry}
        material={materials["Flag Logo"]}
        position={[-0.896, 0.365, 1.352]}
        rotation={[-Math.PI / 2, 0, 1.842]}
        scale={0.357}
      />
      <group
        position={[-0.898, 0.362, 1.352]}
        rotation={[-Math.PI / 2, 0, 1.842]}
        scale={1.038}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle021_1.geometry}
          material={materials["Car Paint - Black"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle021_2.geometry}
          material={materials["Metal - Chrome"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle035.geometry}
        material={materials["Metal - Black"]}
        position={[-0.898, 0.362, 1.352]}
        rotation={[-0.325, 0.257, 1.656]}
        scale={1.038}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle036.geometry}
        material={materials["Metal - Black"]}
        position={[-0.898, 0.362, 1.352]}
        rotation={[-0.325, 0.257, 1.656]}
        scale={1.038}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle033.geometry}
        material={materials["Metal - Black"]}
        position={[0.898, 0.362, -1.352]}
        rotation={[-2.827, 0, -Math.PI / 2]}
        scale={1.038}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle034.geometry}
        material={materials["Metal - Black"]}
        position={[0.898, 0.362, -1.352]}
        rotation={[-2.827, 0, -Math.PI / 2]}
        scale={1.038}
      />
      <group
        position={[0.898, 0.362, -1.352]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.038}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle021_1.geometry}
          material={materials["Car Paint - Black"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle021_2.geometry}
          material={materials["Metal - Chrome"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane039.geometry}
        material={materials["Flag Logo"]}
        position={[0.896, 0.365, -1.352]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.357}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt011.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[0.874, 0.309, -1.312]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nut013.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[0.856, 0.307, -1.312]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.033}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nut012.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[0.856, 0.308, -1.393]}
        rotation={[-Math.PI / 10, 0, -Math.PI / 2]}
        scale={0.033}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt010.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[0.874, 0.308, -1.391]}
        rotation={[2.827, 0, Math.PI / 2]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt009.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[0.874, 0.308, -1.391]}
        rotation={[2.827, 0, Math.PI / 2]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nut011.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[0.856, 0.308, -1.393]}
        rotation={[-Math.PI / 10, 0, -Math.PI / 2]}
        scale={0.033}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nut010.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[0.856, 0.431, -1.352]}
        rotation={[2.199, 0, -Math.PI / 2]}
        scale={0.033}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt008.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[0.874, 0.43, -1.353]}
        rotation={[-0.942, 0, Math.PI / 2]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt007.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[0.874, 0.383, -1.416]}
        rotation={[-2.199, 0, Math.PI / 2]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nut009.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[0.856, 0.384, -1.417]}
        rotation={[0.942, 0, -Math.PI / 2]}
        scale={0.033}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nut008.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[0.856, 0.383, -1.287]}
        rotation={[-2.827, 0, -Math.PI / 2]}
        scale={0.033}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt006.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[0.874, 0.384, -1.288]}
        rotation={[Math.PI / 10, 0, Math.PI / 2]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle031.geometry}
        material={materials["Rubber - Black"]}
        position={[0.885, 0.102, -1.352]}
        rotation={[-Math.PI / 2, -0.531, -Math.PI / 2]}
        scale={0.525}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle030.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[0.887, 0.103, -1.352]}
        rotation={[-Math.PI / 2, -0.531, -Math.PI / 2]}
        scale={0.525}
      />
      <group
        position={[0.804, 0.362, -1.352]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.038}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle025_1.geometry}
          material={materials["Brake Disc"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle025_2.geometry}
          material={materials["Metal - Black - Rough 0.2"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle028.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[0.804, 0.362, -1.352]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.038}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle027.geometry}
        material={materials["Brake Hub"]}
        position={[0.804, 0.362, -1.352]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.038}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane038.geometry}
        material={materials["Car Paint - Red"]}
        position={[0.81, 0.362, -1.352]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.038}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nut007.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[0.842, 0.501, -1.197]}
        rotation={[-Math.PI, -Math.PI / 2, 0]}
        scale={0.028}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane037.geometry}
        material={materials["Car Paint - Black"]}
        position={[0.81, 0.362, -1.041]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.038}
      />
      <group
        position={[0.766, 0.362, -1.352]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.743, 0.311, 0.743]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane036.geometry}
          material={materials["Tire.001"]}
          rotation={[-Math.PI, 0, -Math.PI / 2]}
          scale={[3.339, 1.397, 1.397]}
        />
      </group>
      <group
        position={[0.766, 0.362, 1.354]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.743, 0.311, 0.743]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane035.geometry}
          material={materials["Tire.001"]}
          rotation={[0, 0, 1.2]}
          scale={[3.239, 1.616, 1.397]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane034.geometry}
        material={materials["Car Paint - Black"]}
        position={[0.81, 0.362, 1.354]}
        rotation={[Math.PI / 2, 0, -1.842]}
        scale={1.038}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nut006.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[0.842, 0.501, 1.198]}
        rotation={[0, -1.3, Math.PI]}
        scale={0.028}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane033.geometry}
        material={materials["Car Paint - Red"]}
        position={[0.81, 0.362, 1.354]}
        rotation={[Math.PI / 2, 0, -1.842]}
        scale={1.038}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle025.geometry}
        material={materials["Brake Hub"]}
        position={[0.804, 0.362, 1.354]}
        rotation={[Math.PI / 2, 0, -1.842]}
        scale={1.038}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle023.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[0.804, 0.362, 1.354]}
        rotation={[Math.PI / 2, 0, -1.842]}
        scale={1.038}
      />
      <group
        position={[0.804, 0.362, 1.354]}
        rotation={[Math.PI / 2, 0, -1.842]}
        scale={1.038}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle025_1.geometry}
          material={materials["Brake Disc"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle025_2.geometry}
          material={materials["Metal - Black - Rough 0.2"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle022.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[0.887, 0.621, 1.354]}
        rotation={[Math.PI / 2, -0.531, -Math.PI / 2]}
        scale={0.525}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle019.geometry}
        material={materials["Rubber - Black"]}
        position={[0.885, 0.622, 1.354]}
        rotation={[1.415, -0.51, -1.883]}
        scale={0.525}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt005.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[0.874, 0.34, 1.291]}
        rotation={[-2.816, -0.257, 1.656]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nut005.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[0.856, 0.34, 1.289]}
        rotation={[0.325, 0.257, -1.656]}
        scale={0.033}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nut004.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[0.856, 0.34, 1.419]}
        rotation={[-2.182, -0.158, -1.35]}
        scale={0.033}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt004.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[0.874, 0.341, 1.418]}
        rotation={[0.96, 0.158, 1.35]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt003.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[0.874, 0.294, 1.355]}
        rotation={[2.182, -0.158, 1.35]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nut003.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[0.856, 0.293, 1.354]}
        rotation={[-0.96, 0.158, -1.35]}
        scale={0.033}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nut002.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[0.856, 0.416, 1.395]}
        rotation={[2.816, -0.257, -1.656]}
        scale={0.033}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt002.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[0.874, 0.416, 1.393]}
        rotation={[-0.325, 0.257, 1.656]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt001.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[0.874, 0.416, 1.393]}
        rotation={[-0.325, 0.257, 1.656]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nut001.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[0.856, 0.416, 1.395]}
        rotation={[2.816, -0.257, -1.656]}
        scale={0.033}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nut.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[0.856, 0.417, 1.314]}
        rotation={[Math.PI / 2, 0, -1.842]}
        scale={0.033}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt.geometry}
        material={materials["Metal - Chrome - Rough 0.2"]}
        position={[0.874, 0.415, 1.314]}
        rotation={[-Math.PI / 2, 0, 1.842]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane032.geometry}
        material={materials["Flag Logo"]}
        position={[0.896, 0.359, 1.354]}
        rotation={[Math.PI / 2, 0, -1.842]}
        scale={0.357}
      />
      <group
        position={[0.898, 0.362, 1.354]}
        rotation={[Math.PI / 2, 0, -1.842]}
        scale={1.038}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle021_1.geometry}
          material={materials["Car Paint - Black"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle021_2.geometry}
          material={materials["Metal - Chrome"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle018.geometry}
        material={materials["Metal - Black"]}
        position={[0.898, 0.361, 1.354]}
        rotation={[0.325, 0.257, -1.656]}
        scale={1.038}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle021.geometry}
        material={materials["Metal - Black"]}
        position={[0.898, 0.361, 1.354]}
        rotation={[0.325, 0.257, -1.656]}
        scale={1.038}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Front_Fender015.geometry}
        material={materials["Black Diffuse"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shadow_Planes001.geometry}
        material={materials["Black Diffuse.001"]}
        position={[0, -0.004, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        position={[0.174, 0.344, -2.006]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane126.geometry}
        material={materials["Glass - Orange"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane126_1.geometry}
        material={materials["Glass - Orange - Bump"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane017_1.geometry}
        material={materials["Car Paint - Black"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane017_2.geometry}
        material={materials["Car Paint - Red"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane018_1.geometry}
        material={materials["Car Paint - Black"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane018_2.geometry}
        material={materials["Car Paint - Red"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane129.geometry}
        material={materials["Glass - Red"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane129_1.geometry}
        material={materials["Glass - Red - Bump"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane096.geometry}
        material={materials["Glass - Red"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane096_1.geometry}
        material={materials["Glass - Red - Bump"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane063.geometry}
        material={materials["Glass - Clear"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane063_1.geometry}
        material={materials["Glass - Clear - Ridged - UV"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane062.geometry}
        material={materials["Glass - Red"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane062_1.geometry}
        material={materials["Glass - Red - Ridged"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane062_2.geometry}
        material={materials["Glass - Red - Rough 0.4"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane061.geometry}
        material={materials["Glass - Clear"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane061_1.geometry}
        material={materials["Glass - Clear - Ridged - UV"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane059.geometry}
        material={materials["Glass - Clear"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane059_1.geometry}
        material={materials["Glass - Clear - Bumps"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane092.geometry}
        material={materials["Glass - Clear"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane092_1.geometry}
        material={materials["Glass - Clear - Ridged - Trunk Light Lens"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane152.geometry}
        material={materials["Interior - Black"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane152_1.geometry}
        material={materials["Interior - Black.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane151.geometry}
        material={materials["Interior - Black"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane151_1.geometry}
        material={materials["Interior - Black.001"]}
      />
    </group>
  );
}

useGLTF.preload(require('../../assets/3DModels/OnboardingModel.glb'));
