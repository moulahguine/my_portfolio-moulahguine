import "./DefaultContent.scss";

export default function DefaultContent({ children, className = "" }) {
  return <div className={`modalDefaultContent ${className}`}>{children}</div>;
}
