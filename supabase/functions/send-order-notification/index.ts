import { corsHeaders } from '../_shared/cors.ts'

interface OrderNotificationRequest {
  order_number: string
  user_email: string
  user_name: string
  total_amount: number
  items: Array<{
    name: string
    quantity: number
    price: number
  }>
}

Deno.serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    })
  }

  try {
    const { 
      order_number, 
      user_email, 
      user_name, 
      total_amount, 
      items 
    }: OrderNotificationRequest = await req.json()

    // Create email content
    const customerEmailContent = `
      <h2>¡Gracias por tu compra en TurismoPortal!</h2>
      <p>Hola ${user_name},</p>
      <p>Tu pedido <strong>#${order_number}</strong> ha sido confirmado exitosamente.</p>
      
      <h3>Detalles del pedido:</h3>
      <ul>
        ${items.map(item => `
          <li>${item.name} - Cantidad: ${item.quantity} - $${item.price.toLocaleString()}</li>
        `).join('')}
      </ul>
      
      <p><strong>Total: $${total_amount.toLocaleString()}</strong></p>
      
      <p>Nos pondremos en contacto contigo pronto para coordinar los detalles de tu viaje.</p>
      
      <p>¡Gracias por elegir TurismoPortal!</p>
    `

    const internalEmailContent = `
      <h2>Nuevo Pedido Recibido</h2>
      <p><strong>Número de Pedido:</strong> #${order_number}</p>
      <p><strong>Cliente:</strong> ${user_name} (${user_email})</p>
      <p><strong>Total:</strong> $${total_amount.toLocaleString()}</p>
      
      <h3>Productos:</h3>
      <ul>
        ${items.map(item => `
          <li>${item.name} - Cantidad: ${item.quantity} - $${item.price.toLocaleString()}</li>
        `).join('')}
      </ul>
      
      <p>Por favor, procesa este pedido en el sistema administrativo.</p>
    `

    // In a real implementation, you would integrate with an email service like:
    // - SendGrid
    // - Mailgun  
    // - Amazon SES
    // - Nodemailer with SMTP
    
    // For this demo, we'll just log the emails that would be sent
    console.log('Customer Email:', {
      to: user_email,
      subject: `Confirmación de Pedido #${order_number} - TurismoPortal`,
      html: customerEmailContent
    })

    console.log('Internal Email:', {
      to: 'ventas@turismoportal.com',
      subject: `Nuevo Pedido #${order_number}`,
      html: internalEmailContent
    })

    // Simulate email sending success
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Notifications sent successfully',
        order_number 
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    )

  } catch (error) {
    console.error('Error sending notifications:', error)
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Failed to send notifications' 
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    )
  }
})