export default async function extract(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ status: "error", message: "Method not allowed" });
  }
  if (!req.body) {
    return res
      .status(400)
      .json({ status: "error", message: "Bad request", cat: "no body" });
  }
  if (Object.keys(req.body).length === 0) {
    return res
      .status(400)
      .json({ status: "error", message: "Bad request", cat: "empty body" });
  }

  const body = req.body;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/extract/json`,
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return res
    .status(200)
    .json({ status: "success", data: await response.json() });
}
