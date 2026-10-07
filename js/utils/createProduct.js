import { Phone } from "../models/Phone.js";
import { Smartwatch } from "../models/Smartwatch.js";
import { Accessory } from "../models/Accessory.js";

export function createProduct(data) {
  switch (data.category) {
    case "Phones":
      return new Phone(
        data.id,
        data.name,
        data.brand,
        data.price,
        data.image,
        data.stock,
        data.category,
        data.storage,
      );
    case "Smartwatches":
      return new Smartwatch(
        data.id,
        data.name,
        data.brand,
        data.price,
        data.image,
        data.stock,
        data.category,
        data.batteryLife,
      );
    case "Accessories":
      return new Accessory(
        data.id,
        data.name,
        data.brand,
        data.price,
        data.image,
        data.stock,
        data.category,
        data.accessoryType,
      );
    default:
      throw new Error(`Unknown product category: ${data.category}`);
  }
}
