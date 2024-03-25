import RootLayout from "./_components/RootLayout";
import { Character, CharacterResponse } from "@/types/Character";
import Card from "./_components/Card";
import myCache from "@/lib/cache";

interface HomeProps {
  characters: Character[];
}

const Home = ({ characters }: HomeProps) => {
  return (
    <RootLayout>
      <>
        <div className="lg:grid-cols-4 grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {characters &&
            characters.map((character) => (
              <Card key={character.id} character={character} />
            ))}
        </div>
      </>
    </RootLayout>
  );
};

export async function getServerSideProps() {
  let data = myCache.get("characters");

  if (!data) {
    const response = await fetch(`https://rickandmortyapi.com/api/character`);
    const fetchedData: CharacterResponse = await response.json();
    myCache.set("characters", fetchedData.results);
    data = fetchedData.results;
  }

  return {
    props: {
      characters: data || [],
    },
  };
}

export default Home;
