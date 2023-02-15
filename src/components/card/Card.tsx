interface Props {
  className: string;
  variant: "primary" | "tertiary";
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
  fullWidth?: string;
}

const CardVariant = {
  primary: "rounded-lg px-5 py-5 bg-primary ",
  tertiary: "rounded-lg px-5 py-5 bg-tertiary w-full ",
};

const Card: React.FC<Props> = ({
  variant,
  children,
  className: customClassName,
  onClick,
  ...props
}: Props) => {
  const classNames = CardVariant[variant] + "" + customClassName;

  return (
    <div className={classNames} onClick={onClick} {...props}>
      {children}
    </div>
  );
};

export default Card;
