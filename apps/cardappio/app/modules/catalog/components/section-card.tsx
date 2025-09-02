export function SectionCard({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) {
  return (
    <a
      href={link}
      style={{
        display: "block",
        backgroundColor: "#D9D9D9",
        padding: 50,
        textAlign: "center",
      }}
    >
      {children}
    </a>
  );
}
