// menuData.js

import {
  UilEstate,
  UilClipboardAlt,
  UilPackage,
  UilUsersAlt,
  UilBolt,
} from '@iconscout/react-unicons';

export const menuData = [
  {
    icon: UilEstate,
    text: 'Dashboard',
    path: '/', // Route for the Dashboard
  },
  {
    icon: UilClipboardAlt,
    text: 'Education',
    path: '/education', // Route for the Education page
  },
  {
    icon: UilPackage,
    text: 'Projects',
    path: '/projects', // Route for the Projects page
  },
  {
    icon: UilUsersAlt,
    text: 'About',
    path: '/about', // Route for the About page
  },
  {
    icon: UilBolt,
    text: 'Support',
    path: '/support', // Route for the Support page
  },
];
