import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Star, Users, Shield } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Descubre el Mundo con Nosotros
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Paquetes turísticos únicos para crear recuerdos inolvidables. 
              Desde destinos nacionales hasta aventuras internacionales.
            </p>
            <div className="space-x-4">
              <Link to="/products" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors duration-200">
                Ver Paquetes
              </Link>
              <Link to="/register" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-8 rounded-lg transition-colors duration-200">
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir TurismoPortal?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Somos líderes en la comercialización de paquetes turísticos con años de experiencia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Destinos Únicos</h3>
              <p className="text-gray-600">Descubre lugares increíbles tanto nacionales como internacionales</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Calidad Premium</h3>
              <p className="text-gray-600">Paquetes todo incluido con los mejores servicios y comodidades</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Para Todos</h3>
              <p className="text-gray-600">Opciones para individuos, familias y grupos grandes</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Confianza Total</h3>
              <p className="text-gray-600">Años de experiencia y miles de clientes satisfechos</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Listo para tu próxima aventura?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Explora nuestros paquetes turísticos y encuentra el viaje perfecto para ti
          </p>
          <Link to="/products" className="btn-primary text-lg py-3 px-8">
            Explorar Paquetes
          </Link>
        </div>
      </section>
    </div>
  )
}