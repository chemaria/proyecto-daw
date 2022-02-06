export default function PostGridTotal(props) {
  return (
    <section className="w-10/12 mx-auto grid grid-cols-2 gap-32">
      {props.children}
    </section>
  );
}
