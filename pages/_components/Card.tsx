import { cn } from "@/lib/utils";
import { Character } from "@/types/Character";
import { useRouter } from "next/router";

interface CardProps {
  character: Character;
}
const Card = ({ character }: CardProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/characters/${character.id}`);
  };

  if (!character) {
    return null;
  }
  return (
    <div
      onClick={handleClick}
      className="border-[2px] w-72 shadow-lg flex flex-col gap-2 justify-center px-4 py-4 rounded-md cursor-pointer"
    >
      <div className="h-60">
        <img
          src={character.image}
          alt={character.name}
          className="h-full w-full object-cover rounded-md"
        />
      </div>
      <h3 className="text-lg font-bold">{character.name}</h3>
      <div className="flex gap-2 items-center">
        <span
          className={cn(
            "px-3 text-xs font-semibold py-1 rounded-3xl text-center",
            character.status === "Dead" && "bg-red-500/80",
            character.status === "Alive" && "bg-green-500/80",
            character.status === "unknown" && "bg-yellow-500/80"
          )}
        >
          {character.status}
        </span>
        <span className="px-3 text-xs font-semibold py-1 rounded-3xl text-center border-primary border">
          {character.species}
        </span>
      </div>
    </div>
  );
};

export default Card;
