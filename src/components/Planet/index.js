import { PixiComponent } from '@inlet/react-pixi';
import { Graphics } from 'pixi.js';

const Planet = PixiComponent('Circle', {
  create: props => new Graphics(),
  applyProps: (instance, _, props) => {
    const { x, y, radius, fill } = props;

    instance.clear();
    instance.beginFill(fill);
    instance.drawCircle(x, y, radius);
    instance.endFill();
  },
});

export default Planet
