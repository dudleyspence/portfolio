"use client";
import { Textarea, Input, Button } from "@material-tailwind/react";
import React from "react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const [result, setResult] = React.useState("");
  const t = useTranslations("contact");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bc4a1d50-bdf9-46a0-8dbf-6bd39e2f0ac0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <form
        className="w-full max-w-[300px] flex flex-col items-end gap-6 mt-10"
        onSubmit={onSubmit}
      >
        <Input
          type="text"
          name="name"
          required
          placeholder={t("fullname")}
          className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 w-full"
          size="lg"
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />

        <Input
          type="email"
          name="email"
          required
          placeholder={t("email")}
          className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 w-full"
          size="lg"
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />
        <Textarea
          name="message"
          placeholder={t("message")}
          required
          className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 w-full"
          size="lg"
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />
        <Button
          type="submit"
          size="sm"
          className="rounded-md self-center hover:bg-orange lg:self-end bg-buttonGreen"
        >
          {t("send")}
        </Button>
      </form>
      <span className="mt-10">{result}</span>
    </div>
  );
}
