import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-[900px] mx-auto px-8">
        <h1 className="text-4xl my-4">EmoJournal - Emotional eating journal</h1>
        <p className="text-xl text-white/70 my-4">EmoJournal is an innovative Emotional Eating Journal app that incorporates cutting-edge AI integration to help users gain better insight into their emotional eating habits and build healthier relationships with food. This app is designed to support users in understanding their emotions, recognizing triggers, and providing personalized strategies to overcome emotional eating.</p>
        <div>
          <Link href="/eating-journal">
            <button className="bg-green-600 py-2 px-6 rounded-lg font-l font-bold">Get started</button>
            </Link>
        </div>
      </div> 
    </div>  )
}
