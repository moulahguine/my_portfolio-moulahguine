import "./Navigation.scss";

export default function Navigation() {
  const navigationItems = [
    { id: "about", label: "About", path: "/about", scrollTo: "about" },
    { id: "skills", label: "Skills", path: "/skills", scrollTo: "skills" },
    { id: "projects", label: "Projects", path: "/", scrollTo: "projects" },
    {
      id: "experiences",
      label: "Experiences",
      path: "/experiences",
      scrollTo: "experiences",
    },
    { id: "blogs", label: "Blogs", path: "/blogs", scrollTo: "blogs" },
    { id: "contact", label: "Contact", path: "/contact", scrollTo: "contact" },
  ];

  return (
    <nav className={"nav"} aria-label="Main navigation">
      <ul className="nav__list">
        {navigationItems.map((item) => {
          return (
            <li key={item.id} className="nav__item">
              <a aria-current={"page"}>{item.label}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
