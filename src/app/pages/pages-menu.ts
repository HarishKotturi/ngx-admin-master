import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [  
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Company information',
    icon: 'layout-outline',
    children: [
      {
        title: 'Organisational Details',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Economic Performance',
        link: '/pages/layout/list',
      },
      {
        title: 'Scope of the Report',
        link: '/pages/layout/infinite-list',
      },
      {
        title: 'About Report',
        link: '/pages/layout/accordion',
      }
 
    ],
  },
  {
    title: 'Environment',
    icon: 'lock-outline',
    // children: [
    //   {
    //     title: 'Login',
    //     link: '/auth/login',
    //   },
    //   {
    //     title: 'Register',
    //     link: '/auth/register',
    //   },
    //   {
    //     title: 'Request Password',
    //     link: '/auth/request-password',
    //   },
    //   {
    //     title: 'Reset Password',
    //     link: '/auth/reset-password',
    //   },
    // ],
  },
  {
    title: 'Social',
    icon: 'lock-outline'
  },
  {
    title: 'Corporate Governance',
    icon: 'lock-outline'
  },
  {
    title: 'Supply Chain Management',
    icon: 'lock-outline'
  }
];
