// For PNG files
declare module "*.png" {
  const value: any;
  export = value;
}

// For SVG files
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}
