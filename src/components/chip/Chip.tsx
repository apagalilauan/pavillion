interface Props {
  variant: "outlined" | "filled";
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
  fullWidth?: string;
}

const ChipVariant = {
  outlined:
    "focus-visible:ring ring-indigo-300 text-white active:text-gray-700 text-sm md:text-base rounded-lg outline-none transition duration-100 border px-5 py-1 rounded-full font-satoshi border-white solid h-10 border-2",
  filled:
    "focus-visible:ring ring-indigo-300 text-black bg-secondary active:text-gray-700 text-sm md:text-base rounded-lg outline-none transition duration-100 border px-5 py-1 rounded-full font-satoshi border-white solid h-10 ",
};

const Chip: React.FC<Props> = ({
  variant,
  children,
  onClick,
  ...props
}: Props) => {
  const classNames = ChipVariant[variant];

  return (
    <button className={classNames} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Chip;
