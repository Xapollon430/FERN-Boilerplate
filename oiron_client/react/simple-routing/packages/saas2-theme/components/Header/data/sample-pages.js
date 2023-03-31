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
        link: link.saas2.about
      },
      {
        name: 'team',
        link: link.saas2.team
      },
      {
        name: 'blog',
        link: link.saas2.blog
      },
      {
        name: 'blog detail',
        link: link.saas2.blogDetail
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
        link: link.saas2.login
      },
      {
        name: 'register',
        link: link.saas2.register
      },
      {
        name: 'contact',
        link: link.saas2.contact
      },
      {
        name: 'contact map',
        link: link.saas2.contactMap
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
        link: link.saas2.card
      },
      {
        name: 'product',
        link: link.saas2.product
      },
      {
        name: 'product detail',
        link: link.saas2.productDetail
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
        link: link.saas2.pricing
      },
      {
        name: 'faq',
        link: link.saas2.faq
      },
      {
        name: 'maintenance',
        link: link.saas2.maintenance
      },
      {
        name: 'coming soon',
        link: link.saas2.comingSoon
      },
      {
        name: 'error',
        link: '/error'
      }
    ]
  }
];

export default sample;
