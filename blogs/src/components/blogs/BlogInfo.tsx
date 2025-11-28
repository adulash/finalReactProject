export default function BlogInfo({
  avartar,
  avartarAlt,
  author,
  date,
}: {
  avartar: string;
  avartarAlt: string;
  author: string;
  date: string;
}) {
  return (
    <div className="self-start  flex items-center justify-start gap-[20px]">
      <img src={avartar} alt={avartarAlt} className="w-10 h-10 rounded-full" />
      <p className="text-sm text-gray-500 text-black">{author}</p>
      <p className="text-sm text-gray-500 text-black">{date}</p>
    </div>
  );
}
