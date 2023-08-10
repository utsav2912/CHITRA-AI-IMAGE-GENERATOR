import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res = await request.json(); // res now contains body
  const prompt = res.prompt;

  const response = await fetch(
    "https://ai-image-app.azurewebsites.net/api/generateImage?",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    }
  );

  const textData = await response.text();

  return NextResponse.json(textData);
}


// http://localhost:7071/api/getChatGptSuggestion

// https://ai-image-app.azurewebsites.net/api/generateimage