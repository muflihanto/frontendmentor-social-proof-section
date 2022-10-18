export default function Testimony({ avatar, name, title, testimony }) {
  return (
    <>
      <div className="testimony bg-primary-magenta mb-4 px-8 pt-10 pb-[30px] rounded-lg">
        <div className="buyer-profile flex gap-6">
          <img
            src={avatar}
            alt={name + "'s avatar"}
            className="h-10 w-10 rounded-full"
          />
          <div className="flex flex-col mt-1 tracking-wide">
            <h3 className="font-bold leading-4">{name}</h3>
            <p className="text-primary-pink/80">{title}</p>
          </div>
        </div>
        <p className="mt-[24px] font-medium leading-[22px] tracking-[0.01em]">"{testimony}"</p>
      </div>
    </>
  );
}
