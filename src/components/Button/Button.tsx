import GlassButton from './Button.style';

interface IProps {
  text: string;
  onClick?: () => void;
  type?: string;
}

const Button = (props: IProps) => {
  const { text, ...prop } = props;
  return <GlassButton {...prop}>{text}</GlassButton>;
};

export default Button;
