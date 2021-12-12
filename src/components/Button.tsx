import { ButtonProps } from "../Interface";

const Button = ({ className, event, text }: ButtonProps) => {
  return (
    <button className={className} onClick={event}>
      {text}
    </button>
  );
};

export default Button;
