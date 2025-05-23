import Logo from "@/models/logoModel";
import { auth } from "@clerk/nextjs/server";
import dbConnect from "@/lib/mongodb";

export default async function fetchdata() {
  await dbConnect();
  const { userId } = await auth();
  const logos = await Logo.find({ createdBy: userId });
  return logos;
}
