import useAuth from "@/hooks/useAuth";
import RootLayout from "./_components/RootLayout";

const Home = () => {
  useAuth();
  return (
    <RootLayout>
      <div>Hello</div>
    </RootLayout>
  );
};

export default Home;
