import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async ({ params }) => {
  try {
    await connectToDB();

    const prompt = await Prompt.find({ creator: params.id }).populate(
      "creator"
    );

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed tpo fetch users posts", { status: 500 });
  }
};
