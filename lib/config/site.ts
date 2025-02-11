export const siteConfig = {
  name: 'Vu Nguyen Khanh',
  description: 'Portfolio website of Vu Nguyen Khanh - Full Stack Developer',
  url: 'https://vunguyenkhanh.dev',
  ogImage: 'https://vunguyenkhanh.dev/og.jpg',
  links: {
    github: 'https://github.com/vunguyenkhanh',
    linkedin: 'https://linkedin.com/in/kain6599',
    facebook: 'https://facebook.com/VuNguyenKhanh.Profile',
    instagram: 'https://instagram.com/kain6599',
    email: 'mailto:vunguyenkhanh.6599@gmail.com',
  },
  nav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Projects',
      href: '/projects',
    },
    {
      title: 'Blog',
      href: '/blog',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ],
} as const;
