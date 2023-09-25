import React, { useState } from "react";

function ProductDetails() {
  const product = {
    id: 1,
    name: "Nike Air Max 270",
    price: 150,
    cover:
      "https://img.freepik.com/photos-gratuite/image-frontale-realiste-du-sac-dos-rouge-fond-blanc_125540-3474.jpg?w=740&t=st=1695678891~exp=1695679491~hmac=24bceb250c3633df213b5d12715bc198ddf5f78ba5ee3d9bda92e8d9f2824176",
    images: [
      "https://img.freepik.com/photos-gratuite/image-frontale-realiste-du-sac-dos-rouge-fond-blanc_125540-3474.jpg?w=740&t=st=1695678891~exp=1695679491~hmac=24bceb250c3633df213b5d12715bc198ddf5f78ba5ee3d9bda92e8d9f2824176 ",
      "https://img.freepik.com/photos-gratuite/couleur-elegance-violet-femme-luxe_1203-6518.jpg?w=360&t=st=1695678991~exp=1695679591~hmac=5bf5c04f0c99aa084417768acd41ecef9689221afbf1478860d67cf9ac6c9bfd",
      "https://img.freepik.com/photos-gratuite/belle-femme-elegante-mode-luxe-sac-main-bleu_1203-7657.jpg?w=1060&t=st=1695678975~exp=1695679575~hmac=b85e396303d247f06a086c3f2efe6a0665d2580dc883b37fd8f63497427f3ea9",
      "https://img.freepik.com/photos-gratuite/brillant-bleu-elegant-cuir-feminin_1203-6497.jpg?t=st=1695678975~exp=1695679575~hmac=b1998d6177a95443cbb7bb5546a6cbaa187d5170bbcddd98dd884e0add11bf5f",
    ],
    description:
      "The Nike Air Max 270 delivers visible cushioning under every step with updated Nike Air technology. Updated for modern comfort, it nods to the original, 1991 Air Max 180 with its exaggerated tongue top and heritage tongue logo.",
    rating: 4.5,
    reviews: 12,
    availability: "In Stock",
    brand: "Nike",
  };
  const [selectedImage, setSelectedImage] = useState(product.cover);
  return (
    <section className="bg-[#f6f9fc] pb-32 pt-12">
      <div>
        <img src={selectedImage} alt="" className="w-96 h-96"/>
        <div className="flex">
          {product.images.map((image, index) => {
            return (
              <img
                key={index}
                src={image}
                alt=""
                className="w-16 h-16 cursor-pointer"
                onMouseEnter={() => {setSelectedImage(image); console.log("showed")}}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
