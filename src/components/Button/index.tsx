import * as S from './styled';

interface IButton {
  icon: string;
  text: string;
};

const Button: React.FC<IButton> = ({ icon, text }) => (
  <S.Button>
    <img src={icon} alt="Plus" />
    <S.Text>{text}</S.Text>
  </S.Button>
);

export default Button
