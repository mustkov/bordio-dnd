import React, { memo } from 'react'
import * as S from './styled';
import searchSVG from '../../assets/icons/search.svg'

interface ISearch {
  view?: 'primary' | 'secondary',
  className?: string,
  placeholder?: string,
  onSearch?: (e: React.MouseEvent<HTMLButtonElement>) => void
}


const Search: React.FC<ISearch> = (props) => {
  const { view = 'primary', className, placeholder = 'Search...', onSearch } = props;

  return (
    <S.SearchWrapper view={view} className={className}>
      <S.SearchField view={view} placeholder={placeholder} />
      <S.SerchButton view={view} onClick={onSearch}>
        <S.ButtonIcon src={searchSVG} alt="search" />
      </S.SerchButton>
    </S.SearchWrapper>
  )
}

export default memo(Search)