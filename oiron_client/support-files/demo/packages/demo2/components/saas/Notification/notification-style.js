import { makeStyles } from '@material-ui/core/styles';

const notificationStyles = makeStyles(theme => ({
  notification: {
    width: '95%',
    [theme.breakpoints.up('lg')]: {
      width: '80%',
    },
    '& > div': {
      width: '100%',
      background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(1, 4),
      },
      '& > div:first-child': {
        [theme.breakpoints.up('sm')]: {
          flex: 1,
          marginRight: theme.spacing(2)
        },
        [theme.breakpoints.down('xs')]: {
          textAlign: 'center'
        }
      }
    }
  },
  button: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 150,
    },
  },
  action: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      padding: 0,
      margin: 0
    }
  }
}));

export default notificationStyles;
