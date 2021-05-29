import { createTheme } from 'vite-pages-theme-basic'

export default createTheme({
  topNavs: [
    { text: 'index', path: '/' },
    {
      text: 'Github ⭐',
      href: 'https://github.com/zheeeng/react-device-frameset',
    },
  ],
  logo: 'React Device Frameset',
})
