/**
 * GSAP Animation utilities and helpers
 */
import gsap from "gsap";

export const animateElement = (
  element: HTMLElement | string,
  config: {
    duration: number;
    delay?: number;
    ease?: string;
    [key: string]: unknown;
  }
) => {
  return gsap.to(element, config);
};

export const staggerAnimation = (
  elements: HTMLElement[] | string,
  config: {
    duration: number;
    stagger: number;
    ease?: string;
    [key: string]: unknown;
  }
) => {
  return gsap.to(elements, config);
};

export const createScrollTrigger = (
  _element: HTMLElement | string,
  animation: gsap.core.Tween
) => {
  return animation;
};

export const resetAnimation = (element: HTMLElement | string) => {
  gsap.set(element, { clearProps: "all" });
};

export const killAllAnimations = () => {
  gsap.globalTimeline.clear();
};
