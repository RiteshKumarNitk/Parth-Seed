import { Star } from "lucide-react";

export default function ReviewSection() {
  const reviews = [
    {
      id: 1,
      name: "Ramesh Kumar",
      role: "Farmer, Maharashtra",
      text: "Parth Seeds has transformed my yield this year. The cotton seeds showed excellent resistance to pests and the overall quality of the crop is outstanding. Highly recommended!",
      rating: 5,
    },
    {
      id: 2,
      name: "Suresh Patel",
      role: "Distributor, Gujarat",
      text: "I've been distributing Parth Seeds for 5 years now. The consistent quality and germination rates keep my customers coming back. Their support team is also very responsive.",
      rating: 5,
    },
    {
      id: 3,
      name: "Amit Singh",
      role: "Farmer, Punjab",
      text: "The wheat varieties from Parth Seeds have significantly improved my harvest. Even in challenging weather conditions, the crop stood strong. Very satisfied with the results.",
      rating: 4,
    },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="section-title text-center">
          <h2 className="text-center w-full">What Our Farmers Say</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover how Parth Seeds is making a difference in the lives of farmers and agricultural partners across the country.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < review.rating ? "currentColor" : "none"}
                    className={i < review.rating ? "text-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">
                "{review.text}"
              </p>
              <div>
                <h4 className="font-bold text-primary">{review.name}</h4>
                <p className="text-xs text-gray-500">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
