import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Container from "../ui/container";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import "./login.mod.css";

const formSchema = z
  .object({
    email: z.string().email(),
    password: z.string(),
    rePassword: z.string(),
  });
  

  //TO DO - if the user and pass don/t correspond 
  // .refine(
  //   (data) => {
  //     return data.password === data.rePassword;
  //   },
  //   {
  //     message: "Паролите не съвпадат",
  //     path: ["rePassword"],
  //   }
  // );

export default function Login() {
  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rePassword: "",
    },
  });

  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <Container>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="max-w-md w-full flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({field }) => {
              return (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email Address"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="password"
            render={({field }) => {
              return (
                <FormItem>
                  <FormLabel>Парола</FormLabel>
                  <FormControl>
                    <Input placeholder="Парола" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

     

          <Button type="submit">Вход</Button>
        </form>
      </Form>
    </Container>
  );
}
