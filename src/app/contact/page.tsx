"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useState } from "react";
import { PopupModal } from "react-calendly";
import { useForm } from "react-hook-form";
import { EmailValidator, EmailValidatorType } from "@/lib/validators/email";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Label } from "@/components/ui/Label";
import { Calendar } from "lucide-react";

const page = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<EmailValidatorType>({
    resolver: zodResolver(EmailValidator),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const { mutate: sendMail, isLoading: isLoadingEmail } = useMutation({
    mutationFn: async (email: EmailValidatorType) => {
      const payload: EmailValidatorType = {
        fullName: email.fullName,
        email: email.email,
        phone: email.phone,
        company: email.company,
        message: email.message,
      };

      const { data } = await axios.post("/api/contact", payload);
      return data;
    },
    onSuccess: () => {},
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <div className="min-h-screen pt-[10rem]">
      <h1 className="text-5xl mb-5 font-bold">Reach out to us</h1>
      <div className="gap-10 md:gap-3 grid grid-cols-1 md:grid-cols-12">
        <PopupModal
          url="https://calendly.com/btynior"
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={document.getElementsByTagName("body")[0]}
        />
        <div className="col-span-6">
          <h2>
            Our team is growing. We’d love for you to join us. Reach us by
            filling up this form...
          </h2>

          <h2 className="mt-10">
            ...or book a meeting with the founder and discuss yoor project and
            possible approaches!
          </h2>
          <Button className="my-4" onClick={() => setIsOpen(true)}>
            Schedule meeting
            <Calendar className="ml-2 w-4 h-4" />
          </Button>

          <p>
            By the end of this Audit call, you will have a clear understanding
            of the next steps you can take for your business to start generating
            consistent and reliable results online with Funnels & Paid
            Advertising.
          </p>
        </div>

        <div className="col-span-6 mx-auto">
          <h2 className="text-2xl mb-5 font-bold">Contact form</h2>
          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit((e) => sendMail(e))}
          >
            <Label className="" htmlFor="fullName">
              Full name
            </Label>

            <Input
              className="md:w-[300px] pl-6"
              size={32}
              id="fullName"
              {...register("fullName")}
            />

            <Label htmlFor="email">Email</Label>

            <Input
              className="md:w-[300px] pl-6"
              size={32}
              id="email"
              {...register("email")}
            />

            <Label htmlFor="phone">Phone Number</Label>

            <Input
              className="md:w-[300px] pl-6"
              size={32}
              id="phone"
              {...register("phone")}
            />

            <Label htmlFor="company">Company</Label>

            <Input
              className="md:w-[300px] pl-6"
              size={32}
              id="company"
              {...register("company")}
            />

            <Label htmlFor="message">Your Message</Label>

            <Input
              className="md:w-[300px] pl-6"
              size={32}
              id="message"
              {...register("message")}
            />

            {errors?.email && (
              <p className="px-1 text-sm text-red-600">
                {errors.email?.message}
              </p>
            )}

            {errors?.fullName && (
              <p className="px-1 text-sm text-red-600">
                {errors.fullName?.message}
              </p>
            )}

            {errors?.company && (
              <p className="px-1 text-sm text-red-600">
                {errors.email?.message}
              </p>
            )}

            {errors?.phone && (
              <p className="px-1 text-sm text-red-600">
                {errors.phone?.message}
              </p>
            )}

            {errors?.message && (
              <p className="px-1 text-sm text-red-600">
                {errors.message?.message}
              </p>
            )}

            <Button className="mt-4" type="submit" isLoading={isLoadingEmail}>
              Submit form
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
