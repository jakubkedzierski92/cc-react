const Label = ({ title, body, content }) => (
  <label>
    <span>{title}</span>
    {body}
    {content}
  </label>
);

export default Label;
