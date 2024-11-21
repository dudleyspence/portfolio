"use client";
import { Textarea, Input, Button } from "@material-tailwind/react";

export default function ContactForm() {
  return (
    <div>
      <form
        className="w-96 flex flex-col items-end gap-6 mt-10"
        id="contactform"
        action="https://formsubmit.io/send/dudleyspence5@gmail.com"
        method="POST"
      >
        <Input
          type="text"
          name="name"
          placeholder="Full Name"
          className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
          size="lg"
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />
        <input
          name="_redirect"
          type="hidden"
          id="name"
          value="http://localhost:3004/"
        ></input>
        <input type="text" name="_formsubmit_id" className="hidden" />
        <Input
          type="email"
          name="email"
          placeholder="Email Address"
          className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
          size="lg"
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />
        <Textarea
          name="message"
          placeholder="Message"
          className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
          size="lg"
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />
        <Button
          type="submit"
          size="sm"
          className="rounded-md self-end bg-buttonGreen"
        >
          Send
        </Button>
      </form>
    </div>
  );
}
