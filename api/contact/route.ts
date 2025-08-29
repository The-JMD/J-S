import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, message, to } = body

    // In a real implementation, you would use a service like Resend, SendGrid, or Nodemailer
    console.log("Contact form submission:", {
      from: email,
      to: to || "leila.idrissi@jsfirm.ma",
      subject: `Nouveau message de ${name} - J&S FIRM`,
      message: `
        Nom: ${name}
        Email: ${email}
        Entreprise: ${company || "Non spécifiée"}
        
        Message:
        ${message}
      `,
    })

    // Simulate successful email sending
    return NextResponse.json({ success: true, message: "Message envoyé avec succès" })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ success: false, message: "Erreur lors de l'envoi du message" }, { status: 500 })
  }
}
