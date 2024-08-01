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

import "./register.mod.css";

const formSchema = z
  .object({
    email: z.string().email({ message: "Невалиден email" }),
    password: z.string().min(3,{ message: "Паролата трябва да съдържа минимум 3 символа" }),
    rePassword: z.string(),
  })

  .refine(
    (data) => {
      return data.password === data.rePassword;
    },
    {
      message: "Паролите не съвпадат",
      path: ["rePassword"],
    }
  );

export default function Register() {
  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rePassword: "",
    },
  });

  const handleSubmit = (values) => {
    console.log("submit");
    console.log(values); //get all the formData as values
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

          <FormField
            control={form.control}
            name="rePassword"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Потвърди паролата</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Потвърди паролата"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <Button type="submit">Регистрация</Button>
        </form>
      </Form>
    </Container>
  );
}
