import React from 'react'
import loadable from '@loadable/component'
import imageURL from '../../assets/images/user.jpg'
import * as S from './styled';
import * as Image from '../Avatar';

const Logo = loadable(() => import('../Logo'))

export interface MenuItem {
  path: string,
  name: string,
  index?: number
}
const favoriteItems: MenuItem[] = [
  {
    name: 'Marketing',
    path: '/marketing',
  },
  {
    name: 'Mobile App',
    path: '/mobile-app',
  },
]
const projectItems: MenuItem[] = [
  {
    name: 'Marketing',
    path: '/marketing',
  },
  {
    name: 'Landing Pages',
    path: '/landing-pages',
  },
  {
    name: 'Wedding',
    path: '/wedding',
  },
  {
    name: 'Mobile App',
    path: '/mobile-app',
  },
  {
    name: 'House Construction',
    path: '/house-construction',
  },
]



const Menu = () => {
  const renderItem = ({ name, path }: MenuItem, index: number) => (
    <S.MenuNavLink to={path} key={path + name + index} >
      {name}
    </S.MenuNavLink>
  );

  return (
    <S.Menu>
      <Logo />
      <S.MenuSearch />
      <S.MenuNavLink to="/workspace">
        <Image.Avatar src={imageURL} size="small" />
        <S.Name>My workspace</S.Name>
      </S.MenuNavLink>
      <S.Favorites text="Favorites" renderItem={renderItem} items={favoriteItems} />
      <S.Projects text='Projects' renderItem={renderItem} items={projectItems} />
    </S.Menu>
  )
}



export default Menu