export default [

  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Theme']
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Colors',
  //   to: '/theme/colors',
  //   icon: 'cil-drop',
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   icon: 'cil-pencil',
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Components']
  // },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Menu',
    route: '/menus',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Test Code',
        to: '/menus/TestCode',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'New Menu',
        to: '/menus/NewMenu',
      },
    ]
  },
  {


    _tag: 'CSidebarNavItem',
    name: 'Home',
    to: `/menus/Home`,
    icon: 'cil-home',

  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Result',
    to: `/menus/Result`,
    icon: 'cil-pencil',

  },
  {
    _tag: 'CSidebarNavItem',
    name: 'login',
    to: `/menus/Login`,
    icon: 'cil-Components',

  }

]


