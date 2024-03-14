interface buttonProps {
  children: string;
  color: string;
  onClick: () => void;
}

export const Button = ({ children, onClick ,color}: buttonProps) => {
  return (
    <button className={"btn btn-"+color} onClick={onClick}>
      {children}
    </button>
  );
};
