/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Bug,
  CrossIcon,
  Dark,
  DownIcon,
  Dragon,
  Electric,
  Fairy,
  Fighting,
  Fire,
  Flying,
  Ghost,
  Grass,
  Ground,
  Ice,
  Normal,
  PkIcon,
  Poison,
  Psychic,
  Rock,
  Steel,
  UpIcon,
  Water,
} from './styles';

function Icon({
  name,
  width,
  height,
  fill,
  margin,
  selected,
}) {
  switch (name.toLowerCase()) {
    case 'bug':
      return <Bug width={width} height={height} fill={fill} margin={margin} selected={selected} />;
    case 'dark':
      return <Dark width={width} height={height} fill={fill} margin={margin} selected={selected} />;
    case 'dragon':
      return <Dragon width={width} height={height} fill={fill} margin={margin} selected={selected} />;
    case 'electric':
      return <Electric width={width} height={height} fill={fill} margin={margin} selected={selected} />;
    case 'fairy':
      return <Fairy width={width} height={height} fill={fill} margin={margin} selected={selected} />;
    case 'fighting':
      return <Fighting width={width} height={height} fill={fill} margin={margin} selected={selected} />;
    case 'fire':
      return <Fire width={width} height={height} fill={fill} margin={margin} selected={selected} />;
    case 'flying':
      return <Flying width={width} height={height} fill={fill} margin={margin} selected={selected} />;
    case 'ghost':
      return <Ghost width={width} height={height} fill={fill} margin={margin} selected={selected} />;
    case 'grass':
      return <Grass width={width} height={height} fill={fill} margin={margin} selected={selected} />;
    case 'ground':
      return <Ground width={width} height={height} fill={fill} margin={margin} selected={selected} />;
    case 'ice':
      return <Ice width={width} height={height} fill={fill} margin={margin} selected={selected} />;
    case 'normal':
      return <Normal width={width} height={height} fill={fill} margin={margin} selected={selected} />;
    case 'poison':
      return <Poison width={width} height={height} fill={fill} margin={margin} selected={selected} />;
    case 'psychic':
      return <Psychic width={width} height={height} fill={fill} margin={margin} selected={selected} />;
    case 'rock':
      return <Rock width={width} height={height} fill={fill} margin={margin} selected={selected} />;
    case 'steel':
      return <Steel width={width} height={height} fill={fill} margin={margin} selected={selected} />;
    case 'water':
      return <Water width={width} height={height} fill={fill} margin={margin} selected={selected} />;
    case 'pkicon':
      return <PkIcon width={width} height={height} fill={fill} margin={margin} selected={selected} />;
    case 'upicon':
      return <UpIcon width={width} height={height} fill={fill} margin={margin} selected={selected} />;
    case 'downicon':
      return <DownIcon width={width} height={height} fill={fill} margin={margin} selected={selected} />;
    case 'crossicon':
      return <CrossIcon width={width} height={height} fill={fill} margin={margin} selected={selected} />;
    default:
      return <div />;
  }
}
Icon.defaultProps = {
  width: '25px',
  height: '25px',
  fill: '#8F9396',
  margin: '0',
  selected: false,
};
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
  margin: PropTypes.string,
  selected: PropTypes.bool,
};
export default Icon;
