import { Resend } from "resend";
import Busboy from "busboy";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const bb = Busboy({ headers: req.headers });

  let name = "";
  let email = "";
  let fileBuffer = null;
  let fileName = "";

  bb.on("field", (fieldname, val) => {
    if (fieldname === "name") name = val;
    if (fieldname === "email") email = val;
  });

  bb.on("file", (fieldname, file, info) => {
    fileName = info.filename;
    const chunks = [];

    file.on("data", (data) => chunks.push(data));
    file.on("end", () => {
      fileBuffer = Buffer.concat(chunks);
    });
  });

  bb.on("finish", async () => {
    try {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "tanvikumbhar6417@gmail.com",
        subject: "New Job Application",
        html: `<p>Name: ${name}</p><p>Email: ${email}</p>`,
        attachments: [
          {
            filename: fileName,
            content: fileBuffer,
          },
        ],
      });

      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  req.pipe(bb);
}