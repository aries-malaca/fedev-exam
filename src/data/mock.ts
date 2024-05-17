import image1 from "@/assets/images/Image-01.jpg";
import image2 from "@/assets/images/Image-02.jpg";
import image3 from "@/assets/images/Image-03.jpg";
import meal1 from "@/assets/images/Image_01.jpg";
import meal2 from "@/assets/images/Image_02.jpg";
import meal3 from "@/assets/images/Image_03.jpg";

export const mockData = {
  heroImage: { src: image1, alt: "Father and son walking" },
  centerImages: [
    { src: image2, alt: "Round veggies" },
    { src: image3, alt: "Asparagus" },
  ],
  section1Title: "ANSWER YOUR BODY'S NEEDS",
  section1Content:
    "The way ingredients are sourced affects the way we nourish our bodies. Author Mark Scharzer believes our body naturally develops an appetite for the foods and nutrients it needs to be healthy, but that artificial flavorings are getting in the way. This can be reversed by focusing on high-quality ingredients and being mindful as your appetite guides you to consume according to your body' needs.",
  section1SubTitle: "Be Mindful",
  section1SubContent:
    "Sourcing local or organic food is a good way to start being mindful about what you're cooking and eating.",
  section2Title: " All The Latest From AEG",
  cardItems: [
    {
      title: "Summer Lunch Menu By Mark Best",
      description:
        "AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.",
      image: meal1,
    },
    {
      title: "A Traditional Christmas Eve, Mark Best Style",
      description:
        "One of Australia's best chefs and AEG ambassador, Mark Best, shares his favorite Christmas Eve menu which is sure to impress your guests.",
      image: meal2,
    },
    {
      title: "Taking Taste Further",
      description:
        "This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most of out of our products - and the best out of your food.",
      image: meal3,
    },
  ],
};
