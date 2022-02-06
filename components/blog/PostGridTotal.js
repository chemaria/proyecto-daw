export default function PostGridTotal(props, posts) {
  return (
    <section className="w-10/12 mx-auto grid grid-cols-2 gap-32">
      {console.log({ posts })}
      {props.children}
    </section>
  );
}
