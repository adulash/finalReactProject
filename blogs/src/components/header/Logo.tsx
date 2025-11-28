import logo from "../../assets/logo.png";

export default function Logo() {
  return (
    <div className="flex gap-[30px] w-[36px] h-[36px]">
      <img src={logo} alt="Logo" />
      <h2 className="text-2xl font-bold">Blog</h2>
    </div>
  );
}
