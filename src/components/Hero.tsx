import { Heart } from 'lucide-react';
import dakshVideo from "../Assets/dakshVideo.mp4";
import BadukinaBannave  from "../../audio/BadukinaBannave.mp3";

export default function Hero() {
  return (
    <div
  className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
  style={{
    height: '100%',
    width: '100%',
  }}
>
  {/* Video background */}
  <video
    autoPlay
    loop
    playsInline
    className="absolute inset-0 object-cover w-full h-full"
  >
    <source src={dakshVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  {/* <audio  autoplay>
  <source src={BadukinaBannave}  type="audio/mp3"/>
  Your browser does not support the audio tag.
</audio> */}

  {/* Overlay for darkening the background */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Content on top of the background */}
  <div className="relative text-center text-white z-10 p-8">
    <Heart className="mx-auto mb-6 w-16 h-16 text-pink-400" />
    <h1 className="text-6xl font-serif mb-2">Dakshath & Varshitha</h1>
    <p className="text-4xl font-serif mb-2">We Are Getting Married</p>
    <div className="text-2xl font-light">
      <p className="text-2xl font-serif mb-2">February 23, 2025</p>
      <p className="text-2xl font-serif mb-2">Nikitha Bojegowda Marriage Hall</p>
      <p className="text-2xl font-serif mb-2">3/4, KC Layout, Mysuru, Karnataka-570011</p>
    </div>
  </div>
</div>

  );
}
