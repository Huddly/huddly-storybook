import React from "react";
import styled from "styled-components";

interface TextProps {
  /**
   * children description.
   */
  children: any;

  /**
   * bold description.
   */
  bold: boolean;

  /**
   * color description.
   */
  color: "black" | "purple";
}

export const Wrapper = styled.div`
  /* Your styles here */
`;

/**
 * Text component
 */
export const Text = ({ children, bold, color }: TextProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Text;
