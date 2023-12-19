import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  processor: {
    type: String,
  },
  memory: {
    type: String,
  },
  OS: {
    type: String,
  },
  // /price, name, type, processor, memory, OS.
});

const Product = mongoose.model("Product", productSchema);

export default Product;