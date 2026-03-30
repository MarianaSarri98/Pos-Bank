export default function HomeTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Home Template</h1>
      {children}
    </div>
  );
}