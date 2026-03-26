export default function Input({ onChange, children, disabled, value }) {
  return (
    <>
      <label>{children}</label>
      <input
        type="text"
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
    </>
  );
}
