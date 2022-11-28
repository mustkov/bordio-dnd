import React, { memo } from 'react'
import * as S from './styled';
import arrowDown from 'assets/icons/arrowDown.svg'

interface ISelect {
  value: string,
  options: string[],
  setValue: (value: string) => void
}

const Select: React.FC<ISelect> = ({ value, options, setValue }) => {
  const [isOpen, setOpen] = React.useState(false)


  const toggleVisibility = () => {
    setOpen(prev => !prev)
  }

  const handleClick = (value: string) => {
    setValue(value);
    setOpen(false);
  }

  return (
    <S.Container >
      <S.Button isOpen={isOpen} onClick={toggleVisibility}>
        <S.Text>{value}</S.Text>
        <img src={arrowDown} alt="Arrow" />
      </S.Button>
      {isOpen && (
        <S.List>
          {options.map((option, id) => (
            <li key={option + id}>
              <S.Li isOpen={isOpen} onClick={() => handleClick(option)}>
                {option}
              </S.Li>
            </li>
          ))}
        </S.List>
      )}
    </S.Container>
  )
}


export default memo(Select)