const Label = ({ title, body, content }) => (
  <label>
    <span className="form__labelText">{title}</span>
    {body}
    {content}
  </label>
);

export default Label;
