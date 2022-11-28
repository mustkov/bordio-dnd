import { ReactNode, useState } from 'react';

import * as S from './styled';

interface IDetails<I> {
  text: string,
  items: I[],
  className?: string,
  renderItem: (item: I, index: number) => ReactNode,
};

const Details = <I,>(props: IDetails<I>) => {
  const { text, items, className, renderItem } = props;

  const [isOpen, setIsOpen] = useState(true);

  const toggleDetails = () => setIsOpen((prevState) => !prevState);

  return (
    <div className={className}>
      <S.Button onClick={toggleDetails}>
        <S.MarkerIcon isOpen={isOpen} />
        <S.Text>{text}</S.Text>
      </S.Button>
      {isOpen && <S.Content>{items.map(renderItem)}</S.Content>}
    </div>
  );
};

export { Details };
