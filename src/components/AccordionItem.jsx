export default function AccordionItem({
  isOpen,
  id,
  title,
  info,
  handleToggle,
}) {
  return (
    <article>
      <h4
        className="title"
        onClick={() => handleToggle(id)}
      >
        {title}
      </h4>
      {isOpen && <p>{info}</p>}
    </article>
  );
}
