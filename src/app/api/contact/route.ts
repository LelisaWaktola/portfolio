import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    // Check if API key exists
    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey || apiKey === 'your-resend-api-key-here') {
      console.error('RESEND_API_KEY is missing or not configured');
      return NextResponse.json(
        { 
          error: 'Email service not configured', 
          details: 'RESEND_API_KEY environment variable is missing or invalid. Please add your Resend API key to the .env file.' 
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    
    const body = await request.json();
    const { name, email, projectType, message } = body;

    // Validate required fields
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Get environment variables
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const toEmail = process.env.RESEND_TO_EMAIL;

    // Send email using Resend
    const data = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New Contact Form Submission: ${projectType}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #0891b2 0%, #1e3a8a 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
              .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #0891b2; margin-bottom: 5px; }
              .value { background: white; padding: 12px; border-radius: 6px; border-left: 3px solid #0891b2; }
              .footer { text-align: center; margin-top: 20px; color: #64748b; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 24px;">📬 New Contact Form Submission</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${email}" style="color: #0891b2; text-decoration: none;">${email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Project Type:</div>
                  <div class="value">${projectType}</div>
                </div>
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value" style="white-space: pre-wrap;">${message}</div>
                </div>
              </div>
              <div class="footer">
                <p>This email was sent from your portfolio contact form.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log('Email sent successfully:', data);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        id: data.id 
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Detailed error sending email:', {
      message: error.message,
      name: error.name,
      stack: error.stack,
      response: error.response?.data
    });
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send email';
    let errorDetails = error.message;

    if (error.message?.includes('API key')) {
      errorMessage = 'Invalid API key';
      errorDetails = 'Your Resend API key appears to be invalid. Please check your .env file and ensure you have a valid API key from resend.com';
    } else if (error.message?.includes('domain')) {
      errorMessage = 'Domain verification required';
      errorDetails = 'You need to verify your domain in Resend dashboard, or use onboarding@resend.dev for testing';
    } else if (error.message?.includes('rate limit')) {
      errorMessage = 'Rate limit exceeded';
      errorDetails = 'Too many requests. Please try again later.';
    }

    return NextResponse.json(
      { 
        error: errorMessage, 
        details: errorDetails
      },
      { status: 500 }
    );
  }
}
