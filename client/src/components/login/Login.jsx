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

const formSchema = z.object({
  email: z.string().email(),
});

export default function Login() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
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
            render={({ ...field }) => {
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
          ></FormField>
        </form>
      </Form>
    </Container>
  );
}

// the below works

// import * as z from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// export default function Login () {
// const formSchema = z
//   .object({
//     emailAddress: z.string().email(),

//   })

//   const form = useForm({
//             resolver:zodResolver(formSchema),
//             defaultValues: {
//                 email:""
//             }
//         })

//         const handleSubmit = ()=>{
//                     console.log('submit');
//                 }

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <Form {...form}>
//         <form
//           onSubmit={form.handleSubmit(handleSubmit)}
//           className="max-w-md w-full flex flex-col gap-4"
//         >
//           <FormField
//             control={form.control}
//             name="emailAddress"
//             render={({ field }) => {
//               return (
//                 <FormItem>
//                   <FormLabel>Email address</FormLabel>
//                   <FormControl>
//                     <Input
//                       placeholder="Email address"
//                       type="email"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               );
//             }}
//           />

//           <FormField
//             control={form.control}
//             name="password"
//             render={({ field }) => {
//               return (
//                 <FormItem>
//                   <FormLabel>Password</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Password" type="password" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               );
//             }}
//           />
//           <FormField
//             control={form.control}
//             name="passwordConfirm"
//             render={({ field }) => {
//               return (
//                 <FormItem>
//                   <FormLabel>Password confirm</FormLabel>
//                   <FormControl>
//                     <Input
//                       placeholder="Password confirm"
//                       type="password"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               );
//             }}
//           />
//           <Button type="submit" className="w-full">
//             Submit
//           </Button>
//         </form>
//       </Form>
//     </main>
//   );
// }
