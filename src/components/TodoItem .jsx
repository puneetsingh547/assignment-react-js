export default function TodoItem({ value, ...props }) {
  return <span {...props}>{value}</span>;
}
