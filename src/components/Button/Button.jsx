import GlassButton from './Button.style';

const Button = props => {
  const { text, ...prop } = props;
  return <GlassButton {...prop}>{text}</GlassButton>;
};

export default Button;
