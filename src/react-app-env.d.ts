/// <reference types="react-scripts" />

declare module "animejs" {
  export function animate(targets: any, props: any): any;
  export function createTimeline(options?: any): any;
  export function stagger(value: any, options?: any): any;
  export const svg: any;
  export const eases: any;
  export const utils: any;
}

