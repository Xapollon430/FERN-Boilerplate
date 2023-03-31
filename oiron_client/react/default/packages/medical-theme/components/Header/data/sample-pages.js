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
        link: link.medical.about
      },
      {
        name: 'team',
        link: link.medical.team
      },
      {
        name: 'blog',
        link: link.medical.blog
      },
      {
        name: 'blog detail',
        link: link.medical.blogDetail
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
        link: link.medical.login
      },
      {
        name: 'register',
        link: link.medical.register
      },
      {
        name: 'contact',
        link: link.medical.contact
      },
      {
        name: 'contact map',
        link: link.medical.contactMap
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
        link: link.medical.card
      },
      {
        name: 'product',
        link: link.medical.product
      },
      {
        name: 'product detail',
        link: link.medical.productDetail
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
        link: link.medical.pricing
      },
      {
        name: 'faq',
        link: link.medical.faq
      },
      {
        name: 'maintenance',
        link: link.medical.maintenance
      },
      {
        name: 'coming soon',
        link: link.medical.comingSoon
      },
      {
        name: 'error',
        link: '/error'
      }
    ]
  }
];

export default sample;
