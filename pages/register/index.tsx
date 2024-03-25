import { z } from "zod";
import AuthLayout from "../_components/AuthLayout";
import { formSchema } from "@/lib/schema";
import CustomForm from "../_components/CustomForm";
import registerUser from "@/utils/registerUser";
import { toast } from "sonner";
import useAuthStore from "@/store/AuthStore";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  const login = useAuthStore((state: any) => state.login);
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      registerUser(values.username, values.password);
      login(values.username);
      localStorage.setItem("user", values.username);
      router.push("/");
    } catch (err) {
      toast("An error occured!");
    }
  }

  return (
    <AuthLayout>
      <CustomForm name="Register" onSubmit={onSubmit} />
    </AuthLayout>
  );
};

export default Register;
