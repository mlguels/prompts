import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async () => {
  try {
    await connectToDatabase();

    const prompts = await Prompt.find({}).populate("creator");

    return new Response(JSON.stringify(prompts));
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
