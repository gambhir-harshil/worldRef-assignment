import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { formSchema } from "@/lib/schema";
import { useRouter } from "next/router";

interface CustomFormProps {
  onSubmit: any;
  name: string;
}

const CustomForm = ({ onSubmit, name }: CustomFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const router = useRouter();
  return (
    <>
      <h1 className="text-2xl font-semibold mb-8">{name}</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-lg">
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    className="px-4 py-2 h-12 w-80"
                    placeholder="John"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-lg">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    className="px-4 py-2 h-12 w-80"
                    placeholder="password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between items-center">
            <Button>{name}</Button>
            {name === "Login" ? (
              <p>
                New here?{" "}
                <span
                  className="text-gray-400 cursor-pointer"
                  onClick={() => router.push("/register")}
                >
                  Register
                </span>
              </p>
            ) : (
              <p>
                Already a member?{" "}
                <span
                  className="text-gray-400 cursor-pointer"
                  onClick={() => router.push("/login")}
                >
                  Login
                </span>
              </p>
            )}
          </div>
        </form>
      </Form>
    </>
  );
};

export default CustomForm;
