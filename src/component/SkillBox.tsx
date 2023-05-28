type Props = {
  name: string;
  logo: string;
};

function SkillBox({ name, logo }: Props) {
  return (
    <div className="group flex h-[56px] w-[56px] flex-col items-center rounded-md bg-extra-light-gray p-[3px] shadow-md duration-200 ease-in hover:shadow-lg hover:shadow-red">
      <img src={logo} alt={name} className="h-[100%] w-[100%] object-contain" />
      <span className="mt-4 block text-center text-[14px] font-semibold capitalize text-white duration-200 ease-in group-hover:font-bold group-hover:text-secondary">
        {name}
      </span>
    </div>
  );
}
export default SkillBox;
