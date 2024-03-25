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

interface CustomFormProps {
  onSubmit: any;
  name: string;
}

const CustomForm = ({ onSubmit, name }: CustomFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
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
          <Button>{name}</Button>
        </form>
      </Form>
    </>
  );
};

export default CustomForm;
