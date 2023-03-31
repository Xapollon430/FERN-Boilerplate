import React, { useState, Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import PaletteIcon from '@material-ui/icons/PaletteOutlined';
import PageIcon from '@material-ui/icons/LibraryBooksOutlined';
import WebIcon from '@material-ui/icons/Web';
import BackIcon from '@material-ui/icons/ArrowBack';
import Switch from '@material-ui/core/Switch';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import imgAPI from '~/public/images/imgAPI';
import themeList from '~/theme/palette';
import { reducer } from '~/theme/config';
import { Context } from './Store';
import useStyles from './palette-style';

const colorList = [
  'joker',
  'violeta',
  'purple',
  'coinz',
  'passion',
  'burgundy',
  'rose',
  'vampire',
  'sunset',
  'gold',
  'deepblue',
  'fresh',
  'mint',
  'smart',
  'oceanBlue',
  'leaf',
  'cloud',
  'queen',
  'botani',
  'money',
  'nature',
  'brown',
  'grayscale',
  'black'
];
function TabPanel(props) {
  const {
    children,
    value,
    index,
    ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function ThemePalette(props) {
  const opensans = 'http://oiron2.indisains.com';
  const roboto = 'http://oiron1.indisains.com';
  const montserrat = 'http://oiron.indisains.com';

  const [state, dispatch] = useContext(Context);

  const {
    changeColor,
    changeMode,
    changeDir,
    selectedColor,
    isDark,
    isRtl
  } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  
  const [openDrawer, setOpenDrawer] = useState(false);
  const [tab, setTab] = useState(0);

  const defaultDir = isRtl === 'rtl';
  const defaultMode = isDark === 'dark';

  const [checkedDark, setCheckedDark] = useState(defaultMode);
  const [checked2d3d, setChecked2d3d] = useState(true);
  const [checkedRtl, setCheckedRtl] = useState(defaultDir);

  const handleToggleOpen = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleToggleOpenTheme = () => {
    setOpenDrawer(!openDrawer);
    setTab(0);
  };

  const handleToggleOpenLayout = () => {
    setOpenDrawer(!openDrawer);
    setTab(1);
  };

  const handleToggleOpenExplore = () => {
    setOpenDrawer(!openDrawer);
    setTab(2);
  };

  const handleChangeTab = (event, selectedTab) => {
    setTab(selectedTab);
  };

  const handleClose = () => {
    setOpenDrawer(false);
  };

  const handleCheckMode = () => {
    setCheckedDark(!checkedDark);
    changeMode();
  };

  const handleCheckRtl = () => {
    setCheckedRtl(!checkedRtl);
    changeDir(checkedRtl ? 'ltr' : 'rtl');
  };

  const handleCheck2d3d = () => {
    setChecked2d3d(!checked2d3d);
    const img23d = document.getElementsByClassName('img-2d3d');
    for (let i = 0; i < img23d.length; i++) {
      if (checked2d3d) {
        img23d[i].setAttribute('src', img23d[i].getAttribute('data-2d'))
      } else {
        img23d[i].setAttribute('src', img23d[i].getAttribute('data-3d'))
      }
    }
  };

  return (
    <Fragment>
      <SwipeableDrawer
        anchor="right"
        open={openDrawer}
        onClose={handleClose}
        onOpen={handleToggleOpen}
        classes={{
          paper: classes.draweBg
        }}
      >
        <div className={classes.optWrap}>
          <AppBar position="absolute" color="default" classes={{ root: classes.appbar }}>
            <Hidden smUp>
              <IconButton onClick={handleClose}>
                <BackIcon />
              </IconButton>
            </Hidden>
            <Tabs value={tab} centered className={classes.tab} onChange={handleChangeTab} centered>
              <Tab label="Color" icon={<PaletteIcon />} classes={{ wrapper: classes.wrapper, root: classes.tabBtn }} />
              <Tab label="Layout" icon={<WebIcon />} classes={{ wrapper: classes.wrapper, root: classes.tabBtn }} />
              <Tab label="Theme" icon={<PageIcon />} classes={{ wrapper: classes.wrapper, root: classes.tabBtn }} />
            </Tabs>
          </AppBar>
          <TabPanel value={tab} index={0}>
            <div className={classes.themeSwitched}>
              <Paper className={classes.paper}>
                <Grid container>
                  <Grid item sm={6} xs={12} className={classes.marginBottom}>
                    <Typography variant="h6">Theme Mode</Typography>
                    <Grid container>
                      <Grid item>
                        <Typography variant="button" component="label">Light</Typography>
                      </Grid>
                      <Grid item>
                        <Switch
                          checked={checkedDark}
                          onChange={handleCheckMode}
                          value={checkedDark}
                          inputProps={{ 'aria-label': 'checkbox' }}
                          classes={{
                            thumb: classes.thumbSwitch,
                            track: classes.trackSwitch
                          }}
                        />
                      </Grid>
                      <Grid item>
                        <Typography variant="button" component="label">Dark</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <Typography variant="h6">Layout Direction</Typography>
                    <Grid container>
                      <Grid item>
                        <Typography variant="button" component="label">LTR</Typography>
                      </Grid>
                      <Grid item>
                        <Switch
                          checked={checkedRtl}
                          onChange={handleCheckRtl}
                          value={checkedRtl}
                          inputProps={{ 'aria-label': 'checkbox' }}
                          classes={{
                            thumb: classes.thumbSwitch,
                            track: classes.trackSwitch
                          }}
                        />
                      </Grid>
                      <Grid item>
                        <Typography variant="button" component="label">RTL</Typography>
                        <Typography variant="caption" component="p"><i>Best view in arabic</i></Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </div>
            <div className={classes.themeSwitched}>
              <Paper className={classes.paper}>
                <Grid container>
                  <Grid item sm={6} xs={12} className={classes.marginBottom}>
                    <Typography variant="h6">Theme Illustration</Typography>
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <Grid container>
                      <Grid item>
                        <Typography variant="button" component="label">2D</Typography>
                      </Grid>
                      <Grid item>
                        <Switch
                          checked={checked2d3d}
                          onChange={handleCheck2d3d}
                          value={checked2d3d}
                          inputProps={{ 'aria-label': 'checkbox' }}
                          classes={{
                            thumb: classes.thumbSwitch,
                            track: classes.trackSwitch
                          }}
                        />
                      </Grid>
                      <Grid item>
                        <Typography variant="button" component="label">3D</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </div>
            <div className={classes.themeColor}>
              <Paper className={classes.paper}>
                <Typography variant="h6">Color Combinations</Typography>
                <Grid container spacing={3}>
                  {colorList.map((clr, index) => (
                    <Grid key={index.toString()} item sm={3} xs={6}>
                      <Tooltip title={clr} placement="top">
                        <Button fullWidth className={clsx(classes.swatch, selectedColor === clr && classes.active)} onClick={() => changeColor(clr)}>
                          <span
                            className={classes.primary}
                            style={{
                              background: themeList[clr].palette.primary.main,
                            }}
                          >
                            &nbsp;
                          </span>
                          <span
                            className={classes.secondary}
                            style={{
                              background: themeList[clr].palette.secondary.main,
                            }}
                          >
                            &nbsp;
                          </span>
                          <span
                            className={classes.accent}
                            style={{
                              background: themeList[clr].palette.accent.main,
                            }}
                          >
                            &nbsp;
                          </span>
                        </Button>
                      </Tooltip>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </div>
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <div className={classes.themeSwitched}>
              <Paper className={classes.paper}>
                <Typography variant="h6">Header Layout</Typography>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Box mb={8}>
                      <ButtonBase
                        onClick={() => dispatch({ type: 'set_header', payload: 'mixed' })}
                        className={clsx(state.header === 'mixed' ? classes.active : '', classes.lyBtn)}
                      >
                        <img src="/images/showcase/header_default.jpg" alt="default" />
                        Mixed
                      </ButtonBase>
                    </Box>
                    <Box mb={8}>
                      <ButtonBase
                        onClick={() => dispatch({ type: 'set_header', payload: 'basic' })}
                        className={clsx(state.header === 'basic' ? classes.active : '', classes.lyBtn)}
                      >
                        <img src="/images/showcase/header_basic.jpg" alt="basic" />
                        Basic
                      </ButtonBase>
                    </Box>
                    <Box mb={8}>
                      <ButtonBase
                        onClick={() => dispatch({ type: 'set_header', payload: 'search' })}
                        className={clsx(state.header === 'search' ? classes.active : '', classes.lyBtn)}
                      >
                        <img src="/images/showcase/header_search.jpg" alt="search" />
                        Search
                      </ButtonBase>
                    </Box>
                    <Box mb={8}>
                      <ButtonBase
                        onClick={() => dispatch({ type: 'set_header', payload: 'navscroll' })}
                        className={clsx(state.header === 'navscroll' ? classes.active : '', classes.lyBtn)}
                      >
                        <img src="/images/showcase/header_nav.jpg" alt="navscroll" />
                        Scroll Nav
                      </ButtonBase>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box mb={8}>
                      <ButtonBase
                        onClick={() => dispatch({ type: 'set_header', payload: 'droplist' })}
                        className={clsx(state.header === 'droplist' ? classes.active : '', classes.lyBtn)}
                      >
                        <img src="/images/showcase/header_droplist.jpg" alt="droplist" />
                        Dropdown List
                      </ButtonBase>
                    </Box>
                    <Box mb={8}>
                      <ButtonBase
                        onClick={() => dispatch({ type: 'set_header', payload: 'mega' })}
                        className={clsx(state.header === 'mega' ? classes.active : '', classes.lyBtn)}
                      >
                        <img src="/images/showcase/header_mega.jpg" alt="mega menu" />
                        Mega Menu
                      </ButtonBase>
                    </Box>
                    <Box mb={8}>
                      <ButtonBase
                        onClick={() => dispatch({ type: 'set_header', payload: 'hamburger' })}
                        className={clsx(state.header === 'hamburger' ? classes.active : '', classes.lyBtn)}
                      >
                        <img src="/images/showcase/header_hamburger.jpg" alt="hamburger" />
                        Hamburger
                      </ButtonBase>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </div>
            <div className={classes.themeSwitched}>
              <Paper className={classes.paper}>
                <Typography variant="h6">Footer Layout</Typography>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Box mb={8}>
                      <ButtonBase
                        onClick={() => dispatch({ type: 'set_footer', payload: 'sitemap' })}
                        className={clsx(state.footer === 'sitemap' ? classes.active : '', classes.lyBtn)}
                      >
                        <img src="/images/showcase/footer_sitemap.jpg" alt="sitemap" />
                        Sitemap
                      </ButtonBase>
                    </Box>
                    <Box mb={8}>
                      <ButtonBase
                        onClick={() => dispatch({ type: 'set_footer', payload: 'basic' })}
                        className={clsx(state.footer === 'basic' ? classes.active : '', classes.lyBtn)}
                      >
                        <img src="/images/showcase/footer_basic.jpg" alt="basic" />
                        Basic
                      </ButtonBase>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box mb={8}>
                      <ButtonBase
                        onClick={() => dispatch({ type: 'set_footer', payload: 'blog' })}
                        className={clsx(state.footer === 'blog' ? classes.active : '', classes.lyBtn)}
                      >
                        <img src="/images/showcase/footer_blog.jpg" alt="blog" />
                        Blog
                      </ButtonBase>
                    </Box>
                    <Box mb={8}>
                      <ButtonBase
                        onClick={() => dispatch({ type: 'set_footer', payload: 'contact' })}
                        className={clsx(state.footer === 'contact' ? classes.active : '', classes.lyBtn)}
                      >
                        <img src="/images/showcase/footer_contact.jpg" alt="contact" />
                        Contact
                      </ButtonBase>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </div>
            <div className={classes.themeSwitched}>
              <Paper className={classes.paper}>
                <Typography variant="h6">Bottom Corner</Typography>
                <Grid container spacing={3}>
                  <Grid item sm={4} xs={6}>
                    <ButtonBase
                      onClick={() => dispatch({ type: 'set_corner', payload: 'chat' })}
                      className={clsx(state.corner === 'chat' ? classes.active : '', classes.lyBtn)}
                    >
                      <img src="/images/showcase/chat.jpg" alt="chat" />
                      Chat Panel
                    </ButtonBase>
                  </Grid>
                  <Grid item sm={4} xs={6}>
                    <ButtonBase
                      onClick={() => dispatch({ type: 'set_corner', payload: 'nav' })}
                      className={clsx(state.corner === 'nav' ? classes.active : '', classes.lyBtn)}
                    >
                      <img src="/images/showcase/pagenav.jpg" alt="nav" />
                      Page Navigation
                    </ButtonBase>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </TabPanel>
          <TabPanel value={tab} index={2}>
            <div className={classes.explore}>
              <ul>
                <li>
                  <a href={opensans + '/saas'} target="_blank">
                    <figure>
                      <img src={imgAPI.showcase[8]} alt="SaaS" />
                    </figure>
                    SaaS
                  </a>
                </li>
                <li>
                  <a href={roboto + '/agency'} target="_blank">
                    <figure>
                      <img src={imgAPI.showcase[2]} alt="movie" />
                    </figure>
                    Agency
                  </a>
                </li>
                <li>
                  <a href={montserrat + '/crypto'} target="_blank">
                    <figure>
                      <img src={imgAPI.showcase[1]} alt="education" />
                    </figure>
                    Cryptocurrency
                  </a>
                </li>
                <li>
                  <a href={montserrat + '/cloud'} target="_blank">
                    <figure>
                      <img src={imgAPI.showcase[6]} alt="mobile apps" />
                    </figure>
                    Cloud
                  </a>
                </li>
                <li>
                  <a href={roboto + '/education'} target="_blank">
                    <figure>
                      <img src={imgAPI.showcase[4]} alt="saas" />
                    </figure>
                    Education
                  </a>
                </li>
                <li>
                  <a href={montserrat + '/fintech'} target="_blank">
                    <figure>
                      <img src={imgAPI.showcase[7]} alt="agency" />
                    </figure>
                    Fintech
                  </a>
                </li>
                <li>
                  <a href={opensans + '/social-apps'} target="_blank">
                    <figure>
                      <img src={imgAPI.showcase[11]} alt="agency" />
                    </figure>
                    Social Media
                  </a>
                </li>
                <li>
                  <a href={roboto + '/marketing'} target="_blank">
                    <figure>
                      <img src={imgAPI.showcase[3]} alt="crypto" />
                    </figure>
                    Marketing
                  </a>
                </li>
                <li>
                  <a href={roboto + '/medical'} target="_blank">
                    <figure>
                      <img src={imgAPI.showcase[5]} alt="fashion" />
                    </figure>
                    Medical
                  </a>
                </li>
                <li>
                  <a href={opensans + '/retail'} target="_blank">
                    <figure>
                      <img src={imgAPI.showcase[9]} alt="hosting" />
                    </figure>
                    Retail
                  </a>
                </li>
                <li>
                  <a href={opensans + '/saas2'} target="_blank">
                    <figure>
                      <img src={imgAPI.showcase[10]} alt="architect" />
                    </figure>
                    SaaS2
                  </a>
                </li>
                <li>
                  <a href="https://ilhammeidi.github.io/oiron-docs/" rel="noopener noreferrer" target="_blank">
                    <figure>
                      <img src={imgAPI.showcase[12]} alt="documentation" />
                    </figure>
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
          </TabPanel>
        </div>
      </SwipeableDrawer>
      <div className={clsx(classes.btn, openDrawer && classes.active)}>
        <IconButton onClick={handleToggleOpenTheme}>
          <PaletteIcon />
        </IconButton>
        <IconButton onClick={handleToggleOpenLayout}>
          <WebIcon />
        </IconButton>
        <IconButton onClick={handleToggleOpenExplore}>
          <PageIcon />
        </IconButton>
      </div>
    </Fragment>
  );
}

ThemePalette.propTypes = {
  changeColor: PropTypes.func.isRequired,
  changeMode: PropTypes.func.isRequired,
  changeDir: PropTypes.func.isRequired,
  selectedColor: PropTypes.string.isRequired,
  isDark: PropTypes.string.isRequired,
  isRtl: PropTypes.string.isRequired
};

export default ThemePalette;
