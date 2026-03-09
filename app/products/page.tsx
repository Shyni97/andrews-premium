import PageLayout from "@/components/PageLayout";
import Image from "next/image";

export const metadata = { title: "Products | Andrews Premium" };

const products = [
  { name: "Ceylon Pepper Bacon", category: "Signature Range", tag: "Bestseller", desc: "Juicy, full-flavoured pork sausages seasoned with a proprietary blend of herbs and spices that have defined our brand for over two decades.", image: "/pro1.jpeg" },
  { name: "Pork Bacon Ends", category: "Smoked Collection", tag: "New", desc: "Slow-smoked over natural hardwood for a deep, rich flavour profile. Perfect for grilling, frying, or enjoying straight from the pack.", image: "/pro2.jpeg" },
  { name: "British Back Bacon", category: "Morning Range", tag: "Popular", desc: "Thin, delicately seasoned pork links crafted specifically for the breakfast table. Light on spice, rich in flavour.", image: "/pro3.jpeg" },
  { name: "Pork Chops", category: "Specialty Range", tag: "Spicy", desc: "A bold, pepper-forward sausage for those who like their heat. Made with coarsely cracked black and white pepper.", image: "/pro4.jpeg" },
  { name: "Pork Shoulder Chops", category: "Premium Cuts", tag: "Limited", desc: "Hand-trimmed pork belly strips, lightly marinated and ready to pan-fry or grill. A premium cut for extraordinary meals.", image: "/pro5.jpeg" },
  { name: "Pork Spear Ribs", category: "Snack Range", tag: "Party Size", desc: "Bite-sized cocktail sausages perfect for entertaining, catering, and snacking. Available in classic and smoky variants.", image: "/pro6.jpeg" },
];

export default function ProductsPage() {
  return (
    <PageLayout
      title="Our Products"
      subtitle="Every Andrews Premium product is crafted from hand-selected pork, processed in our certified facility, and packed for peak freshness."
      breadcrumb="Products"
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              {/* Product Image */}
              <div className="aspect-[4/3] bg-gray-50 relative overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3 bg-[#CC0000] text-white text-[10px] font-bold px-2.5 py-1 rounded-full z-10">{p.tag}</div>
              </div>
              <div className="p-5">
                <p className="text-[#e91d26] text-[10px] font-bold tracking-[0.2em] uppercase mb-1">{p.category}</p>
                <h3 className="font-bold text-gray-900 text-base mb-2">{p.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                <a href="/contact" className="inline-flex items-center gap-1 text-[#e91d26] text-sm font-semibold hover:gap-2 transition-all duration-200">
                  Enquire Now
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
