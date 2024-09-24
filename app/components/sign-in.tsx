"use client";
import React from "react";
import { signIn } from "next-auth/react"; // Import signIn from next-auth/react

export default function SignIn() {
  const handleSignIn = async () => {
    await signIn("google");
  };

  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { type: "button", onClick: handleSignIn },
      "Sign in with Google"
    )
  );
}
