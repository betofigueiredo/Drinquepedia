const getCategoryName = (category?: string): string => {
  const categories: { [key: string]: string } = {
    martinis: "Martinis",
    tropicais: "Tropicais",
    frozen: "Frozen",
    quentes: "Quentes",
    shot: "Shots",
    classicos: "Clássicos",
    semalcool: "Sem Álcool",
    caipirinhas: "Caipirinhas clássicas",
    smoothies: "Smoothies",
  };
  return categories[category as keyof typeof categories] || "Drinques de A a Z";
};

export default getCategoryName;
