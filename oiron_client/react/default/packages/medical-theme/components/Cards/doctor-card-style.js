import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {},
  divider: {},
  photo: {},
  nameCard: {},
  profile: {
    overflow: 'visible',
    '& $divider': {
      borderBottom: 'none',
      borderColor: theme.palette.divider,
      background: 'none',
      margin: theme.spacing(0, 2)
    }
  },
  personBlock: {
    display: 'flex',
    '& $photo': {
      width: 80,
      height: 80,
      position: 'relative',
      borderRadius: '0 50% 50% 50%',
      top: -8,
      left: -8,
      '& img': {
        width: '100%'
      }
    },
    '& $nameCard': {
      padding: theme.spacing(1)
    },
    '& h4': {
      fontSize: 22,
      margin: 0,
      fontWeight: theme.typography.fontWeightRegular
    },
    '& p': {
      fontSize: 16,
      marginBottom: theme.spacing(2),
      color: theme.palette.text.secondary
    }
  },
  action: {
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    '& $button': {
      height: 36,
      [theme.breakpoints.up('sm')]: {
        width: 100
      },
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        marginTop: theme.spacing(2)
      }
    }
  },
  property: {
    '& span': {
      color: theme.palette.text.disabled,
      fontSize: 14,
      display: 'inline-block',
      marginRight: theme.spacing(4),
      '& i': {
        fontSize: 24
      }
    }
  },
}));

export default useStyles;
