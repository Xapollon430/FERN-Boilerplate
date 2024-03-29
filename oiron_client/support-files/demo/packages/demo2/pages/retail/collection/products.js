import React, { Fragment, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import ProductCards from '../../../components/retail/Cards/ProductCard';
import Filter from '../../../components/retail/Filter/Filter';
import Sorter from '../../../components/retail/Filter/Sorter';
import Search from '../../../components/retail/Filter/Search';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import products from '~/public/api/products';
import { useSpacing, usePopup } from '~/theme/common';
import link from '~/public/text/link';
import Header from '../../../components/retail/@Custom/Header';
import Footer from '../../../components/retail/@Custom/Footer';
// Theme Wrapper
import Retail from '../../../components/wrapper/Retail';

const checkAll = [
  'check-a',
  'check-b',
  'check-c',
  'check-d',
  'check-e',
  'check-f'
];

const Transition = React.forwardRef(function Transition(props, ref) { // eslint-disable-line
  return <Slide direction="up" ref={ref} {...props} />;
});

function ProductContent(props) {
  const { onToggleDark, onToggleDir } = props;

  const classes = useSpacing();
  const popup = usePopup();

  const isDesktop = useMediaQuery(theme => theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('sm'));

  const [openFilter, setOpenFilter] = useState(false);

  const [toggleView, setView] = useState('grid');
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('all');
  const [rating, setRating] = useState(0);
  const [radio, setRadio] = useState('all');
  const [check, setCheck] = useState(checkAll);
  const [range, setRange] = useState({
    from: 0,
    to: 100
  });
  const [tag, setTag] = useState(['tag-one', 'tag-two', 'tag-three', 'tag-four']);
  const [sortBySelected, setBySelected] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [sortFrom, setFrom] = useState(-1);
  const [sortTo, setTo] = useState(1);

  const handleFilterOpen = () => {
    setOpenFilter(true);
  };

  const handleFilterClose = () => {
    setOpenFilter(false);
  };

  const handleGetRange = val => {
    setRange(val);
  };

  const handleSortBy = val => {
    setBySelected(val);
    switch (val) {
      case 'title-asc':
        setSortBy('title');
        setFrom(1);
        setTo(-1);
        break;
      case 'title-desc':
        setSortBy('title');
        setFrom(-1);
        setTo(1);
        break;
      case 'price-asc':
        setSortBy('price');
        setFrom(-1);
        setTo(1);
        break;
      default:
        setSortBy('price');
        setFrom(1);
        setTo(-1);
    }
  };

  const filteredItems = () => {
    // Compare same tag
    const intersection = (firstArray, secondArray) => firstArray
      .filter(element => secondArray.includes(element));

    // Check is all categories checked
    const checkFilter = (item, filterData) => {
      if (filterData !== 'all') {
        return item === filterData;
      }
      return true;
    };

    return products
      .filter(cardItem => checkFilter(cardItem.category, category)
        && checkFilter(cardItem.radio, radio)
        && cardItem.price >= range.from
        && cardItem.price <= range.to
        && cardItem.rating >= rating
        && check.indexOf(cardItem.check) > -1
        && intersection(tag, cardItem.tag).length > 0
      )
      .sort(
        (a, b) => {
          if (a[sortBy] > b[sortBy]) {
            return sortFrom;
          }
          return sortTo;
        }
      );
  };

  return (
    <Fragment>
      <Dialog fullScreen open={openFilter} onClose={handleFilterClose} TransitionComponent={Transition}>
        <AppBar className={popup.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleFilterClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={popup.title}>
              Filter
            </Typography>
            <Button autoFocus color="inherit" onClick={handleFilterClose}>
              Done
            </Button>
          </Toolbar>
        </AppBar>
        <Container maxWidth="sm">
          <Box pt={10}>
            <Filter
              filterCategory={category}
              changeCategory={setCategory}
              filterRating={rating}
              changeRating={setRating}
              filterRadio={radio}
              changeRadio={setRadio}
              filterCheck={check}
              changeCheck={setCheck}
              checkAll={() => setCheck(checkAll)}
              changeRange={handleGetRange}
              filterTag={tag}
              changeTag={setTag}
            />
          </Box>
        </Container>
      </Dialog>
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <Search value={keyword} updateValue={setKeyword} />
        <div className={classes.containerWrap}>
          <section>
            <Container>
              <Sorter
                view={toggleView}
                resultLength={filteredItems().length}
                sortBySelected={sortBySelected}
                sortBy={handleSortBy}
                switchView={setView}
                openFilter={handleFilterOpen}
              />
            </Container>
            <Box my={2} mx={{ sm: 2 }}>
              <Grid container spacing={isDesktop ? 3 : 0}>
                {isDesktop && (
                  <Grid item md={3} lg={2}>
                    <Filter
                      filterCategory={category}
                      changeCategory={setCategory}
                      filterRating={rating}
                      changeRating={setRating}
                      filterRadio={radio}
                      changeRadio={setRadio}
                      filterCheck={check}
                      changeCheck={setCheck}
                      checkAll={() => setCheck(checkAll)}
                      changeRange={handleGetRange}
                      filterTag={tag}
                      changeTag={setTag}
                    />
                  </Grid>
                )}
                <Grid item lg={10} md={9}>
                  <Grid container justify="center">
                    {filteredItems().length < 1 && (
                      <Grid item sm={12}>
                        <h3>Not found</h3>
                      </Grid>
                    )}
                    {filteredItems()
                      .map((item, index) => item.title.toLowerCase()
                        .indexOf(keyword) > -1 && (
                          <Grid
                            item
                            key={index.toString()}
                            lg={toggleView === 'grid' ? 4 : 12}
                            sm={toggleView === 'grid' ? 6 : 12}
                          >
                            <Box
                              display={toggleView === 'grid' ? 'flex' : 'block'}
                              justifyContent={toggleView === 'grid' ? 'center' : 'flex-start'}
                              mb={4}
                              px={2}
                            >
                              <ProductCards
                                rating={item.rating}
                                price={item.price}
                                title={item.title}
                                desc={`Category: ${item.category} ~ Tag: ${item.tag} ~ Check: ${item.check} ~ Radio: ${item.radio}`}
                                orientation={toggleView === 'grid' ? 'portrait' : 'landscape'}
                                img={item.img}
                                type="over"
                                href={link.retail.productDetail}
                              />
                            </Box>
                          </Grid>
                      )
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </section>
        </div>
        <div className={isTablet ? classes.spaceTopShort : ''}>
          <Footer toggleDir={onToggleDir} />
        </div>
      </div>
    </Fragment>
  );
}

function Products(props) {
  return (
    <div>
      <Retail pageName="Products">
        <ProductContent {...props} />
      </Retail>
    </div>
  );
}

Products.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Products;
