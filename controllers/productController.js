import Product from "../models/productModel.js";
import mongoose from "mongoose";
export const insertDummyData = async () => {

  console.log("Importing Data...");

  let productArray = []

  // Only Releated to mobiles only
  const processors = ["Snapdragon 865", "Snapdragon 855", "Snapdragon 845", "Snapdragon 835", "Snapdragon 821", "Snapdragon 820", "Snapdragon 810", "Snapdragon 808", "Snapdragon 805", "Snapdragon 801", "Snapdragon 800", "Snapdragon 720G", "Snapdragon 712", "Snapdragon 710", "Snapdragon 675", "Snapdragon 665", "Snapdragon 660", "Snapdragon 636", "Snapdragon 632", "Snapdragon 630", "Snapdragon 625", "Snapdragon 617", "Snapdragon 616", "Snapdragon 615", "Snapdragon 450", "Snapdragon 439", "Snapdragon 435", "Snapdragon 430", "Snapdragon 425", "Snapdragon 415", "Snapdragon 410", "Snapdragon 400", "Snapdragon 200", "Snapdragon 210", "Snapdragon 208", "Snapdragon 205", "Snapdragon 200", "Snapdragon 210", "Snapdragon 208", "Snapdragon 205", "Snapdragon 200", "Snapdragon 210", "Snapdragon 208", "Snapdragon 205", "Snapdragon 200", "Snapdragon 210", "Snapdragon 208", "Snapdragon 205", "Snapdragon 200", "Snapdragon 210", "Snapdragon 208", "Snapdragon 205", "Snapdragon 200", "Snapdragon 210", "Snapdragon 208", "Snapdragon 205", "Snapdragon 200", "Snapdragon 210", "Snapdragon 208", "Snapdragon 205", "Snapdragon 200", "Snapdragon 210", "Snapdragon 208", "Snapdragon 205", "Snapdragon 200", "Snapdragon 210", "Snapdragon 208", "Snapdragon 205", "Snapdragon 200", "Snapdragon 210", "Snapdragon 208", "Snapdragon 205"]


  const memories = ["4GB", "6GB", "8GB", "12GB", "16GB", "32GB", "64GB", "128GB", "256GB", "512GB", "1TB"]

  const OSs = ["Android 10", "Android 9.0", "Android 8.0", "Android 7.0", "Android 6.0", "Android 5.0", "Android 4.0", "Android 3.0", "Android 2.0", "Android 1.0"]
  // Mix Mobile Names
  const mobileNames = [
    "Samsung Galaxy S21",
    "iPhone 13 Pro",
    "Google Pixel 6",
    "OnePlus 9",
    "Xiaomi Mi 11",
    "Huawei P40",
    "LG G8 ThinQ",
    "Sony Xperia 1 III",
    "Motorola Edge+",
    "Nokia 9 PureView",
    "Oppo Find X3 Pro",
    "Vivo X60 Pro",
    "Realme GT",
    "Asus ROG Phone 5",
    "Lenovo Legion Phone Duel 2",
    "Xiaomi Redmi Note 10",
    "Samsung Galaxy A52",
    "iPhone SE (2020)",
    "Google Pixel 5a",
    "OnePlus Nord"
  ]


  // Mix Mobile Images
  const mobileImages = [
    "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s21-.jpg",
    "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro.jpg",
    "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-6.jpg",
    "https://fdn2.gsmarena.com/vv/bigpic/oneplus-9.jpg",
    "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-11.jpg",
    "https://fdn2.gsmarena.com/vv/bigpic/huawei-p40.jpg",
    "https://fdn2.gsmarena.com/vv/bigpic/lg-g8-thinq.jpg",
    "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-iii.jpg",
    "https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-plus.jpg",
    "https://fdn2.gsmarena.com/vv/bigpic/nokia-9-pureview.jpg",
    "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x3-pro.jpg",
    "https://fdn2.gsmarena.com/vv/bigpic/vivo-x60-pro.jpg",
    "https://fdn2.gsmarena.com/vv/bigpic/realme-gt.jpg",
    "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-5.jpg",
    "https://fdn2.gsmarena.com/vv/bigpic/lenovo-legion-phone-duel-2.jpg",
    "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-10.jpg",
    "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a52.jpg",
    "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-se-2020.jpg",
    "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-5a.jpg",
    "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord.jpg"
  ]


  // Mix Mobile Prices in thousands INR

  const mobilePrices = [
    69999,
    129999,
    59999,
    49999,
    49999,
    59999,
    49999,
    129999,
    99999,
    49999,
    69999,
    49999,
    59999,
    69999,
    69999,
    12999,
    29999,
    39999,
    29999,
    24999
  ]

  // Mix Mobile descriptions
  const mobileDescriptions = [
    "Samsung Galaxy S21 - 6.2'' display, Exynos 2100, 8GB RAM, 4000mAh battery, wireless & fast charging.",
    "Apple iPhone 13 Pro - 6.1'' display, A15 Bionic chip, supports wireless and fast charging.",
    "Google Pixel 6 - 6.4'' display, Google Tensor processor, 8GB RAM, 4614mAh battery, fast charging.",
    "OnePlus 9 - 6.55'' display, Snapdragon 888, 8GB RAM, 4500mAh battery, proprietary fast charging.",
    "Xiaomi Mi 11 - 6.81'' display, Snapdragon 888, 8GB RAM, 4600mAh battery, wireless & fast charging.",
    "Huawei P40 - 6.1'' display, Kirin 990 5G, 8GB RAM, 3800mAh battery, wireless & fast charging.",
    "LG G8 ThinQ - 6.1'' display, Snapdragon 855, 6GB RAM, 3500mAh battery, Quick Charge 3.0.",
    "Sony Xperia 1 III - 6.5'' display, Snapdragon 888, 12GB RAM, 4500mAh battery, proprietary fast charging.",
    "Motorola Edge+ - 6.7'' display, Snapdragon 865, 12GB RAM, 5000mAh battery, wireless & fast charging.",
    "Nokia 9 PureView - 5.99'' display, Snapdragon 845, 6GB RAM, 3320mAh battery, wireless & fast charging.",
    "Oppo Find X3 Pro - 6.7'' display, Snapdragon 888, 12GB RAM, 4500mAh battery, proprietary fast charging.",
    "Vivo X60 Pro - 6.56'' display, Snapdragon 870, 12GB RAM, 4200mAh battery, proprietary fast charging.",
    "Realme GT - 6.43'' display, Snapdragon 888, 8GB RAM, 4500mAh battery, proprietary fast charging.",
    "Asus ROG Phone 5 - 6.78'' display, Snapdragon 888, 8GB RAM, 6000mAh battery, proprietary fast charging.",
    "Lenovo Legion Phone Duel 2 - 6.92'' display, Snapdragon 888, 12GB RAM, 5500mAh battery, proprietary fast charging.",
    "Xiaomi Redmi Note 10 - 6.43'' display, Snapdragon 678, 4GB RAM, 5000mAh battery, proprietary fast charging.",
    "Samsung Galaxy A52 - 6.5'' display, Snapdragon 720G, 6GB RAM, 4500mAh battery, proprietary fast charging.",
    "Apple iPhone SE (2020) - 4.7'' display, A13 Bionic chip, 3GB RAM, supports wireless and fast charging.",
    "Google Pixel 5a - 6.34'' display, Snapdragon 765G, 6GB RAM, 4680mAh battery, proprietary fast charging.",
    "OnePlus Nord - 6.44'' display, Snapdragon 765G, 8GB RAM, 4115mAh battery, proprietary fast charging."
  ];


  for (let i = 0; i < 20; i++) {
    let product = {
      name: mobileNames[i],
      description: mobileDescriptions[i],
      price: mobilePrices[i],
      image: mobileImages[i],
      processor: processors[Math.floor(Math.random() * processors.length)],
      memory: memories[Math.floor(Math.random() * memories.length)],
      os: OSs[Math.floor(Math.random() * OSs.length)],
    }
    productArray.push(product)
  }

  await Product.insertMany(productArray)
  console.log("Data Imported!");
}



export const getAllProducts = async (req, res) => {
  try {

    let filter = {}
    let queryObj = req.query
    const page = parseInt(queryObj.page) || 1
    const limit = parseInt(queryObj.limit) || 10
    let excludeFields = ['page', 'limit']
    excludeFields.forEach(el => delete queryObj[el])
    console.log(queryObj)

    const queryKeys = Object.keys(queryObj)

    if (queryKeys.length > 0) {

      queryKeys.forEach(el => {
        filter[el] = { $regex: queryObj[el], $options: "i" }
      })

    }
    console.log({ filter })
    const data = await Product.find(filter).limit(limit).skip((page - 1) * limit)

    return res.status(200).json({ data, message: "Products Fetched Successfully" })



  } catch (error) {

    return res.status(500).json({ message: error.message });

  }




}

const getGroupedData = async (fieldName) => {
  console.log(fieldName)
  const data = await mongoose.connection.db.collection("products").aggregate([
    {
      $group: {
        _id: `$${fieldName?.toLowerCase()}`,
        count: { $sum: 1 },
      },
    },
  ]).toArray()
  return data?.reduce((acc, el) => {
    acc[el?._id] = el?.count
    return acc
  }
    , {})

}


export const getFilters = async (req, res) => {

  try {

    let groupNames = ["Processor", "Memory", "OS"]

    let resObj = {}
    await Promise.all(groupNames.map(async (el) => {
      const data = await getGroupedData(el)
      resObj[el] = data

    }
    ))
    return res.status(200).json({ data: resObj, message: "Filters Fetched Successfully" })


  } catch (error) {
    return res.status(500).json({ message: error.message });

  }


}