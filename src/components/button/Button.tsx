interface Props {
  size: "xs" | "sm" | "lg";
  variant: "primary" | "secondary" | "disabled";
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
  fullWidth?: string;
}

const ButtonVariant = {
  primary:
    "focus-visible:ring ring-indigo-300 text-black active:text-gray-700 text-sm md:text-base rounded-lg outline-none transition duration-100 inline-block justify-evenly text-white items-center gap-3 bg-primary px-5 py-2 font-satoshi font-regular",
  secondary:
    "focus-visible:ring ring-indigo-300 active:text-white  text-sm md:text-base rounded-lg outline-none transition duration-100 inline-block justify-evenly  items-center gap-3  border border-sky-500 font-satoshi text-primary font-satoshi  ",
  disabled:
    "focus-visible:ring ring-indigo-300 active:text-white text-white text-sm md:text-base rounded-lg outline-none transition duration-100 inline-block justify-evenly bg-gray-500 items-center gap-3 font-satoshi disabled border-none",
};

const ButtonSize = {
  xs: "py-1 px-4 text-xs",
  sm: "py-2 px-3 text-xs",
  lg: "py-3 px-7 text-xs",
};

const FullWidth = {
  true: "w-full",
  false: "",
};

const Button: React.FC<Props> = ({
  size,
  variant,
  children,
  onClick,
  fullWidth,
  ...props
}: Props) => {
  const classNames =
    ButtonSize[size] +
    " " +
    (FullWidth[fullWidth as keyof typeof FullWidth] ?? "") +
    " " +
    ButtonVariant[variant];
  return (
    <button className={classNames} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
