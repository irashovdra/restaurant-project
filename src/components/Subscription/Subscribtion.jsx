export const Subscription = () => {
  return (
    <section className="subscription">
      <h2 className="subscription__title">Subscribe To Get Special Offers</h2>
      <p className="subscription__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique.
      </p>
      <input
        placeholder="Enter your email"
        type="text"
        className="subscription__filling"
      />
      <button className="subscription__btn">Subscribe</button>
      <img src="" alt="banana" className="subscription__photo" />
    </section>
  );
};
