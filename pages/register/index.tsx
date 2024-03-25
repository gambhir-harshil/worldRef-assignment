import { z } from "zod";
import AuthLayout from "../_components/AuthLayout";
import { formSchema } from "@/lib/schema";
import CustomForm from "../_components/CustomForm";
import registerUser from "@/utils/registerUser";
import { toast } from "sonner";
import useAuthStore from "@/store/AuthStore";

const Register = () => {
  const login = useAuthStore((state: any) => state.login);
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      registerUser(values.username, values.password);
      login(values.username);
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
