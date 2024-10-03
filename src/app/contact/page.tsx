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
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const ContactPage = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const content = websiteContent.other_pages.contact_page;
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
      toast({
        variant: "default",
        title: "Email sent!",
        description: "We will get back to you shortly.",
      });
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Something went wrong!",
        description: "Please try again later.",
      });
    },
  });

  // Framer motion variants for animations
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      {/* SEO Optimization */}
      <Head>
        <title>Contact | Media Control Agency</title>
        <meta
          name="description"
          content="Get in touch with us for collaboration, inquiries, or any questions. We are here to assist you."
        />
        <meta property="og:title" content="Contact | Media Control Agency" />
        <meta
          property="og:description"
          content="Reach out to Media Control Agency for any queries or business inquiries."
        />
        <meta
          property="og:url"
          content="https://media-control-agency.com/contact"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | Media Control Agency" />
        <meta
          name="twitter:description"
          content="Get in touch with Media Control Agency for any queries or business inquiries."
        />
      </Head>
      <MaxWidthWrapper>
        <motion.div
          className="pt-28 mb-14"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col gap-5">
            <motion.div variants={itemVariants}>
              <SectionLabel sectionName="Contact Form" />
            </motion.div>
            <motion.h1
              className="text-2xl mb-8 font-bold antialiased"
              variants={itemVariants}
            >
              Reach out to us.
            </motion.h1>
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

            <motion.div className="col-span-6" variants={itemVariants}>
              <h2 className="text-base font-normal mb-8 antialiased">
                {content.subtitle_1}
              </h2>

              <div className="border border-white/10 rounded-lg shadow-lg p-6">
                <motion.form
                  className="flex flex-col gap-4"
                  onSubmit={handleSubmit((e) => sendMail(e))}
                  variants={containerVariants}
                >
                  <motion.div variants={itemVariants}>
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
                  </motion.div>

                  <motion.div variants={itemVariants}>
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
                  </motion.div>

                  <motion.div variants={itemVariants}>
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
                  </motion.div>

                  <motion.div variants={itemVariants}>
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
                  </motion.div>

                  <motion.div variants={itemVariants}>
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
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Button
                      className="text-sm text-white rounded-lg bg-white/10 focus:outline-none"
                      type="submit"
                      isLoading={isLoadingEmail}
                    >
                      Submit Form
                    </Button>
                  </motion.div>
                </motion.form>
              </div>
            </motion.div>

            <motion.div className="col-span-6 mx-auto" variants={itemVariants}>
              <h2 className="text-base font-normal antialiased">
                {content.subtitle_2}
              </h2>
              <Button
                className="gap-2 text-base text-white rounded-lg bg-white/10 my-6"
                variant={"primary"}
                size="default"
                onClick={() => setIsOpen(true)}
              >
                Schedule Meeting
                <Calendar className="ml-2 w-4 h-4" />
              </Button>

              <p className="text-base font-normal">
                {content.meeting_description}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </MaxWidthWrapper>
    </>
  );
};

export default ContactPage;