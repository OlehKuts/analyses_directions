import React from "react";
import T from "prop-types";
import { iconsConfig } from "./iconsConfig";
// import ".../styles.css";

export const Icon = ({ name, ...props }) => {
  const IconC = iconsConfig[name];
  return <IconC {...props} />;
};

Icon.propTypes = {
  name: T.string.isRequired,
  color: T.string,
  size: T.string
};

Icon.defaultProps = {
  name: "",
  color: "black",
  size: "14px"
};
