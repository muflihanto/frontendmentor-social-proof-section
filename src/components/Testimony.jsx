export default function Testimony({ avatar, name, title, testimony }) {
  return (
    <>
      <div className="testimony">
        <div className="buyer-profile">
          <img
            src={avatar}
            alt={name + "'s avatar"}
          />
          <div>
            <h3>{name}</h3>
            <p>{title}</p>
          </div>
        </div>
        <p>"{testimony}"</p>
      </div>
    </>
  );
}
