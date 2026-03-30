export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Home Layout</h1>
      {children}
    </div>
  );
}