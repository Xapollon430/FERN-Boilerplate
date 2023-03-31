import { makeStyles } from '@material-ui/core/styles';

const liquidDeco = '/images/social/liquid-deco.svg';
const deco = {
  position: 'absolute',
  width: 1122,
  height: 950,
  opacity: 0.1,
  background: `url(${liquidDeco}) no-repeat transparent`,
  backgroundSize: '100%'
};

const decorationStyles = makeStyles(() => ({
  pageDeco: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    bottom: 0,
    left: 0,
    overflow: 'hidden'
  },
  topDeco: {
    ...deco,
    top: -300,
    right: -800
  },
  bottomDeco: {
    ...deco,
    bottom: -800,
    left: -120
  },
}));

export default decorationStyles;
