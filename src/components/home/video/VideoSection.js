import StorylaneEmbed from "./StorylaneEmbed";
import VideoPlayer from "./VideoPlayer ";

const VideoSection = ({title,desc,customClass}) => {
  return (
    <>
    
      <section className= {`px-6    overflow-x-hidden ${customClass || ""}`} >
        <div className="container">
          {title?<h2 className="text-primary mb-10">{title}
          </h2>:""}
          {desc?<p className="text-center mb-10 lg:mb-16">{desc}</p>:""}
          

          <div className="glass-bg p-2 lg:p-5   rounded-lg">
          <StorylaneEmbed/>

            {/* <VideoPlayer /> */}
          </div>
        </div>
        
      </section>
      
    </>
  );
};

export default VideoSection;
