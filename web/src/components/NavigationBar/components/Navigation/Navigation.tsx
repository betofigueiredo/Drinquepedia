import NavigationItem from "../NavigationItem";

const Navigation = () => {
  return (
    <ul className="relative container m-0 ml-auto mr-auto flex list-none flex-row justify-center gap-4">
      <NavigationItem to="/drinques" label="Drinques" />
      <NavigationItem to="/destaques" label="Destaques" />
      <NavigationItem to="/tudosobrebar" label="Tudo sobre bar" />
      <NavigationItem to="/dicas" label="Dicas" />
    </ul>
  );
};

export default Navigation;
