import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";

import { HomeInfo, Loader } from "../components";
import { Office } from "../models";

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ position: [0, 2.4, 7.4], fov: 32, near: 0.1, far: 100 }}
      >
        <Suspense fallback={<Loader />}>
          <color attach='background' args={['#f6d7c4']} />
          <ambientLight intensity={0.85} />
          <directionalLight position={[4, 6, 3]} intensity={1.6} color='#fff4ea' />
          <hemisphereLight skyColor='#f8dcc8' groundColor='#e7b89a' intensity={0.7} />

          <Office
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={[0, -1.7, 0]}
            rotation={[0, 4.5, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;

