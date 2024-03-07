import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { utapi } from "../server/uploadthing";

export const POST = async (request: NextRequest) => {
  try {
    // Assuming the body has already been parsed as JSON
    const { fileKey } = await request.json();

    // Your deletion logic here
    await utapi.deleteFiles(fileKey);

    // Responding to the client
    return new NextResponse(
      JSON.stringify({ message: "File successfully deleted" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Error processing request", err }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
