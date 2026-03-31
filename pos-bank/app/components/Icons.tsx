type IconVariant = "create" | "delete" | "edit";

interface IconsProps {
  variant: IconVariant;
  onClick?: () => void;
  className?: string;
}

function CreateIcon() {
  return (
    <div className="icon-wrapper">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 11V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H7V2H2V16H16V11H18Z" fill="black"/>
      </svg>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 4H6V0H4V4H0V6H4V10H6V6H10V4Z" fill="black"/>
      </svg>
    </div>
  );
}

function DeleteIcon() {
  return (
    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.616 15.77C2.168 15.77 1.78667 15.6127 1.472 15.298C1.15733 14.9833 1 14.6023 1 14.155V1.77H0V0.77H4V0H10V0.77H14V1.77H13V14.155C13 14.615 12.846 14.9993 12.538 15.308C12.23 15.6167 11.8453 15.7707 11.384 15.77H2.616ZM12 1.77H2V14.155C2 14.3343 2.05767 14.4817 2.173 14.597C2.28833 14.7123 2.436 14.77 2.616 14.77H11.385C11.5383 14.77 11.6793 14.706 11.808 14.578C11.9367 14.45 12.0007 14.3087 12 14.154V1.77ZM4.808 12.77H5.808V3.77H4.808V12.77ZM8.192 12.77H9.192V3.77H8.192V12.77Z" fill="black"/>
    </svg>
  );
}

function EditIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 15H2.098L12.796 4.30202L11.698 3.20402L1 13.902V15ZM0 16V13.48L13.18 0.288015C13.2833 0.196682 13.3967 0.126015 13.52 0.0760154C13.6433 0.0260154 13.7723 0.000681818 13.907 1.51514e-05C14.0417 -0.000651515 14.1717 0.020682 14.297 0.0640153C14.4237 0.106015 14.5403 0.182015 14.647 0.292015L15.714 1.36602C15.824 1.47202 15.8993 1.58868 15.94 1.71602C15.98 1.84268 16 1.96935 16 2.09602C16 2.23202 15.9773 2.36202 15.932 2.48602C15.886 2.60935 15.8133 2.72235 15.714 2.82502L2.519 16H0ZM12.238 3.76202L11.698 3.20402L12.796 4.30202L12.238 3.76202Z" fill="black"/>
    </svg>
  );
}

export function Icons({ variant, onClick, className = "" }: IconsProps) {
  return (
    <button className={`icon-btn ${className}`} onClick={onClick} aria-label={variant}>
      {variant === "create" && <CreateIcon />}
      {variant === "delete" && <DeleteIcon />}
      {variant === "edit" && <EditIcon />}
    </button>
  );
}

export function IconsToolbar() {
  return (
    <div className="icons-toolbar">
      <Icons variant="delete" />
      <Icons variant="create" />
      <Icons variant="edit" />
    </div>
  );
}
