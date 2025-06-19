export interface User {
  id: string
  email: string
  full_name: string | null
  role: 'customer' | 'sales' | 'admin'
}

export interface Product {
  id: string
  code: string
  name: string
  description: string
  price: number
  image_url: string
  active: boolean
  created_at: string
  updated_at: string
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Order {
  id: string
  order_number: string
  user_id: string
  status: 'pending' | 'processing' | 'delivered' | 'cancelled'
  total_amount: number
  created_at: string
  updated_at: string
  items?: OrderItem[]
}

export interface OrderItem {
  id: string
  order_id: string
  product_id: string
  quantity: number
  unit_price: number
  total_price: number
  product?: Product
}

export interface EmailSetting {
  id: string
  type: 'customer_notification' | 'internal_notification'
  email: string
  active: boolean
}