import Product from "../models/productModel.js";

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
    "Samsung Galaxy S21 smartphone was launched on 14th January 2021. The phone comes with a 6.20-inch touchscreen display with a resolution of 1080x2400 pixels at a pixel density of 421 pixels per inch (ppi) and an aspect ratio of 20:9. Samsung Galaxy S21 is powered by a 2.2GHz octa-core Samsung Exynos 2100 processor that features 3 cores clocked at 2.8GHz, 4 cores clocked at 2.2GHz and 1 cores clocked at 2.9GHz. It comes with 8GB of RAM. The Samsung Galaxy S21 runs Android 11 and is powered by a 4000mAh battery. The Samsung Galaxy S21 supports wireless charging, as well as proprietary fast charging.",
    "Apple iPhone 13 Pro smartphone was launched on 14th September 2021. The phone comes with a 6.10-inch touchscreen display with a resolution of 1170x2532 pixels at a pixel density of 460 pixels per inch (ppi). The Apple iPhone 13 Pro supports wireless charging, as well as proprietary fast charging.",
    "Google Pixel 6 smartphone was launched on 19th October 2021. The phone comes with a 6.40-inch touchscreen display with a resolution of 1080x2400 pixels at a pixel density of 411 pixels per inch (ppi) and an aspect ratio of 20:9. Google Pixel 6 is powered by an octa-core Google Tensor processor. It comes with 8GB of RAM. The Google Pixel 6 runs Android 12 and is powered by a 4614mAh battery. The Google Pixel 6 supports proprietary fast charging.",
    "OnePlus 9 smartphone was launched on 23rd March 2021. The phone comes with a 6.55-inch touchscreen display with a resolution of 1080x2400 pixels at a pixel density of 402 pixels per inch (ppi) and an aspect ratio of 20:9. OnePlus 9 is powered by an octa-core Qualcomm Snapdragon 888 processor. It comes with 8GB of RAM. The OnePlus 9 runs Android 11 and is powered by a 4500mAh battery. The OnePlus 9 supports proprietary fast charging.",
    "Xiaomi Mi 11 smartphone was launched on 28th December 2020. The phone comes with a 6.81-inch touchscreen display with a resolution of 1440x3200 pixels at a pixel density of 515 pixels per inch (ppi) and an aspect ratio of 20:9. Xiaomi Mi 11 is powered by an octa-core Qualcomm Snapdragon 888 processor. It comes with 8GB of RAM. The Xiaomi Mi 11 runs Android 11 and is powered by a 4600mAh battery. The Xiaomi Mi 11 supports wireless charging, as well as proprietary fast charging.",
    "Huawei P40 smartphone was launched on 26th March 2020. The phone comes with a 6.10-inch touchscreen display with a resolution of 1080x2340 pixels and an aspect ratio of 19.5:9. Huawei P40 is powered by an octa-core HiSilicon Kirin 990 5G processor. It comes with 8GB of RAM. The Huawei P40 runs Android 10 and is powered by a 3800mAh battery. The Huawei P40 supports wireless charging, as well as proprietary fast charging.",
    "LG G8 ThinQ smartphone was launched in February 2019. The phone comes with a 6.10-inch touchscreen display with a resolution of 1440x3120 pixels at a pixel density of 564 pixels per inch (ppi) and an aspect ratio of 19.5:9. LG G8 ThinQ is powered by an octa-core Qualcomm Snapdragon 855 processor. It comes with 6GB of RAM. The LG G8 ThinQ runs Android 9.0 and is powered by a 3500mAh battery. The LG G8 ThinQ supports Quick Charge 3.0 fast charging.",
    "Sony Xperia 1 III smartphone was launched on 14th April 2021. The phone comes with a 6.50-inch touchscreen display with a resolution of 1644x3840 pixels and an aspect ratio of 21:9. Sony Xperia 1 III is powered by an octa-core Qualcomm Snapdragon 888 processor. It comes with 12GB of RAM. The Sony Xperia 1 III runs Android 11 and is powered by a 4500mAh battery. The Sony Xperia 1 III supports proprietary fast charging.",
    "Motorola Edge+ smartphone was launched on 22nd April 2020. The phone comes with a 6.70-inch touchscreen display with a resolution of 1080x2340 pixels at a pixel density of 385 pixels per inch (ppi) and an aspect ratio of 21:9. Motorola Edge+ is powered by an octa-core Qualcomm Snapdragon 865 processor. It comes with 12GB of RAM. The Motorola Edge+ runs Android 10 and is powered by a 5000mAh battery. The Motorola Edge+ supports wireless charging, as well as proprietary fast charging.",
    "Nokia 9 PureView smartphone was launched in February 2019. The phone comes with a 5.99-inch touchscreen display with a resolution of 1440x2880 pixels and an aspect ratio of 18:9. Nokia 9 PureView is powered by an octa-core Qualcomm Snapdragon 845 processor. It comes with 6GB of RAM. The Nokia 9 PureView runs Android 9.0 Pie and is powered by a 3320mAh battery. The Nokia 9 PureView supports wireless charging, as well as proprietary fast charging.",
    "Oppo Find X3 Pro smartphone was launched on 11th March 2021. The phone comes with a 6.70-inch touchscreen display with a resolution of 1440x3216 pixels at a pixel density of 525 pixels per inch (ppi) and an aspect ratio of 20:9. Oppo Find X3 Pro is powered by an octa-core Qualcomm Snapdragon 888 processor. It comes with 12GB of RAM. The Oppo Find X3 Pro runs Android 11 and is powered by a 4500mAh battery. The Oppo Find X3 Pro supports proprietary fast charging.",
    "Vivo X60 Pro smartphone was launched on 22nd March 2021. The phone comes with a 6.56-inch touchscreen display with a resolution of 1080x2376 pixels at a pixel density of 398 pixels per inch (ppi) and an aspect ratio of 19.8:9. Vivo X60 Pro is powered by an octa-core Qualcomm Snapdragon 870 processor. It comes with 12GB of RAM. The Vivo X60 Pro runs Android 11 and is powered by a 4200mAh battery. The Vivo X60 Pro supports proprietary fast charging.",
    "Realme GT smartphone was launched on 4th March 2021. The phone comes with a 6.43-inch touchscreen display with a resolution of 1080x2400 pixels and an aspect ratio of 20:9. Realme GT is powered by an octa-core Qualcomm Snapdragon 888 processor. It comes with 8GB of RAM. The Realme GT runs Android 11 and is powered by a 4500mAh battery. The Realme GT supports proprietary fast charging.",
    "Asus ROG Phone 5 smartphone was launched on 10th March 2021. The phone comes with a 6.78-inch touchscreen display with a resolution of 1080x2448 pixels and an aspect ratio of 20.4:9. Asus ROG Phone 5 is powered by an octa-core Qualcomm Snapdragon 888 processor. It comes with 8GB of RAM. The Asus ROG Phone 5 runs Android 11 and is powered by a 6000mAh battery. The Asus ROG Phone 5 supports proprietary fast charging.",
    "Lenovo Legion Phone Duel 2 smartphone was launched on 8th April 2021. The phone comes with a 6.92-inch touchscreen display with a resolution of 1080x2460 pixels and an aspect ratio of 20.5:9. Lenovo Legion Phone Duel 2 is powered by an octa-core Qualcomm Snapdragon 888 processor. It comes with 12GB of RAM. The Lenovo Legion Phone Duel 2 runs Android 11 and is powered by a 5500mAh battery. The Lenovo Legion Phone Duel 2 supports proprietary fast charging.",
    "Xiaomi Redmi Note 10 smartphone was launched on 4th March 2021. The phone comes with a 6.43-inch touchscreen display with a resolution of 1080x2400 pixels and an aspect ratio of 20:9. Xiaomi Redmi Note 10 is powered by an octa-core Qualcomm Snapdragon 678 processor. It comes with 4GB of RAM. The Xiaomi Redmi Note 10 runs Android 11 and is powered by a 5000mAh battery. The Xiaomi Redmi Note 10 supports proprietary fast charging.",
    "Samsung Galaxy A52 smartphone was launched on 17th March 2021. The phone comes with a 6.50-inch touchscreen display with a resolution of 1080x2400 pixels and an aspect ratio of 20:9. Samsung Galaxy A52 is powered by an octa-core Qualcomm Snapdragon 720G processor. It comes with 6GB of RAM. The Samsung Galaxy A52 runs Android 11 and is powered by a 4500mAh battery. The Samsung Galaxy A52 supports proprietary fast charging.",
    "Apple iPhone SE (2020) smartphone was launched on 15th April 2020. The phone comes with a 4.70-inch touchscreen display with a resolution of 750x1334 pixels at a pixel density of 326 pixels per inch (ppi). Apple iPhone SE (2020) is powered by a hexa-core Apple A13 Bionic processor. It comes with 3GB of RAM. The Apple iPhone SE (2020) runs iOS 13 and is powered by a 1821mAh battery. The Apple iPhone SE (2020) supports wireless charging, as well as proprietary fast charging.",
    "Google Pixel 5a smartphone was launched on 17th August 2021. The phone comes with a 6.34-inch touchscreen display with a resolution of 1080x2400 pixels at a pixel density of 413 pixels per inch (ppi) and an aspect ratio of 20:9. Google Pixel 5a is powered by an octa-core Qualcomm Snapdragon 765G processor. It comes with 6GB of RAM. The Google Pixel 5a runs Android 11 and is powered by a 4680mAh battery. The Google Pixel 5a supports proprietary fast charging.",
    "OnePlus Nord smartphone was launched on 21st July 2020. The phone comes with a 6.44-inch touchscreen display with a resolution of 1080x2400 pixels and an aspect ratio of 20:9. OnePlus Nord is powered by an octa-core Qualcomm Snapdragon 765G processor. It comes with 8GB of RAM. The OnePlus Nord runs Android 10 and is powered by a 4115mAh battery. The OnePlus Nord supports proprietary fast charging."
  ]


  for (let i = 0; i < 20; i++) {
    let product = {
      name: mobileNames[i],
      description: mobileDescriptions[i],
      price: mobilePrices[i],
      image: mobileImages[i],
      processor: processors[Math.floor(Math.random() * processors.length)],
      memory: memories[Math.floor(Math.random() * memories.length)],
      OS: OSs[Math.floor(Math.random() * OSs.length)],
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