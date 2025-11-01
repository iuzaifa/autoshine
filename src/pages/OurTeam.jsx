import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Linkedin,
  Twitter,
  Github,
  Mail,
  Instagram,
  Globe,
  Award,
  Users,
  Heart,
} from "lucide-react";
import ShopLocations from "../components/ShopLocations";

function OurTeam() {
  const teamSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Visionary leader with 15+ years in tech industry",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Tech innovator and software architecture expert",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Lead Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Creative director with passion for user experience",
      social: {
        linkedin: "#",
        instagram: "#",
        globe: "#",
      },
    },
    {
      id: 4,
      name: "David Kim",
      position: "Senior Developer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Full-stack developer and problem solver",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      id: 5,
      name: "Jessica Williams",
      position: "Marketing Director",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Digital marketing strategist and brand builder",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      id: 6,
      name: "Alex Thompson",
      position: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Product strategy and customer experience expert",
      social: {
        linkedin: "#",
        twitter: "#",
        mail: "#",
      },
    },
    {
      id: 7,
      name: "Maria Garcia",
      position: "UX Researcher",
      image:
        "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "User behavior analyst and research specialist",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      id: 8,
      name: "James Wilson",
      position: "DevOps Engineer",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Cloud infrastructure and deployment automation",
      social: {
        linkedin: "#",
        github: "#",
        globe: "#",
      },
    },
  ];

  const SocialIcon = ({ platform, url }) => {
    const icons = {
      linkedin: <Linkedin className="w-4 h-4" />,
      twitter: <Twitter className="w-4 h-4" />,
      github: <Github className="w-4 h-4" />,
      email: <Mail className="w-4 h-4" />,
      mail: <Mail className="w-4 h-4" />,
      instagram: <Instagram className="w-4 h-4" />,
      globe: <Globe className="w-4 h-4" />,
    };

    return (
      <a
        href={url}
        className="p-2 bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 group"
      >
        {icons[platform]}
      </a>
    );
  };

  return (
    <>
      <ShopLocations />
      <div className="min-h-screen bg-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:text-3xl text-2xl lg:py-10 py-6">
            <h2 className="text-black/80 font-bold">MEET OUR TEAM</h2>
            <p className="lg:text-sm text-xs text-black/75 mt-4 max-w-2xl mx-auto">
              Our dedicated team of automotive experts is here to provide you
              with the best auto parts and service.
            </p>
          </div>

          <div className="mb-16">
            <div className="slider-container">
              <Slider {...teamSettings}>
                {teamMembers.map((member) => (
                  <div key={member.id} className="px-3 pb-6">
                    <div className="bg-white rounded-xs overflow-hidden hover:shadow-sm transition-all duration-300 group">
                      {/* Image Container */}
                      <div className="relative overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Social Icons Overlay */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                          {Object.entries(member.social).map(
                            ([platform, url]) => (
                              <SocialIcon
                                key={platform}
                                platform={platform}
                                url={url}
                              />
                            )
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 text-center">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className="text-blue-600 font-semibold mb-3">
                          {member.position}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurTeam;
