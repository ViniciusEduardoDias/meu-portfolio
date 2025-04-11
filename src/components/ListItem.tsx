type ListProps = {
  text: string;
  href: string;
};

const ListItem = ({ text, href }: ListProps) => {
  return (
    <li className="cursor-pointer hover:text-lime-200 transition">
      <a href={href}>{text}</a>
    </li>
  );
};

export default ListItem;
