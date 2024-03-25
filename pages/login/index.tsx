import { z } from "zod";
import AuthLayout from "../_components/AuthLayout";
import { formSchema } from "@/lib/schema";
import CustomForm from "../_components/CustomForm";
import loginUser from "@/utils/loginUser";
import { toast } from "sonner";
import useAuthStore, { AuthState } from "@/store/AuthStore";

const Login = () => {
  const login = useAuthStore((state: any) => state.login);
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      loginUser(values.username, values.password);
      login(values.username);
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
