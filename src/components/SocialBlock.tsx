type SocialBlockProps = {
  icon: string;
  link: string;
  title: string;
};

export default function SocialBlock({ icon, link, title }: SocialBlockProps) {
  return (
    <a href={link} target="_blank" title={title} >
      <img src={`${icon}.svg`} className="fill-cyan h-full" />
    </a>
  );
}
