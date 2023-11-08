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
import SectionLabel from "@/components/ui/SectionLabel";
import websiteContent from "../../../website-content";
import { useRouter } from "next/navigation";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { toast } from "@/components/ui/use-toast";

const ContactPage = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const content = websiteContent.contact_page;
  const router = useRouter();

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

      await axios.post("/api/contact", payload);
    },
    onSuccess: () => {
      router.refresh();
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Something went wrong!",
        description: "Please try again later.",
      });
    },
  });

  return (
    <MaxWidthWrapper>
      <div className="pt-28 mb-14">
        <div className="flex flex-col gap-5">
          <SectionLabel sectionName="Contact Form" />
          <h1 className="text-4xl xl:text-5xl 2xl:text-6xl mb-8 font-bold antialiased">
            Reach out to us.
          </h1>
        </div>
        <div className="gap-10 md:gap-20 grid grid-cols-1 md:grid-cols-12">
          {typeof window !== "undefined" ? (
            <PopupModal
              url={content.meeting_link}
              onModalClose={() => setIsOpen(false)}
              open={isOpen}
              rootElement={document.getElementsByTagName("body")[0]}
            />
          ) : (
            ""
          )}

          <div className="col-span-6">
            <h2 className="text-lg sm:text-2xl font-normal mb-8 antialiased">
              {content.subtitle_1}
            </h2>

            <div className="border border-white/10 rounded-lg shadow-lg">
              <form
                className="flex flex-col gap-3 p-6"
                onSubmit={handleSubmit((e) => sendMail(e))}
              >
                <Label className="" htmlFor="fullName">
                  Full Name
                </Label>

                <Input
                  className="w-full border-white/40 pl-6"
                  size={32}
                  id="fullName"
                  {...register("fullName")}
                />

                {errors?.fullName && (
                  <p className="text-sm font-semibold text-red-700">
                    {errors.fullName?.message}
                  </p>
                )}

                <Label htmlFor="email">Email</Label>

                <Input
                  className="w-full border-white/40 pl-6"
                  size={32}
                  id="email"
                  {...register("email")}
                />

                {errors?.email && (
                  <p className="text-sm font-semibold text-red-700">
                    {errors.email?.message}
                  </p>
                )}

                <Label htmlFor="phone">Phone Number</Label>

                <Input
                  className="w-full border-white/40 pl-6"
                  size={32}
                  id="phone"
                  {...register("phone")}
                />

                {errors?.phone && (
                  <p className="text-sm font-semibold text-red-700">
                    {errors.phone?.message}
                  </p>
                )}

                <Label htmlFor="company">Company</Label>

                <Input
                  className="w-full border-white/40 pl-6"
                  size={32}
                  id="company"
                  {...register("company")}
                />

                {errors?.company && (
                  <p className="text-sm font-semibold text-red-700">
                    {errors.email?.message}
                  </p>
                )}

                <Label htmlFor="message">Your Message</Label>

                <Input
                  className="w-full border-white/40 pl-6"
                  size={32}
                  id="message"
                  {...register("message")}
                />

                {errors?.message && (
                  <p className="text-sm font-semibold text-red-700">
                    {errors.message?.message}
                  </p>
                )}

                <Button
                  className="gap-2 h-14 text-base border border-white/10 my-4"
                  type="submit"
                  isLoading={isLoadingEmail}
                >
                  Submit Form
                </Button>
              </form>
            </div>
          </div>

          <div className="col-span-6 mx-auto">
            <h2 className="text-lg sm:text-2xl font-normal antialiased">
              {content.subtitle_2}
            </h2>
            <Button
              className="gap-2 h-14 w-full sm:w-auto text-base border border-white/10 my-6"
              onClick={() => setIsOpen(true)}
            >
              Schedule Meeting
              <Calendar className="ml-2 w-4 h-4" />
            </Button>

            <p className="text-lg font-normal">
              {content.meeting_description}
            </p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ContactPage;
