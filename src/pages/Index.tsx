import Hero from "@/components/Hero";
import IngredientInput from "@/components/IngredientInput";
import RecipeCards from "@/components/RecipeCards";
import Features from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <IngredientInput />
      <RecipeCards />
      <Features />
    </div>
  );
};

export default Index;
