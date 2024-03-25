import RootLayout from "./_components/RootLayout";
import useAxios from "@/hooks/useAxios";
import { useEffect, useState } from "react";
import { Character, CharacterResponse } from "@/types/Character";
import Card from "./_components/Card";
import { Skeleton } from "@/components/ui/skeleton";

const Home = () => {
  const { response, loading, error } =
    useAxios<CharacterResponse>("/character");
  const [characters, setCharacters] = useState<Character[] | null>(null);
  console.log(characters);

  useEffect(() => {
    if (response) {
      setCharacters(response.results);
    }
  }, [response]);

  return (
    <RootLayout>
      <>
        <div className="lg:grid-cols-4 grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {characters &&
            !loading &&
            characters.map((character) => (
              <Card key={character.id} character={character} />
            ))}
        </div>
      </>
    </RootLayout>
  );
};

export default Home;
