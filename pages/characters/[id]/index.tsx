import useAuth from "@/hooks/useAuth";
import RootLayout from "../../_components/RootLayout";
import { GetServerSideProps } from "next";
import { Character } from "@/types/Character";
import { cn } from "@/lib/utils";
import { Cat, Dog } from "lucide-react";
import { ParsedUrlQuery } from "querystring";

interface SinglePageProps {
  character: Character;
  error: any;
}

interface IParams extends ParsedUrlQuery {
  id: string;
}

const SinglePage = ({ character, error }: SinglePageProps) => {
  console.log(character);
  useAuth();
  return (
    <RootLayout>
      <div className="flex gap-16 flex-col md:flex-row">
        <div className="flex flex-col gap-4">
          <div className="rounded-md overflow-hidden shadow-lg">
            <img src={character.image} alt={character.name} />
          </div>
          <h1 className="text-3xl font-bold">{character.name}</h1>
          <div className="flex gap-2">
            <span
              className={cn(
                "px-4 font-bold py-1 rounded-3xl text-center",
                character.status === "Dead" && "bg-red-500/80",
                character.status === "Alive" && "bg-green-500/80",
                character.status === "unknown" && "bg-yellow-500/80"
              )}
            >
              {character.status}
            </span>
            <span className="px-4 font-bold py-1 rounded-3xl text-center border border-primary">
              {character.species}
            </span>
            <span
              className={cn(
                "px-4 font-bold py-1 rounded-3xl text-center",
                character.gender === "Male" && "bg-blue-500",
                character.gender === "Female" && "bg-pink-500"
              )}
            >
              {character.gender === "Male" && <Dog />}
              {character.gender === "Female" && <Cat />}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-semibold text-2xl">
            Location of Origin:{" "}
            <span className="text-gray-400 text-lg cursor-pointer">
              {character.origin.name}
            </span>
          </p>
          <p className="font-semibold text-2xl">
            Last seen:{" "}
            <span className="text-gray-400 text-lg cursor-pointer">
              {character.location.name}
            </span>
          </p>
        </div>
      </div>
    </RootLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { id } = context.params as IParams;
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

    if (!res.ok) {
      throw new Error(
        `Failed to fetch character, received status ${res.status}`
      );
    }

    const character = await res.json();
    return { props: { character } };
  } catch (error: any) {
    return { props: { error: error.message } };
  }
};

export default SinglePage;
