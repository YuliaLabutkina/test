import GlassButton from './Button.style';

interface IProps {
  text: string;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
}

const Button = (props: IProps) => {
  const { text, ...prop } = props;
  return <GlassButton {...prop}>{text}</GlassButton>;
};

export default Button;
