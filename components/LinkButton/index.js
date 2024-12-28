const LinkButton = ({ link, title }) => {
  return (
    <a href={link}>
      <button className="button w-40">
        {title || "Erro"}
        <div className="hoverEffect">
          <div></div>
        </div>
      </button>
    </a>
  );
};

export default LinkButton;
