import * as THREE from 'three';
import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

// Assuming Uniforms and UniformValue are defined somewhere in your code
interface Uniforms {
  [key: string]: { value: any; type: string };
}

interface UniformValue {
  type: string;
  value: any;
}

const getUniforms = (uniforms: { [key: string]: UniformValue }, size: { width: number; height: number }): Uniforms => {
  const preparedUniforms: Uniforms = {};

  for (const uniformName in uniforms) {
    const uniform: UniformValue = uniforms[uniformName];

    switch (uniform.type) {
      case "uniform1f":
        preparedUniforms[uniformName] = { value: uniform.value, type: "1f" };
        break;
      case "uniform3f":
        preparedUniforms[uniformName] = {
          value: new THREE.Vector3().fromArray(uniform.value),
          type: "3f",
        };
        break;
      case "uniform1fv":
        preparedUniforms[uniformName] = { value: uniform.value, type: "1fv" };
        break;
      case "uniform3fv":
        preparedUniforms[uniformName] = {
          value: uniform.value.map((v: number[]) =>
            new THREE.Vector3().fromArray(v)
          ),
          type: "3fv",
        };
        break;
      case "uniform2f":
        preparedUniforms[uniformName] = {
          value: new THREE.Vector2().fromArray(uniform.value),
          type: "2f",
        };
        break;
      default:
        console.error(`Invalid uniform type for '${uniformName}'.`);
        break;
    }
  }

  preparedUniforms["u_time"] = { value: 0, type: "1f" };
  preparedUniforms["u_resolution"] = {
    value: new THREE.Vector2(size.width * 2, size.height * 2),
    type: "2f",
  }; // Initialize u_resolution
  return preparedUniforms;
};

const ShaderMaterial: React.FC<{ source: string; uniforms: { [key: string]: UniformValue }; size: { width: number; height: number } }> = ({ source, uniforms, size }) => {
  const ref = useRef<THREE.Mesh>(null);

  // Shader material
  const material = useMemo(() => {
    const materialObject = new THREE.ShaderMaterial({
      vertexShader: `
      precision mediump float;
      in vec2 coordinates;
      uniform vec2 u_resolution;
      out vec2 fragCoord;
      void main(){
        float x = position.x;
        float y = position.y;
        gl_Position = vec4(x, y, 0.0, 1.0);
        fragCoord = (position.xy + vec2(1.0)) * 0.5 * u_resolution;
        fragCoord.y = u_resolution.y - fragCoord.y;
      }
      `,
      fragmentShader: source,
      uniforms: getUniforms(uniforms, size),
      glslVersion: THREE.GLSL3,
      blending: THREE.CustomBlending,
      blendSrc: THREE.SrcAlphaFactor,
      blendDst: THREE.OneFactor,
    });

    return materialObject;
  }, [size, uniforms, source]);

  return (
    <mesh ref={ref}>
      <planeGeometry args={[2, 2]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
};

const Shader: React.FC<ShaderProps> = ({ source, uniforms, maxFps = 60 }) => {
  return (
    <Canvas className="absolute inset-0 h-full w-full">
      <ShaderMaterial source={source} uniforms={uniforms} size={{ width: window.innerWidth, height: window.innerHeight }} />
    </Canvas>
  );
};

interface ShaderProps {
  source: string;
  uniforms: {
    [key: string]: {
      value: number[] | number[][] | number;
      type: string;
    };
  };
  maxFps?: number;
}

export default Shader;