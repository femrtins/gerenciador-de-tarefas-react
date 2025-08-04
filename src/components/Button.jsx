function button(props) {
  return (
    <button className="bg-slate-400 rounded-md text-white p-2" {...props}>
      {props.children}
    </button>
  );
}
export default button;
