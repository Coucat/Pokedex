/* eslint-disable no-console */
import React, { forwardRef } from 'react';
import styled, {
  css,
} from 'styled-components';
import pokeballSvg from '../../../assets/pokeball.svg';

const SVG_ICON_MAP = {
  pokeballIcon: pokeballSvg,
};
const STYLE_MAP = {
  pokeballIcon: css`
          & > svg{
             fill: red;
             width : 25px;
             height: 25px;
          }
      `,
};

const hasOwn = (obj, key) => obj && Object.prototype.hasOwnProperty.call(obj, key);
const IconContainer = styled.span`
      display: inline-block;
    & > svg {
      vertical-align: middle;
    }
    ${({ name }) => (hasOwn(STYLE_MAP, name) ? STYLE_MAP[name] : '')};
  `;
const IconSvg = forwardRef((props, ref) => {
  // eslint-disable-next-line react/prop-types
  const { name } = props;
  console.log(SVG_ICON_MAP, name);
  if (!hasOwn(SVG_ICON_MAP, name)) {
    console.error(
      false,
      `Non-existent SVG icon: ${JSON.stringify(name)}`,
    );
    return null;
  }
  return (
    <IconContainer name={name} ref={ref} dangerouslySetInnerHTML={{ __html: SVG_ICON_MAP[name] }} />
  );
});
export default IconSvg;
