import { z } from "zod";
import AuthLayout from "../_components/AuthLayout";
import { formSchema } from "@/lib/schema";
import CustomForm from "../_components/CustomForm";
import registerUser from "@/utils/registerUser";
import loginUser from "@/utils/loginUser";

const Login = () => {
  function onSubmit(values: z.infer<typeof formSchema>) {
    loginUser(values.username, values.password);
  }

  return (
    <AuthLayout>
      <CustomForm name="Login" onSubmit={onSubmit} />
    </AuthLayout>
  );
};

export default Login;
