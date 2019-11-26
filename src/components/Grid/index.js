import { PixiComponent } from '@inlet/react-pixi';
import { Graphics } from 'pixi.js';

const Grid = PixiComponent('Circle', {
  create: props => new Graphics(),
  applyProps: (instance, _, props) => {
    const { gridCords, color } = props;
    this.stage.removeChild(this.gameMap);
    instance.clear();

    for(const y in gridCords) {
      for(const x in y) {
        instance.lineStyle(0, 0x0000FF, 1);
        // instance.beginFill(PIXEL COLOR HERE, 1);
        instance.drawRect(x+20, y+20, 1, 1);
      }
    }
    this.stage.addChild(instance);
  },
});

export default Grid
