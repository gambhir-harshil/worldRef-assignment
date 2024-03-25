import { z } from "zod";
import AuthLayout from "../_components/AuthLayout";
import { formSchema } from "@/lib/schema";
import CustomForm from "../_components/CustomForm";
import loginUser from "@/utils/loginUser";
import { toast } from "sonner";
import useAuthStore from "@/store/AuthStore";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const login = useAuthStore((state: any) => state.login);
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const authToken = await loginUser(values.username, values.password);
      if (authToken) {
        login(values.username);
        router.push("/");
      }
    } catch (err) {
      toast("An error occured!");
    }
  }

  return (
    <AuthLayout>
      <CustomForm name="Login" onSubmit={onSubmit} />
    </AuthLayout>
  );
};

export default Login;
