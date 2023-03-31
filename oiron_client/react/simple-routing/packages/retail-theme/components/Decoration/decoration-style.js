import { makeStyles } from '@material-ui/core/styles';

const decoPageLeft = '/images/retail/deco-page-left.svg';
const decoPageRight = '/images/retail/deco-page-right.svg';
const decoForm = '/images/retail/deco-form.svg';

const alignDeco = {
  width: 555,
  height: 442,
  background: `url(${decoForm}) no-repeat transparent`,
  top: '50%',
};

const decorationStyles = makeStyles(() => ({
  leftDeco: {
    position: 'absolute'
  },
  rightDeco: {
    position: 'absolute'
  },
  formDeco: {
    opacity: 0.1,
    '& $leftDeco': {
      left: -350,
      transform: 'translateY(-50%)',
      ...alignDeco,
    },
    '& $rightDeco': {
      right: -300,
      transform: 'translateY(-50%) rotate(90deg)',
      ...alignDeco,
    }
  },
  pageDeco: {
    opacity: 0.3,
    '& $leftDeco': {
      width: 360,
      height: 230,
      background: `url(${decoPageLeft}) no-repeat transparent`,
      left: -75,
      top: '50%',
      transform: 'translateY(-50%)'
    },
    '& $rightDeco': {
      width: 330,
      height: 250,
      background: `url(${decoPageRight}) no-repeat transparent`,
      right: 0,
      top: '50%',
      transform: 'translateY(-50%)'
    }
  },
}));

export default decorationStyles;
