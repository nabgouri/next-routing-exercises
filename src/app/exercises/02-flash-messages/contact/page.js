"use client";
import { useRouter } from "next/navigation";

import React, { useContext } from "react";
import { ToastContext } from "../../../../components/ToastProvider";
function ContactPage() {
  const { createToast } = useContext(ToastContext);
  const router = useRouter();
  function handleSubmit(event) {
    event.preventDefault();

    createToast(
      "Your message was recieved, we will contact with you shortly",
      "success"
    );
    router.push("/exercises/02-flash-messages");
  }
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
