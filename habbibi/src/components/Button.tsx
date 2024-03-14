interface buttonProps {
  children: string;
  color?: 'primary' | 'danger' | 'secondary';
  onClick: () => void;
}

export const Button = ({ children, onClick ,color='primary'}: buttonProps) => {
  return (
    <button className={"btn btn-"+color} onClick={onClick}>
      {children}
    </button>
  );
};
