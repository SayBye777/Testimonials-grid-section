import Image from "next/image"

export default function ContentBox ({name, status, headline, content, background, headline_color, text_color, quotation, image, border}){
    return (
        <div 
          className={`relative h-full flex flex-col justify-between p-6 gap-4 rounded-xl shadow-xl/60 ${background} 
          ${quotation ? "lg:after:content-[url('/bg-pattern-quotation.svg')] lg:after:absolute lg:after:top-0 lg:after:right-20 lg:after:w-20 lg:after:h-20 lg:after:opacity-20" : ""}`}
        >
            <div className="flex gap-4 items-center">
                <div className="w-10 h-10 relative">
                    <Image
                        src={image}
                        alt="avatar"
                        fill
                         className={`rounded-full object-cover ${border}`}
                    />
                    </div>
                <div className="flex flex-col">
                    <h2 className={`text-md ${headline_color}`}> {name}</h2>
                    <h2 className={`text-sm ${text_color}`}> {status} </h2>
                </div>
            </div>
            <h1 className={`text-xl font-bold ${headline_color}`}>
                {headline}
            </h1>
            <p className={`${text_color}`}>{content}</p>
        </div>
    )
}