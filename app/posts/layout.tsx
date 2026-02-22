type LayoutProps = {
  children: React.ReactNode;
  test_modal: React.ReactNode;
};

export default function Layout({ children, test_modal }: LayoutProps) {
  return (
    <div>
      {test_modal}
      {children}
    </div>
  );
}
