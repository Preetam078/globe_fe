"use client";
import React from "react";
import { motion } from "framer-motion";
import { World } from "../components/ui/globe";

export function GlobeDemo() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: false,
    autoRotateSpeed: 0.0,
  };

  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];

  const sampleArcs = [];

  const samplePoints = [
    {
      lat: 40.7128,
      lng: -74.0060,
      size: 0.1,
      color: colors[0],
      label: "New York"
    },
    {
      lat: 35.6762,
      lng: 139.6503,
      size: 0.1,
      color: colors[1],
      label: "Tokyo"
    },
    {
      lat: -33.8688,
      lng: 151.2093,
      size: 0.1,
      color: colors[2],
      label: "Sydney"
    },
    {
      lat: 51.5074,
      lng: -0.1278,
      size: 0.1,
      color: colors[0],
      label: "London"
    },
    {
      lat: 25.2048,
      lng: 55.2708,
      size: 0.1,
      color: colors[1],
      label: "Dubai"
    }
  ];

  return (
    <div className="flex flex-row items-center justify-center dark:bg-black bg-white relative w-full overflow-hidden h-[100vh]">
      <div className="mx-auto w-full relative top-[100px] overflow-hidden h-full px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
        </motion.div>

        <div className="absolute w-full bottom-0 inset-x-0 h-20 bg-gradient-to-t pointer-events-none select-none from-white dark:from-black to-transparent z-40" />
        <div className="absolute w-full top-0 left-0 right-0 h-[150rem]">
          <World data={sampleArcs} points={samplePoints} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
}