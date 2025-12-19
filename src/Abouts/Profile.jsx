import { useOutletContext } from "react-router-dom";
import gallery from "../data/gallery";
import { MapPin, Calendar, Users, GraduationCap, Award, BookOpen } from "lucide-react";

const Profile = () => {
  const {state} = useOutletContext();
  const school = gallery.find(item => item.file?.toLowerCase().includes("school"));
  const schoolPictures = gallery.filter(item => item.file?.toLowerCase().includes("school"));

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "1000+", label: "Students" },
    { icon: <GraduationCap className="w-8 h-8" />, value: "50+", label: "Qualified Teachers" },
    { icon: <Award className="w-8 h-8" />, value: "25+", label: "Years of Excellence" },
    { icon: <BookOpen className="w-8 h-8" />, value: "12", label: "Grade Levels" },
  ];



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        {school?.src ? (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${school.src})` }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/35 to-black/20"></div>
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900"></div>
        )}
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              School <span className="text-blue-200">Profile</span>
            </h1>
            <div className="w-24 h-1 bg-blue-200 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Don Bosco Higher Secondary School, Salem Veng, Churachandpur
            </p>
          </div>
        </div>
      </section>

      {/* School Image & Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {school?.src ? (
                  <img 
                    src={school.src} 
                    alt="Don Bosco Higher Secondary School" 
                    className="w-full aspect-video object-cover"
                  />
                ) : (
                  <div className="w-full h-[300px] md:h-[400px] bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500 text-lg">School Image</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="space-y-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Welcome to Don Bosco School
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Don Bosco School stands as a beacon of educational excellence, 
                committed.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Located in Salem Veng, Churachandpur, Manipur, we have been dedicated to providing 
                quality education that empowers students to achieve their .
              </p>
              
              {/* Key Information */}
              <div className="pt-6 space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-blue-800 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">Salem Veng, D.Phailien, Churachandpur, Manipur 795128</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-blue-800 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Established</p>
                    <p className="text-gray-600">Over 25 years of educational excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-20 bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
              >
                <div className="flex justify-center text-white mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-blue-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            School Pictures
          </h2>
          <div className="grid grid-cols-2 gap-6 ">
                    {schoolPictures.map((picture, index) => (
                      <img src={picture.src} alt={picture.file} key={index} className="w-full aspect-video rounded-sm object-cover" />
                    ))}
                  </div>
                </div>
              </section>
    </div>
  );
};

export default Profile;
