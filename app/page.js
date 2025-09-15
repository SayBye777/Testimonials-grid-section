import ContentBox from "./components/ContentBox";
import data from "./data.json";


export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center font-[13px] font-barlow">
      <section className="grid m-8 lg:grid-cols-4 gap-10 lg:mx-auto grid-rows-[auto] lg:auto-rows-fr max-w-[1300px]">

        {data.map((item, key) =>
          <article 
            className={item.grid}
            key={key}>
            <ContentBox
              name={item.name}
              status={item.status}
              headline={item.headline}
              content={item.content}
              background={item.background}
              headline_color={item.headline_color} 
              text_color={item.text_color} 
              quotation={item.quotation}
              image={item.avatar}
              border={item.border}
              />
          </article>
        )}

      </section>      
    </main>
  );
}
