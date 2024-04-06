import NavigationItem from "../NavigationItem";

const Navigation = () => {
  return (
    <ul className="container relative m-0 mx-auto flex w-full list-none flex-row justify-end gap-4 p-0 md:w-auto lg:mx-0 lg:justify-center lg:pr-14">
      <NavigationItem to="/drinques" label="Drinques" />
      <NavigationItem to="/destaques" label="Destaques" />
      <NavigationItem to="/tudosobrebar" label="Tudo sobre bar" />
      <NavigationItem to="/dicas" label="Dicas" />
    </ul>
  );
};

export default Navigation;
