import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, Leaf, Star } from "lucide-react";

const sampleRecipes = [
  {
    id: 1,
    title: "Leftover Rice Fried Rice",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop",
    prepTime: "15 min",
    servings: 4,
    difficulty: "Easy",
    rating: 4.8,
    tags: ["Quick", "Asian", "Vegetarian"],
    ingredients: ["Rice", "Eggs", "Vegetables", "Soy Sauce"],
    description: "Transform your leftover rice into a delicious, restaurant-quality fried rice."
  },
  {
    id: 2,
    title: "Chicken & Vegetable Stir Fry",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop",
    prepTime: "20 min",
    servings: 3,
    difficulty: "Easy",
    rating: 4.6,
    tags: ["Healthy", "Protein", "Quick"],
    ingredients: ["Chicken", "Bell Peppers", "Onions", "Garlic"],
    description: "A colorful and nutritious way to use up your leftover vegetables and protein."
  },
  {
    id: 3,
    title: "Cheesy Pasta Bake",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc350d617?w=400&h=300&fit=crop",
    prepTime: "35 min",
    servings: 6,
    difficulty: "Medium",
    rating: 4.9,
    tags: ["Comfort", "Family", "Cheesy"],
    ingredients: ["Pasta", "Cheese", "Tomatoes", "Herbs"],
    description: "A comforting pasta bake that's perfect for using up leftover cheese and vegetables."
  }
];

const RecipeCards = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Suggested Recipes</h2>
          <p className="text-xl text-muted-foreground">
            Based on your available ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {sampleRecipes.map((recipe) => (
            <Card key={recipe.id} className="overflow-hidden shadow-soft hover:shadow-glow transition-smooth hover:-translate-y-1">
              {/* Recipe Image */}
              <div className="relative h-48 bg-muted">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-background/90 text-foreground">
                    <Star className="w-3 h-3 mr-1 fill-current text-secondary-warm" />
                    {recipe.rating}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl mb-2">{recipe.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{recipe.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Recipe Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {recipe.prepTime}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {recipe.servings} servings
                  </div>
                  <div className="flex items-center">
                    <Leaf className="w-4 h-4 mr-1" />
                    {recipe.difficulty}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {recipe.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Ingredients */}
                <div className="mb-4">
                  <p className="text-sm font-medium mb-2">Key Ingredients:</p>
                  <div className="flex flex-wrap gap-1">
                    {recipe.ingredients.map((ingredient) => (
                      <Badge key={ingredient} className="text-xs bg-accent/20 text-accent-foreground">
                        {ingredient}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Button variant="warm" className="w-full">
                  View Recipe
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Recipes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecipeCards;