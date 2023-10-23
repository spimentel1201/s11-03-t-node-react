import Image from "next/image";

interface IconProps {
  icon: string;
}

const Icon: React.FC<IconProps> = ({ icon }) => {
  return <Image src={`/icons/${icon}.svg`} alt={icon} width={40} height={40} />;
};

export default Icon;
