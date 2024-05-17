import { mockData } from "@/data/mock";
import ItemCard from "@/components/ItemCard";
import ClickableImage from "@/components/ClickableImage";

export default function Home() {
  const {
    heroImage,
    centerImages,
    section1Title,
    section1Content,
    section1SubTitle,
    section1SubContent,
    section2Title,
    cardItems,
  } = mockData;

  return (
    <main className="bg-black min-h-screen text-white p-4">
      <section className="flex flex-col flex-wrap gap-6 max-w-6xl my-24 m-auto items-center sm:flex-row sm:items-start">
        <div className="flex-grow basis-0 flex justify-end">
          <ClickableImage {...heroImage} />
        </div>
        <div className="flex flex-col gap-6 flex-grow basis-0">
          {centerImages.map((item) => (
            <div key={item.alt}>
              <ClickableImage {...item} />
            </div>
          ))}
        </div>
        <div className="basis-auto lg:flex-grow lg:basis-0">
          <h2 className="text-2xl pb-3 border-b-2 mb-8 border-slate-200 inline-block font-light text-slate-300">
            {section1Title}
          </h2>
          <p className="leading-7 mb-9 font-light text-slate-300">
            {section1Content}
          </p>
          <h4 className="text-red-600 uppercase mb-4">{section1SubTitle}</h4>
          <p>{section1SubContent}</p>
        </div>
      </section>
      <section className="max-w-6xl my-24 m-auto">
        <h2 className="text-center uppercase text-4xl mb-16 font-light">
          {section2Title}
        </h2>
        <div className="flex gap-12 flex-col items-center md:flex-row md:items-start md:gap-6">
          {cardItems.map((item) => (
            <ItemCard {...item} key={item.title} />
          ))}
        </div>
      </section>
    </main>
  );
}
