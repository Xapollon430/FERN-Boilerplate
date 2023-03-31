import imgAPI from '~/public/images/imgAPI';
import link from '~/public/text/link';

const sample = [
  {
    id: 'company',
    name: 'company',
    thumb: imgAPI.ui[3],
    child: [
      {
        name: 'about',
        link: link.saas.about
      },
      {
        name: 'team',
        link: link.saas.team
      },
      {
        name: 'blog',
        link: link.saas.blog
      },
      {
        name: 'blog detail',
        link: link.saas.blogDetail
      }
    ],
  },
  {
    id: 'form',
    name: 'Form',
    thumb: imgAPI.ui[1],
    child: [
      {
        name: 'login',
        link: link.saas.login
      },
      {
        name: 'register',
        link: link.saas.register
      },
      {
        name: 'contact',
        link: link.saas.contact
      },
      {
        name: 'contact map',
        link: link.saas.contactMap
      }
    ],
  },
  {
    id: 'items',
    name: 'items',
    thumb: imgAPI.ui[0],
    child: [
      {
        name: 'card',
        link: link.saas.card
      },
      {
        name: 'product',
        link: link.saas.product
      },
      {
        name: 'product detail',
        link: link.saas.productDetail
      }
    ],
  },
  {
    id: 'utilities',
    name: 'utilities',
    thumb: imgAPI.ui[2],
    child: [
      {
        name: 'pricing',
        link: link.saas.pricing
      },
      {
        name: 'faq',
        link: link.saas.faq
      },
      {
        name: 'maintenance',
        link: link.saas.maintenance
      },
      {
        name: 'coming soon',
        link: link.saas.comingSoon
      },
      {
        name: 'error',
        link: '/error'
      }
    ]
  }
];

export default sample;
