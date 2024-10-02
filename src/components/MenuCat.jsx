
export default function MenuCat() {

    const menucat = [
        { id: 1, image: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingapp.s3-accelerate.amazonaws.com%2Fstatic_images%2Fcategories%2Foffers.png&w=96&q=75', link: "#" },
        { id: 2, image: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2Fc2219d84f87ae7b450150d3147e05b4f.png&w=96&q=75', link: "#" },
        { id: 3, image: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2Fc8698e385ea4a0641fcf0dac240911ff.png&w=96&q=75', link: "#" },
        { id: 4, image: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2F796fcf4984123bdd005d8ff6243502df.png&w=96&q=75', link: "#" },
        { id: 5, image: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2Fdcaafe42932f53396b0c5e693adf2b2d.png&w=96&q=75', link: "#" },
        { id: 6, image: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2Ffaac7c82b65453afc51e956495647091.png&w=96&q=75', link: "#" },
        { id: 7, image: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2Fe2208fb8252fa0e4bff76c6c24ff7bde.png&w=96&q=75', link: "#" },
        { id: 8, image: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2Fa9fe795a2d53c1263c2b29e0b9495195.png&w=96&q=75', link: "#" },
        { id: 9, image: 'https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_categorys%2F14851a28feec6094518723ac1bcc0b4b.png&w=96&q=75', link: "#" },
    ]



    return (
        <div className="flex items-center bg-stone-900 w-full overflow-x-scroll md:overflow-hidden scroll-with-no-display sticky z-10 top-28">
            <div className="flex items-center h-full px-6 py-2 mx-auto gap-4">
                {menucat.map(cat => (
                    <div key={cat.id} className=" cursor-pointer w-20 h-20 hover:animate-pulse">
                        <a href={cat.link}>
                            <img width='81' height='81' src={cat.image} alt="" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
