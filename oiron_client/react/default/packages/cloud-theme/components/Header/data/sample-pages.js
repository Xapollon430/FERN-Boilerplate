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
        link: link.cloud.about
      },
      {
        name: 'team',
        link: link.cloud.team
      },
      {
        name: 'blog',
        link: link.cloud.blog
      },
      {
        name: 'blog detail',
        link: link.cloud.blogDetail
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
        link: link.cloud.login
      },
      {
        name: 'register',
        link: link.cloud.register
      },
      {
        name: 'contact',
        link: link.cloud.contact
      },
      {
        name: 'contact map',
        link: link.cloud.contactMap
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
        link: link.cloud.card
      },
      {
        name: 'product',
        link: link.cloud.product
      },
      {
        name: 'product detail',
        link: link.cloud.productDetail
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
        link: link.cloud.pricing
      },
      {
        name: 'faq',
        link: link.cloud.faq
      },
      {
        name: 'maintenance',
        link: link.cloud.maintenance
      },
      {
        name: 'coming soon',
        link: link.cloud.comingSoon
      },
      {
        name: 'error',
        link: '/error'
      }
    ]
  }
];

export default sample;
