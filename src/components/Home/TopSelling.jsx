import { Link } from "react-router-dom";
import { productsList } from "../../utils/data";
import ProductCard from "../Menu/ProductCard";

export default function TopSelling() {
    return (
        <>
            <div className="px-2 my-8">
                <div className="px-8">
                    <h2 className="text-orange-600 text-2xl text-start font-bold uppercase">Top Selling</h2>
                </div>
                <div className="flex justify-center flex-wrap gap-4">
                    {productsList.map(product => (
                        product.topSelling &&
                        <ProductCard
                            key={product.title}
                            product={product}
                        />
                    ))}
                    <Link to='/menu'>
                        <div className="flex self-end items-end justify-center font-main text-[#1c1c1b] mt-5 max-w-[288px] min-w-[288px] md:w-[320px] min-h-[213px] max-h-[213px] md:mt-11 bg-secondary-gray-10 rounded-xl hover:-translate-y-2 ease-in-out duration-1000 cursor-pointer">
                            <span>
                                <span>
                                    View Menu
                                    <svg className="size-8 inline-block fill-current shrink-0 text-4xl" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowRightAltIcon">
                                        <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z">
                                        </path>
                                    </svg>
                                </span>
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}