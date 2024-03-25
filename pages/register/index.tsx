import { z } from "zod";
import AuthLayout from "../_components/AuthLayout";
import { formSchema } from "@/lib/schema";
import CustomForm from "../_components/CustomForm";
import registerUser from "@/utils/registerUser";

const Register = () => {
  function onSubmit(values: z.infer<typeof formSchema>) {
    registerUser(values.username, values.password);
  }

  return (
    <AuthLayout>
      <CustomForm name="Register" onSubmit={onSubmit} />
    </AuthLayout>
  );
};

export default Register;
