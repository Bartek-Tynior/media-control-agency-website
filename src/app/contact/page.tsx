"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";
import { useForm } from "react-hook-form";
import { EmailValidator, EmailValidatorType } from "@/lib/validators/email";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import SectionLabel from "@/components/ui/SectionLabel";
import websiteContent from "../../../website-content";
import { useRouter } from "next/navigation";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { toast } from "@/components/ui/use-toast";
import { Calendar } from "lucide-react";
import Head from "next/head";
import Lenis from "lenis";

const ContactPage = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const content = websiteContent.contact_page;
  const router = useRouter();

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<EmailValidatorType>({
    resolver: zodResolver(EmailValidator),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
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
    <>
      <Head>
        <title>Contact | Media Control Agency</title>
        <meta name="description" content="A brief description of your page" />
        <meta name="title" content="A brief description of your page" />
        <meta name="og:title" content="A brief description of your page" />
        <meta name="title" content="A brief description of your page" />
        <meta
          name="og:description"
          content="A brief description of your page"
        />
        <meta
          content="width=device-width, initial-scale=1"
          name="viewport"
        ></meta>
      </Head>
      <MaxWidthWrapper>
        <div className="pt-28 mb-14">
          <div className="flex flex-col gap-5">
            <SectionLabel sectionName="Contact Form" />
            <h1 className="text-2xl mb-8 font-bold antialiased">
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
              <h2 className="text-sm font-normal mb-8 antialiased">
                {content.subtitle_1}
              </h2>

              <div className="border border-white/10 rounded-lg shadow-lg p-6">
                <form
                  className="flex flex-col gap-4"
                  onSubmit={handleSubmit((e) => sendMail(e))}
                >
                  <Input
                    className="px-4 py-2 text-xs rounded-lg bg-white/10 text-white border-none focus:outline-none"
                    size={32}
                    id="fullName"
                    placeholder="Full Name"
                    {...register("fullName")}
                  />

                  {errors?.fullName && (
                    <p className="text-sm font-semibold text-red-700">
                      {errors.fullName?.message}
                    </p>
                  )}

                  <Input
                    className="px-4 py-2 text-xs rounded-lg bg-white/10 text-white border-none focus:outline-none"
                    size={32}
                    id="email"
                    placeholder="Email"
                    {...register("email")}
                  />

                  {errors?.email && (
                    <p className="text-sm font-semibold text-red-700">
                      {errors.email?.message}
                    </p>
                  )}

                  <Input
                    className="px-4 py-2 text-xs rounded-lg bg-white/10 text-white border-none focus:outline-none"
                    size={32}
                    id="phone"
                    placeholder="Phone Number"
                    {...register("phone")}
                  />

                  {errors?.phone && (
                    <p className="text-sm font-semibold text-red-700">
                      {errors.phone?.message}
                    </p>
                  )}

                  <Input
                    className="px-4 py-2 text-xs rounded-lg bg-white/10 text-white border-none focus:outline-none"
                    size={32}
                    id="company"
                    placeholder="Company"
                    {...register("company")}
                  />

                  {errors?.company && (
                    <p className="text-sm font-semibold text-red-700">
                      {errors.company?.message}
                    </p>
                  )}

                  <Input
                    className="px-4 py-2 text-xs rounded-lg bg-white/10 text-white border-none focus:outline-none"
                    size={32}
                    id="message"
                    placeholder="Your Message"
                    {...register("message")}
                  />

                  {errors?.message && (
                    <p className="text-sm font-semibold text-red-700">
                      {errors.message?.message}
                    </p>
                  )}

                  <Button
                    className="text-xs text-white rounded-lg bg-white/10 focus:outline-none"
                    type="submit"
                    isLoading={isLoadingEmail}
                  >
                    Submit Form
                  </Button>
                </form>
              </div>
            </div>

            <div className="col-span-6 mx-auto">
              <h2 className="text-sm font-normal antialiased">
                {content.subtitle_2}
              </h2>
              <Button
                className="gap-2 h-14 w-full sm:w-auto text-xs text-white rounded-lg bg-white/10 focus:outline-none my-6"
                onClick={() => setIsOpen(true)}
              >
                Schedule Meeting
                <Calendar className="ml-2 w-4 h-4" />
              </Button>

              <p className="text-sm font-normal">
                {content.meeting_description}
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default ContactPage;
