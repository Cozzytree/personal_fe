"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ImageIcon } from "@radix-ui/react-icons";

const formSchema = z.object({
  content: z.string().min(5, { message: "your content is empty" }),
});

const PostForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto flex justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex items-end gap-2"
        >
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Write something..."
                    {...field}
                    className="max-h-[200px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormLabel htmlFor="image">
            <ImageIcon />
          </FormLabel>
          <Input
            type="file"
            className="hidden"
            id="image"
            accept="image/png ,image/jpg"
          />

          <Button variant="outline" size="sm">
            POST
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default PostForm;
