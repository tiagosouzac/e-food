import { Address } from "@/core/types/restaurant"

export const formatAddress = (address: Address) => {
  return `${address.street}, ${address.number} - ${address.neighboorhood}, ${address.city} - ${address.state}`
}
