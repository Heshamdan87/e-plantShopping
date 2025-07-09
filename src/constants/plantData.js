/**
 * 🌱 Paradise Nursery Plant Collection 🌱
 * 
 * A carefully curated collection of plants that I've personally researched
 * and selected for their beauty, benefits, and ease of care.
 * 
 * Each plant in this collection has been chosen with love and attention to detail,
 * ensuring that every plant parent - from beginner to expert - can find their
 * perfect green companion.
 * 
 * This collection represents my passion for connecting people with nature
 * and making plant care accessible and enjoyable for everyone.
 * 
 * @author Hesham Dan
 * @created 2025
 * @version 1.0.0
 * 
 * Categories thoughtfully organized:
 * - Air Purifiers: For those who want cleaner, fresher air
 * - Aromatics: For people who love natural fragrances
 * - Insect Repellents: Natural protection for your space
 * - Medicinal: Traditional healing plants for wellness
 * - Low Maintenance: Perfect for busy plant parents
 */

// Plant categories - each one represents a different way plants can enrich our lives
export const PLANT_CATEGORIES = {
  AIR_PURIFYING: "Air Purifying Plants",
  AROMATIC: "Aromatic Fragrant Plants", 
  INSECT_REPELLENT: "Insect Repellent Plants",
  MEDICINAL: "Medicinal Plants",
  LOW_MAINTENANCE: "Low Maintenance Plants"
};

export const PLANTS_DATA = [
  {
    category: PLANT_CATEGORIES.AIR_PURIFYING,
    description: "These plants help clean the air in your home by removing toxins and producing oxygen.",
    plants: [
      {
        name: "Snake Plant",
        image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
        description: "Produces oxygen at night, improving air quality. Perfect for bedrooms!",
        cost: "$15",
        benefits: ["Low maintenance", "Air purification", "Night oxygen production"]
      },
      {
        name: "Spider Plant",
        image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
        description: "Filters formaldehyde and xylene from the air. Great for beginners!",
        cost: "$12",
        benefits: ["Easy to grow", "Air purification", "Pet-friendly"]
      },
      {
        name: "Peace Lily",
        image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
        description: "Removes mold spores and purifies the air. Beautiful white flowers!",
        cost: "$18",
        benefits: ["Beautiful flowers", "Air purification", "Low light tolerant"]
      },
      {
        name: "Boston Fern",
        image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
        description: "Adds humidity to the air and removes toxins. Perfect for bathrooms!",
        cost: "$20",
        benefits: ["Increases humidity", "Air purification", "Decorative"]
      },
      {
        name: "Rubber Plant",
        image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
        description: "Easy to care for and effective at removing toxins. Great for offices!",
        cost: "$17",
        benefits: ["Easy care", "Air purification", "Attractive foliage"]
      },
      {
        name: "Aloe Vera",
        image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
        description: "Purifies the air and has healing properties for skin. Multi-purpose plant!",
        cost: "$14",
        benefits: ["Air purification", "Healing properties", "Low maintenance"]
      }
    ]
  },
  {
    category: PLANT_CATEGORIES.AROMATIC,
    description: "Fill your home with natural fragrances from these delightfully scented plants.",
    plants: [
      {
        name: "Lavender",
        image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Calming scent, used in aromatherapy. Perfect for relaxation!",
        cost: "$20",
        benefits: ["Calming fragrance", "Aromatherapy", "Beautiful purple flowers"]
      },
      {
        name: "Jasmine",
        image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Sweet fragrance, promotes relaxation. Evening bloomer!",
        cost: "$18",
        benefits: ["Sweet fragrance", "Promotes relaxation", "Beautiful white flowers"]
      },
      {
        name: "Rosemary",
        image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
        description: "Invigorating scent, often used in cooking. Fresh herbs at home!",
        cost: "$15",
        benefits: ["Culinary herb", "Invigorating scent", "Easy to grow"]
      },
      {
        name: "Mint",
        image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
        description: "Refreshing aroma, used in teas and cooking. Perfect for kitchen!",
        cost: "$12",
        benefits: ["Refreshing aroma", "Culinary use", "Tea ingredient"]
      },
      {
        name: "Lemon Balm",
        image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
        description: "Citrusy scent, relieves stress and promotes sleep. Natural mood booster!",
        cost: "$14",
        benefits: ["Citrusy scent", "Stress relief", "Sleep promotion"]
      },
      {
        name: "Hyacinth",
        image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
        description: "Beautiful flowering plant known for its fragrant blooms. Spring favorite!",
        cost: "$22",
        benefits: ["Fragrant blooms", "Beautiful colors", "Spring flowers"]
      }
    ]
  },
  {
    category: PLANT_CATEGORIES.INSECT_REPELLENT,
    description: "Natural pest control with these plants that keep unwanted insects away.",
    plants: [
      {
        name: "Oregano",
        image: "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg",
        description: "Contains compounds that can deter certain insects. Bonus: great for cooking!",
        cost: "$10",
        benefits: ["Insect deterrent", "Culinary herb", "Easy to grow"]
      },
      {
        name: "Marigold",
        image: "https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg",
        description: "Natural insect repellent that also adds beautiful color to your garden.",
        cost: "$8",
        benefits: ["Natural insect repellent", "Colorful flowers", "Garden companion"]
      },
      {
        name: "Geraniums",
        image: "https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg",
        description: "Known for their insect-repelling properties while adding pleasant scent.",
        cost: "$20",
        benefits: ["Insect repelling", "Pleasant scent", "Beautiful flowers"]
      },
      {
        name: "Basil",
        image: "https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg",
        description: "Repels flies and mosquitoes, also used in cooking. Double duty plant!",
        cost: "$9",
        benefits: ["Repels flies and mosquitoes", "Culinary use", "Fresh herb"]
      },
      {
        name: "Lavender",
        image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Calming scent for humans, but deters insects naturally.",
        cost: "$20",
        benefits: ["Calming scent", "Insect deterrent", "Aromatherapy"]
      },
      {
        name: "Catnip",
        image: "https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg",
        description: "Repels mosquitoes and attracts cats. Fun for pet owners!",
        cost: "$13",
        benefits: ["Repels mosquitoes", "Attracts cats", "Easy to grow"]
      }
    ]
  },
  {
    category: PLANT_CATEGORIES.MEDICINAL,
    description: "Natural healing with these plants that have been used for centuries in traditional medicine.",
    plants: [
      {
        name: "Aloe Vera",
        image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
        description: "Soothing gel used for skin ailments and minor burns. Natural first aid!",
        cost: "$14",
        benefits: ["Skin healing", "Burn treatment", "Natural first aid"]
      },
      {
        name: "Echinacea",
        image: "https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg",
        description: "Boosts immune system and helps fight colds. Natural immunity booster!",
        cost: "$16",
        benefits: ["Immune system boost", "Cold fighting", "Beautiful flowers"]
      },
      {
        name: "Peppermint",
        image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg",
        description: "Relieves digestive issues and headaches. Natural stomach soother!",
        cost: "$13",
        benefits: ["Digestive relief", "Headache relief", "Refreshing tea"]
      },
      {
        name: "Lemon Balm",
        image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
        description: "Calms nerves and promotes relaxation. Natural stress reliever!",
        cost: "$14",
        benefits: ["Nerve calming", "Stress relief", "Sleep promotion"]
      },
      {
        name: "Chamomile",
        image: "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg",
        description: "Soothes anxiety and promotes sleep. Perfect bedtime tea!",
        cost: "$15",
        benefits: ["Anxiety relief", "Sleep promotion", "Calming tea"]
      },
      {
        name: "Calendula",
        image: "https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg",
        description: "Heals wounds and soothes skin irritations. Natural skin care!",
        cost: "$12",
        benefits: ["Wound healing", "Skin soothing", "Natural skin care"]
      }
    ]
  },
  {
    category: PLANT_CATEGORIES.LOW_MAINTENANCE,
    description: "Perfect for busy lifestyles - these plants thrive with minimal care and attention.",
    plants: [
      {
        name: "ZZ Plant",
        image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Thrives in low light and requires minimal watering. Perfect for beginners!",
        cost: "$25",
        benefits: ["Low light tolerant", "Minimal watering", "Air purifying"]
      },
      {
        name: "Pothos",
        image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg",
        description: "Tolerates neglect and can grow in various conditions. Almost indestructible!",
        cost: "$10",
        benefits: ["Neglect tolerant", "Various conditions", "Fast growing"]
      },
      {
        name: "Snake Plant",
        image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
        description: "Needs infrequent watering and is resilient to most pests. Ultimate survivor!",
        cost: "$15",
        benefits: ["Infrequent watering", "Pest resistant", "Air purifying"]
      },
      {
        name: "Cast Iron Plant",
        image: "https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg",
        description: "Hardy plant that tolerates low light and neglect. Lives up to its name!",
        cost: "$20",
        benefits: ["Low light tolerant", "Neglect tolerant", "Very hardy"]
      },
      {
        name: "Succulents",
        image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg",
        description: "Drought-tolerant plants with unique shapes and colors. Water-wise choice!",
        cost: "$18",
        benefits: ["Drought tolerant", "Unique shapes", "Various colors"]
      },
      {
        name: "Aglaonema",
        image: "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg",
        description: "Requires minimal care and adds color to indoor spaces. Beautiful foliage!",
        cost: "$22",
        benefits: ["Minimal care", "Colorful foliage", "Indoor decoration"]
      }
    ]
  }
];

export default PLANTS_DATA;
