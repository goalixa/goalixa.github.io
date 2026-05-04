import ServiceCard from './ServiceCard'
import { services } from '../data/servicesData'

export default function ServicesGrid() {
  return (
    <div className="services-grid">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  )
}
