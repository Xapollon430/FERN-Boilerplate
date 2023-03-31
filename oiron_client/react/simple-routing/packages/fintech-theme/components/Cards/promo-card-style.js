import { makeStyles } from '@material-ui/core/styles';

const promoCardStyle = makeStyles(theme => ({
  card: {
    '& figure': {
      margin: 0
    }
  },
  promoCard: {
    maxWidth: 300,
    [theme.breakpoints.up('sm')]: {
      maxWidth: 360
    },
    '& $card': {
      borderRadius: '40px 10px 40px 40px !important',
      overflow: 'hidden',
      '& figure': {
        borderBottomRightRadius: 100,
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        height: 190,
        '& img': {
          width: '100%',
          height: 'auto',
          minHeight: '100%'
        }
      }
    }
  },
  property: {
    padding: theme.spacing(2),
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(1, 4, 4)
    },
  },
  promoTitle: {
    fontSize: 18,
    fontWeight: theme.typography.fontWeightMedium,
    paddingBottom: theme.spacing(2),
  },
  dateLine: {
    marginTop: 1,
    color: theme.palette.text.secondary
  }
}));

export default promoCardStyle;
