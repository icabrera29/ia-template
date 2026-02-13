/**
 * Vercel Serverless Function - Email Handler
 *
 * Handles contact form submissions using Resend API
 *
 * Environment Variables Required:
 * - RESEND_API_KEY: Your Resend API key
 * - RECIPIENT_EMAIL: Email address to receive form submissions
 */

import { Resend } from 'resend';

// Initialize Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * CORS headers for cross-origin requests
 */
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

/**
 * Main handler function
 */
export default async function handler(req, res) {
  // Handle CORS preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).json({ success: true });
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed'
    });
  }

  try {
    // Extract form data
    const { nombre, apellido, email, telefono, mensaje } = req.body;

    // Validate required fields
    if (!nombre || !email || !mensaje) {
      return res.status(400).json({
        success: false,
        error: 'Faltan campos requeridos (nombre, email, mensaje)'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Email inválido'
      });
    }

    // Compose email content
    const fullName = apellido ? `${nombre} ${apellido}` : nombre;
    const phoneInfo = telefono ? `\n📱 Teléfono: ${telefono}` : '';

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Formulario Web <onboarding@resend.dev>', // Replace with your verified domain
      to: [process.env.RECIPIENT_EMAIL || 'tu-email@ejemplo.com'],
      replyTo: email,
      subject: `Nueva consulta de ${fullName}`,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #1A1A1A;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #B85C38 0%, #D4816D 100%);
              color: white;
              padding: 30px;
              border-radius: 12px 12px 0 0;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
              font-weight: 600;
            }
            .content {
              background: #FAF8F5;
              padding: 30px;
              border-radius: 0 0 12px 12px;
            }
            .field {
              margin-bottom: 20px;
              padding: 15px;
              background: white;
              border-radius: 8px;
              border-left: 3px solid #B85C38;
            }
            .field-label {
              font-weight: 600;
              color: #6B6460;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 5px;
            }
            .field-value {
              color: #1A1A1A;
              font-size: 16px;
            }
            .message-box {
              background: white;
              padding: 20px;
              border-radius: 8px;
              border-left: 3px solid #B85C38;
              margin-top: 20px;
            }
            .footer {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #E5E5E5;
              font-size: 14px;
              color: #6B6460;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>📬 Nueva Consulta</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Formulario de Contacto - Valentina Reyes</p>
          </div>

          <div class="content">
            <div class="field">
              <div class="field-label">👤 Nombre Completo</div>
              <div class="field-value">${fullName}</div>
            </div>

            <div class="field">
              <div class="field-label">✉️ Email</div>
              <div class="field-value"><a href="mailto:${email}" style="color: #B85C38; text-decoration: none;">${email}</a></div>
            </div>

            ${telefono ? `
            <div class="field">
              <div class="field-label">📱 Teléfono</div>
              <div class="field-value"><a href="tel:${telefono}" style="color: #B85C38; text-decoration: none;">${telefono}</a></div>
            </div>
            ` : ''}

            <div class="message-box">
              <div class="field-label">💬 Mensaje</div>
              <div class="field-value" style="white-space: pre-wrap; margin-top: 10px;">${mensaje}</div>
            </div>

            <div class="footer">
              <p>Este mensaje fue enviado desde el formulario de contacto de tu sitio web.</p>
              <p style="margin: 5px 0 0 0;">Puedes responder directamente a este email.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Nueva consulta desde el sitio web

Nombre: ${fullName}
Email: ${email}${phoneInfo}

Mensaje:
${mensaje}

---
Puedes responder directamente a este email.
      `.trim()
    });

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Email enviado correctamente',
      id: data.id
    });

  } catch (error) {
    console.error('Error sending email:', error);

    return res.status(500).json({
      success: false,
      error: 'Error al enviar el email',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}
