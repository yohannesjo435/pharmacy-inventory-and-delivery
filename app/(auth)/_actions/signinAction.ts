"use server";

import { auth } from "@/lib/auth/auth";
import { APIError } from "better-auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function signinAction(prevState: unknown, data: FormData) {
  const email = data.get("email") as string;
  const phone = data.get("phone") as string;
  const password = data.get("password") as string;

  // Perform signup logic here

  try {
    await auth.api.signInPhoneNumber({
      body: {
        phoneNumber: phone,
        password,
      },
    });

    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
      headers: await headers(),
    });

    return {
      errorMessage: "successful",
    };
  } catch (error) {
    if (error instanceof APIError) {
      return {
        name,
        email,
        phoneNumber: parseInt(phone),
        password,
        errorMessage: error.message,
      };
    }
    console.log(error);
  }

  //   redirect("/");
}

export default signinAction;
