import { useState } from 'react';
import { Grid } from '../Grid';
import { PanTilt } from '.';
import { Slider } from '../Slider';
import { IconButton } from '../IconButton';
import { Plus, Minus } from '@huddly/frokost/havre';

export default { component: PanTilt };

export const Primary = () => {
  const updatePosition = (x: number, y: number) => {
    console.log(x, y);
  };
  const zoomMin = 0;
  const zoomMax = 1;
  const [zoom, setZoom] = useState(zoomMin);
  const onZoom = (value: number) => {
    setZoom(value);
  };
  const zoomOut = () => {
    const value = Math.max(zoomMin, zoom - 0.1);
    setZoom(value);
  };
  const zoomIn = () => {
    const value = Math.min(zoomMax, zoom + 0.1);
    setZoom(value);
  };

  return (
    <Grid alignItems='start' columns='320px 290px' columnGap={4}>
      <PanTilt updatePosition={updatePosition} zoom={zoom} width={320} />
      <nav>
        <IconButton icon={Plus} onClick={zoomIn} />
        <Slider
          min={zoomMin}
          max={zoomMax}
          value={zoom}
          onChange={onZoom}
          resolution={0.1}
          vertical={true}
          length={195}
        />
        <IconButton icon={Minus} onClick={zoomOut} />
      </nav>
    </Grid>
  );
};
