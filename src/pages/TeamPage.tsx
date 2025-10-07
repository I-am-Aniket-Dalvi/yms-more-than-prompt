import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface TeamMember {
  name: string;
  title: string;
  image: string;
  description: string;
}

const TeamPage = () => {
  useScrollAnimation();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const topLeaders = [
    {
      name: "YOGESH SANKHE",
      title: "Founder and Managing Director",
      image: "prj/Team/c1.jpg",
      description:
        "Mr. Sankhe is a highly accomplished professional with over 35 years of experience in Project Design, Management, and Execution. He holds esteemed academic honors including an M.S. in Structural Engineering from the University of Wisconsin-Madison (GPA 4.0/4.0) and a Gold Medallist in Bachelors in Civil Engineering from VJTI, University of Mumbai. Additionally, he is a certified Professional Engineer (PE) in the State of Minnesota, USA. Mr. Sankhe's career has seen him progress from a Design Structural Engineer to a Project Manager, eventually attaining the position of CEO in a reputable company. His expertise spans the entire project lifecycle, and he has demonstrated leadership in driving strategic initiatives and fostering excellence within organizations. With extensive experience in the United States, India, the United Kingdom, Jamaica, and other countries, Mr. Sankhe brings a wealth of international perspective to his work.",
    },
    {
      name: "SALLEM BOOTWALA",
      title: "Partner and CEO",
      image: "prj/Team/c2.jpg",
      description:
        "Mr. Sallem is a highly experienced professional with over 30 years of expertise in Civil Structural Design, Project Management, and Execution. Holding a Bachelor's degree in Civil Engineering from Sardar Vallabhbhai Patel University, Gujarat, he has augmented his qualifications with various certifications and training programs. He is a member of the Society of Engineers in the UAE and holds a Structural License. Additionally, he has received specialized training including ETABS Training from the Institute of Engineers-UAE, a course on Quality Awareness in Sharjah, and PSMJ Project Management seminar from Dubai. Mr. Sallem's diverse career has seen him execute projects in the UK, UAE, Qatar, Nepal, Kenya, Sri Lanka, Jamaica, and India, covering both Civil Structural design and construction. His expertise and leadership skills have been honed through hands-on experience and specialized training, making him a valuable asset in the field of Structural and Civil Engineering.",
    },
  ];

  const keyMembers = [
    {
      name: "MRIDULA KAKADE",
      title: "Chief Architect",
      image: "prj/Team/c3.jpg",
      description:
        "With over 30 years of experience, Mridula is a seasoned professional in the field of Master Planning, Infrastructure planning, and Architecture design. Additionally, she has undergone specialized training in Architectural Revit, staying updated with modern industry tools and practices. Throughout her extensive career, Mridula has demonstrated expertise in various aspects of architecture, contributing to numerous successful projects across various sectors including engineering manufacturing, pharma, hospital and healthcare, R&D, F&B, chemical industry, etc.She also manages the various Interior design projects carried out by YMSCE. She integrates principles of sustainability, efficiency, and resilience into her planning processes, aiming to create infrastructure that meets both present and future needs.",
    },
    {
      name: "VISHWANATH JOSHI",
      title: "Head – Structural Design",
      image: "prj/Team/Vishwanath.png",
      description:
        "Vishwanath Joshi holds a Bachelor's degree in Civil Engineering from Mumbai University and boasts over 26 years of experience in the field of structural engineering and design. As a Lead Structural Engineer, he has demonstrated expertise across various sectors, including industrial sectors, educational campuses, hospitality, corporate offices, and high-end residential complexes. His expertise extends to evaluating structural integrity for renovation, refurbishments, and implementing solutions for safety and longevity.",
    },
    {
      name: "JAYESH LAD",
      title: "Chief Mechanical Engineer",
      image: "prj/Team/c5.jpg",
      description:
        "Jayesh Lad is a Mechanical Engineer from Mumbai University with over 30 years of professional experience. His expertise lies in Mechanical & Utilities design across various sectors including pharmaceuticals, API plants, chemicals, breweries, food & beverage, and engineering manufacturing. He leads the Mechanical design team at YMSCE, emphasizing energy-efficient systems in fire-fighting, HVAC, and plumbing.",
    },
    {
      name: "NAMITA PHADKE",
      title: "Chief Electrical Engineer",
      image: "prj/Team/c4.jpg",
      description:
        "Namita Phadke is an Electrical Engineer from Mumbai University with over 20 years of experience specializing in electrical designs for diverse industrial and non-industrial projects. She is knowledgeable about sustainable building practices and green certifications like LEED and GRIHA, incorporating these into electrical design for compliance with industry standards.",
    },
    {
      name: "AMOL CHOUDHARI",
      title: "Sr. Quantity Surveyor",
      image: "prj/Team/Amol.png",
      description:
        "Amol Choudhari is a Civil Engineer with over 20 years of expertise in quantity surveying and cost estimation. As a quantity surveyor, he is skilled in detailed measurements, preparing bills of quantities, and estimating costs for construction projects. Amol also assists clients in Techno-Commercial evaluations and value engineering to align costs with project budgets.",
    },
    {
      name: "KEDAR PEWEKAR",
      title: "Project Management & Business Development",
      image: "prj/Team/Kedar.jpg",
      description:
        "Mr. Kedar Pewekar holds a Bachelor's degree in Engineering (Construction) and a Master's in Management Studies (Operations), both from the University of Mumbai. With over 25 years of experience, he is skilled in business development, project coordination, and contract management, specializing in proposal development, contract negotiation, and implementing effective project systems.",
    },
    {
      name: "MANGESH BALGUDE",
      title: "Accounts & Administration Manager",
      image: "prj/Team/Mangesh.png",
      description:
        "Mangesh Balgude is a dedicated Accounts & Administration Manager with over 20 years of experience in overseeing billing and office management. With a Bachelor's degree in Commerce and a Diploma in Computers, he is proficient in maintaining accurate documentation, managing billing procedures, and ensuring smooth administrative processes.",
    },
    {
      name: "ANIKET DALVI",
      title: "IT Manager",
      image: "prj/Team/c7.jpg",
      description:
        "Aniket, with his B.Sc in Information Technology from Mumbai University, plays the role of IT Manager with responsibilities spanning IT troubleshooting, security, and IT asset management, including both hardware and software. He oversees the acquisition, deployment, and maintenance of IT resources, implementing robust security measures to protect digital assets.",
    },
  ];

  const TeamCard = ({ member }: { member: TeamMember }) => (
    <Card className="group hover-lift cursor-pointer" onClick={() => setSelectedMember(member)}>
      <CardContent className="p-6">
        <div className="mb-4">
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h4 className="text-xl font-bold text-primary text-center mb-2">
          {member.name}
        </h4>
        <p className="text-muted-foreground text-center font-medium mb-4">
          {member.title}
        </p>
        <Button
          variant="outline"
          className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="pt-20 min-h-screen bg-muted">
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Team
            </h1>
          </div>

          {/* Top Leaders */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
            {topLeaders.map((member, index) => (
              <div
                key={index}
                className="animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <TeamCard member={member} />
              </div>
            ))}
          </div>

          {/* Key Team Members */}
          <div className="text-center mb-12 animate-on-scroll">
            <h3 className="text-3xl font-bold text-foreground">
              Key Team Members
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {keyMembers.map((member, index) => (
              <div
                key={index}
                className="animate-on-scroll"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <TeamCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex flex-col items-center mb-4">
              {selectedMember && (
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-32 h-32 rounded-full object-cover shadow-lg mb-4"
                />
              )}
              <DialogTitle className="text-2xl text-primary">
                {selectedMember?.name}
              </DialogTitle>
              <p className="text-muted-foreground font-medium">
                {selectedMember?.title}
              </p>
            </div>
          </DialogHeader>
          <p className="text-foreground leading-relaxed">
            {selectedMember?.description}
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TeamPage;
