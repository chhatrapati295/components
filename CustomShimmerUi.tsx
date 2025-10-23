import React from "react";
import Styles from "./skeleton.module.css";
// SKELETON CSS CODE IS BELOW THE COMPONENT

export enum THEMES {
  squareboat = "squareboat",
  gradient = "gradient",
}

interface SkeletonProps {
  /** Total skeleton height */
  height?: number;
  /** Width of skeleton container */
  width?: number | string;
  /** Height of each shimmer row */
  rowHeight?: number;
  /** Shape roundness */
  rounded?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  /** Theme type */
  variant?: THEMES;
}

const Skeleton: React.FC<SkeletonProps> = ({
  height = 200,
  width = "100%",
  rowHeight = 20,
  rounded = "md",
  variant = THEMES.squareboat,
}) => {
  const rows = Math.floor(height / (rowHeight + 8)); // 8px gap between rows

  return (
    <div className="space-y-2 py-4" style={{ width }}>
      {Array.from({ length: rows }).map((_, idx) => (
        <div
          key={idx}
          className={`relative overflow-hidden rounded-${rounded} ${
            variant === THEMES.squareboat ? "bg-gray-200" : Styles["bg-gradient"]
          }`}
          style={{ height: rowHeight }}
        >
          <div
            className={`absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent ${
              variant === THEMES.squareboat ? "via-white/60" : "via-info/60"
            } to-transparent`}
          />
        </div>
      ))}
    </div>
  );
};

export default Skeleton;


// <----------------- SKELETON CSS CODE ---------------->

// @keyframes shimmer {
//   100% {
//     transform: translateX(100%);
//   }
// }

// /* Gradient background version */
// .bg-gradient {
//   background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
//   background-size: 200% 100%;
// }
