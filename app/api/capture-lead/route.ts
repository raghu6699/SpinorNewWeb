import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Add to Google Sheets
    try {
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
          private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const sheets = google.sheets({ version: 'v4', auth });
      const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: 'Sheet1!A:C',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[email, new Date().toLocaleString(), 'Website Lead Popup']],
        },
      });
    } catch (sheetError) {
      console.error('Google Sheets error:', sheetError);
      // Continue even if sheets fails
    }

    // Send email notification
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // Send email to company
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.CONTACT_TO_EMAIL,
        subject: 'New Newsletter Subscriber',
        html: `
          <h2>New Newsletter Subscriber</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Source:</strong> Website Lead Popup</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        `,
      });

      // Send confirmation email to subscriber
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: 'Welcome to Spinor Innovations',
        html: `
          <h2>Thank you for subscribing!</h2>
          <p>We'll share exclusive insights on how AI agents can transform your business.</p>
          <p>Best regards,<br/>Spinor Innovations Team</p>
        `,
      });
    } catch (emailError) {
      console.error('Email error:', emailError);
      // Continue even if email fails
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to capture lead' },
      { status: 500 }
    );
  }
}
