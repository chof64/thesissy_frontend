import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <main className="subpixel-antialiased">
      <div className="w-full h-2 bg-red-700" />
      <div className="sticky top-0 z-[100]">
        <Navigation />
      </div>
      <div>{children}</div>
    </main>
  );
}
