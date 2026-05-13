"use client";

import React, { useState, Suspense } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Search, Filter, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Field Crops", "Vegetable Crops", "Bio Products"];

function ProductListContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const categoryParam = searchParams.get("category");
  const activeCategory = (categoryParam && categories.includes(categoryParam)) ? categoryParam : "All";
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryChange = (cat: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (cat === "All") {
      params.delete("category");
    } else {
      params.set("category", cat);
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const filteredProducts = products.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subcategory.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Sidebar */}
      <aside className="lg:w-1/4">
        <div className="bg-muted p-6 border border-border sticky top-32">
          <div className="flex items-center gap-2 mb-6 pb-2 border-b border-border">
            <Filter size={16} className="text-primary" />
            <h4 className="text-sm m-0">FILTER PRODUCTS</h4>
          </div>

          <div className="space-y-6">
            <div>
              <label className="text-[10px] font-bold uppercase text-gray-500 mb-2 block">Search Variety</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-9 pr-3 py-2 bg-white border border-border text-xs focus:outline-none focus:border-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] font-bold uppercase text-gray-500 mb-2 block">Categories</label>
              <div className="flex flex-col gap-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={cn(
                      "text-left px-3 py-2 text-[11px] font-bold border-l-2 transition-all",
                      activeCategory === cat
                        ? "bg-white border-primary text-primary"
                        : "text-gray-500 border-transparent hover:bg-gray-50"
                    )}
                  >
                    {cat.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Grid */}
      <div className="lg:w-3/4">
        <div className="mb-6 flex justify-between items-center">
          <span className="text-xs text-gray-500 font-bold">SHOWING {filteredProducts.length} VARIETIES</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="standard-card flex flex-col">
              <div className="relative h-48 mb-4 border border-border overflow-hidden bg-muted">
                <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
                <div className="absolute top-0 right-0 bg-accent text-white px-2 py-1 text-[9px] font-bold uppercase">
                  {product.subcategory}
                </div>
              </div>
              <h4 className="text-sm mb-3 normal-case">{product.name}</h4>
              <p className="text-[11px] text-gray-500 mb-6 line-clamp-3 leading-relaxed">
                {product.description}
              </p>
              <div className="mt-auto pt-4 border-t border-border flex justify-between items-center">
                <Link href={`/products/${product.id}`} className="text-primary font-bold text-[10px] hover:underline flex items-center gap-1.5 uppercase tracking-wider">
                  Details <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 border border-border bg-muted/30">
            <p className="text-sm text-gray-400 font-bold uppercase">No products found for this search.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="pt-24 md:pt-[110px]">
        {/* Banner */}
        <section className="bg-primary py-12 text-white">
          <div className="container-custom">
            <h1 className="text-white mb-2">Our Products</h1>
            <p className="text-gray-300 text-sm">Providing high-yielding hybrid seeds for sustainable agriculture.</p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <Suspense fallback={<div className="text-center py-20 font-bold text-primary">LOADING VARIETIES...</div>}>
              <ProductListContent />
            </Suspense>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
