"use client";

import React from "react";
import { useInView } from "react-intersection-observer";

interface LazyLoadWrapperProps {
  children: React.ReactNode;
  rootMargin?: string;
}

function LazyLoadWrapper({
  children,
  rootMargin = "200px 0px",
}: LazyLoadWrapperProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin,
  });

  return <div ref={ref}>{inView ? children : null}</div>;
}

export default LazyLoadWrapper;

// <<<<<<<<--- DOCUMENTION ---<<<<<<-------- DOCUMENTION ------>>>>>>>>--- DOCUMENTION --->>>>>>>

/**
 * LazyLoadWrapper Component
 *
 * A client-side utility component that uses the Intersection Observer API
 * (via react-intersection-observer) to lazy-render its children only when
 * they are about to enter the viewport.
 *
 * Why use this?
 * - Improves performance by avoiding unnecessary rendering of off-screen elements.
 * - Useful for images, heavy components, or sections that don't need to load
 *   until the user scrolls near them.
 *
 * Props:
 * - rootMargin?: string → THIS PROP MEANS WHEN YOU SCROLL IN YOUR PAGE AND WHEN YOUR SCROLL IS 200px ABOVE THIS COMPONENT ONLY THAT TIME THIS COMPONENT WILL LOAD (default: "200px 0px").
 *
 * - triggerOnce?: boolean → Whether to load children only once (default: true).
 *
 * Example:
 * <LazyLoadWrapper rootMargin="200px 0px">
 *   <HeavyComponent />
 * </LazyLoadWrapper>
 *
 *  --> NOW UPPER COMPONENT WILL ONLY LOAD WHEN YOU SCROLL 200px ABOVE IT.
 */

// <<<<<<<<--- DOCUMENTION ---<<<<<<-------- DOCUMENTION ------>>>>>>>>--- DOCUMENTION --->>>>>>>
