import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { useTranslation } from 'next-i18next';
import Settings from './Settings';
import useStyles from '../header-style';
import link from '~/public/text/link';

function UserMenu(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { onToggleDark, onToggleDir } = props;
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const { t } = useTranslation('common');

  return (
    <div className={classes.userMenu}>
      { isDesktop && (
        <div>
          <Button href={link.saas2.login}>{t('login')}</Button>
          <Button variant="contained" color="primary" href={link.saas2.register}>{t('register')}</Button>
          <span className={classes.vDivider} />
        </div>
      )}
      <Settings toggleDark={onToggleDark} toggleDir={onToggleDir} />
    </div>
  );
}

UserMenu.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired
};

export default UserMenu;
