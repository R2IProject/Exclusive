import Image from "next/image";

export default function ViewProductPage() {

    const products = [
        {
            src: "/images/product/image 57.png",
            alt: "Image columns 1"
        }
    ]

    return (
        <main>
            <div>
                {/* {products.map((product, index)} */}
                <Image />
            </div>
        </main>
    )
}