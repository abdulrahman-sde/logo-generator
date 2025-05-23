"use server";
import Logo from "@/models/logoModel";
import { auth } from "@clerk/nextjs/server";
import dbConnect from '@/lib/mongodb'
import { revalidatePath } from "next/cache";



export const saveToDB = async (imageUrl: string) => {
  const { userId } = await auth();
  if (!imageUrl) {
    return "no image url present";
  }
  await dbConnect()

  try {
    const logo = await Logo.create({
      imageUrl,
      createdBy: userId,
    });
    revalidatePath('/my-work')
  } catch (err) {
    console.log(err)
    return "Error creating logo "
  }
};
