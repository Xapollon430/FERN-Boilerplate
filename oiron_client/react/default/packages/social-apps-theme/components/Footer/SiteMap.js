import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import { useTranslation } from 'next-i18next';
import Decoration from './Decoration';
import logo from '~/public/images/logo-social.svg';
import brand from '~/public/text/brand';
import SelectLang from '../LangSwitch/Select';
import { useTextAlign } from '~/theme/common';
import useStyles from './sitemap-style';

function Copyright() {
  return (
    <Typography variant="body2" display="block">
      &copy;&nbsp;
      {brand.social.footerText}
    </Typography>
  );
}

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
    link: ['#team', '#history', '#contact-us', '#locations'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    link: ['#resource', '#resource-name', '#another-resource', '#final-resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
    link: ['#privacy-policy', '#terms-of-use'],
  },
];

function Footer(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Translation Function
  const { bg, toggleDir } = props;
  const { t } = useTranslation('common');

  const classes = useStyles();
  const align = useTextAlign();

  return (
    <footer className={clsx(classes.footer, bg ? classes.hasBg : '')}>
      <Decoration bg={bg} />
      <Container className={classes.root} fixed={isMobile}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <div className={classes.logo}>
              <img src={logo} alt="logo" />
              <Typography variant="h6" color="textPrimary">
                {brand.social.projectName}
              </Typography>
            </div>
            <Typography color="textPrimary" className={classes.footerDesc} gutterBottom>
              {t('social-landing.banner_title')}
              .&nbsp;
              {t('social-landing.banner_desc')}
            </Typography>
            {isDesktop && <Copyright />}
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container justifyContent="space-evenly">
              {footers.map(footer => (
                <Grid item xs={12} md={3} key={footer.title} className={classes.siteMapItem}>
                  {isDesktop && (
                    <div>
                      <Typography variant="h6" className={classes.title} color="textPrimary" gutterBottom>
                        {footer.title}
                      </Typography>
                      <ul>
                        {footer.description.map((item, index) => (
                          <li key={item}>
                            <Link href={footer.link[index]} variant="subtitle1" color="textSecondary">
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {isMobile && (
                    <Accordion
                      square
                      classes={{
                        root: classes.accordionRoot,
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon className={classes.accordionIcon} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        classes={{
                          content: classes.accordionContent,
                        }}
                      >
                        <strong>
                          {footer.title}
                        </strong>
                      </AccordionSummary>
                      <AccordionDetails>
                        <ul>
                          {footer.description.map((item, index) => (
                            <li key={item}>
                              <Link href={footer.link[index]} variant="subtitle1" color="textSecondary">
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionDetails>
                    </Accordion>
                  )}
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className={classes.socmed}>
              <IconButton aria-label="FB" className={classes.margin} size="small">
                <i className="ion-social-twitter" />
              </IconButton>
              <IconButton aria-label="TW" className={classes.margin} size="small">
                <i className="ion-social-facebook" />
              </IconButton>
              <IconButton aria-label="IG" className={classes.margin} size="small">
                <i className="ion-social-instagram" />
              </IconButton>
              <IconButton aria-label="LI" className={classes.margin} size="small">
                <i className="ion-social-linkedin" />
              </IconButton>
            </div>
            <SelectLang toggleDir={toggleDir} />
          </Grid>
        </Grid>
        {isMobile && (
          <div className={align.textCenter}>
            <Box p={4}>
              <Copyright />
            </Box>
          </div>
        )}
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  toggleDir: PropTypes.func,
  bg: PropTypes.bool
};

Footer.defaultProps = {
  toggleDir: () => {},
  bg: false
};

export default Footer;
