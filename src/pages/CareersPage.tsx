import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CareersPage = () => {
  useScrollAnimation();
  const [selectedJob, setSelectedJob] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    school: "",
    education: "",
    position: "",
  });

  const jobOpenings = [
    {
      id: "hvac",
      title: "HVAC Design Engineer",
      summary: "We are seeking an HVAC Design Engineer to join our consultancy team.",
      responsibilities: [
        "Design HVAC systems, including load calculations, equipment selection, and ductwork layouts.",
        "Prepare technical drawings, specifications, and system documentation.",
        "Conduct energy modeling and performance analysis for efficient system design.",
        "Ensure designs meet industry standards and sustainability goals.",
      ],
      qualifications: [
        "Bachelor's degree in Mechanical Engineering.",
        "Proficiency in AutoCAD, Revit, or similar software.",
        "Knowledge of energy-efficient solutions and local building codes.",
      ],
    },
    {
      id: "fire",
      title: "Fire Design Engineer",
      summary: "We are looking for a Fire Design Engineer to join our consultancy team.",
      responsibilities: [
        "Design fire protection systems, including sprinklers, alarms, and smoke control systems.",
        "Conduct fire safety assessments, risk analysis, and compliance checks.",
        "Prepare detailed drawings, specifications, and documentation.",
        "Provide technical support during installation, testing, and commissioning.",
      ],
      qualifications: [
        "Bachelor's degree in Fire Engineering, Mechanical Engineering, or related field.",
        "Proficiency in design software (AutoCAD, Revit).",
        "Knowledge of fire safety regulations and codes (e.g., NFPA, BS).",
      ],
    },
    {
      id: "draughtsman",
      title: "Mechanical Draughtsman",
      summary: "We are seeking a skilled Mechanical Draughtsman to join our consultancy team.",
      responsibilities: [
        "Create detailed mechanical drawings and plans using CAD software (AutoCAD, Revit).",
        "Work with engineers to interpret design concepts and translate them into technical drawings.",
        "Ensure drawings meet industry standards, local codes, and project requirements.",
        "Revise and update drawings based on project feedback and changes.",
      ],
      qualifications: [
        "Diploma in Mechanical Engineering or related field.",
        "Minimum 1 year of experience in drafting for mechanical systems.",
        "Proficiency in AutoCAD, Revit, or similar CAD software.",
      ],
    },
    {
      id: "architect",
      title: "Architect Draughtsman",
      summary: "We at YMS Consulting Engineers are looking for an Architect Draughtsman.",
      responsibilities: [
        "Be proficient in AutoCAD drafting and have a strong understanding of AutoCAD software and its commands.",
        "Draft Industrial and Commercial details based on design requirements.",
        "Work closely with architects and engineers to interpret and translate designs into detailed drawings.",
      ],
      qualifications: [
        "Diploma in Architecture or related field.",
        "2 to 5 years of work experience in drafting for Architecture planning.",
        "Proficiency in AutoCAD and a strong understanding of Industrial/Commercial project details.",
      ],
    },
    {
      id: "architect-exp",
      title: "Architect",
      summary: "Vacancy and openings for both Fresher Architects and Experienced Architects.",
      responsibilities: [
        "Create plans and drawings which clearly outline the architectural design of the project.",
        "Utilize knowledge of engineering, math, science, and materials to create the ideal finished product.",
        "Oversee and make recommendations throughout the entire construction process.",
        "Collaborate with various teams to establish goals, schedules, and budgets.",
      ],
      qualifications: [
        "Degree in Architecture.",
        "3+ years of experience in construction and architecture.",
        "Strong organizational, creative, and presentation skills.",
        "Proficiency in AutoCAD.",
      ],
    },
    {
      id: "trainee",
      title: "Architectural Draughtsman Trainee",
      summary: "We at YMS Consulting Engineers are looking for an Architectural Draughtsman Trainee Fresher.",
      responsibilities: [
        "Be proficient in AutoCAD drafting and have a strong understanding of AutoCAD software and its commands.",
        "Work closely with seniour Draughtmen and engineers to work on autocad drawings",
      ],
      qualifications: [
        "ITI or Civil and Architectural Draughtsman certificate course.",
      ],
    },
  ];

  const departments = [
    {
      title: "Architecture",
      jobs: [
        { title: "Architect", id: "architect-exp" },
        { title: "Architect Draughtsmen", id: "architect" },
      ],
    },
    {
      title: "Mechanical",
      jobs: [
        { title: "HVAC Design Engineer", id: "hvac" },
        { title: "Piping Design Engineer", id: "piping" },
        { title: "Fire Design Engineer", id: "fire" },
        { title: "Site Project Management", id: "site-pm" },
        { title: "Mechanical Draughtsmen", id: "draughtsman" },
      ],
    },
    {
      title: "Civil",
      jobs: [
        { title: "Structural Design Engineer", id: "structural" },
        { title: "Site Project Management", id: "site-pm-civil" },
        { title: "Civil Draughtsmen", id: "civil-draughtsman" },
      ],
    },
    {
      title: "Electrical",
      jobs: [
        { title: "Electrical Design Engineer", id: "electrical" },
        { title: "Site Project Management", id: "site-pm-electrical" },
        { title: "Electrical Draughtsmen", id: "electrical-draughtsman" },
      ],
    },
  ];

  const handleApply = (position: string) => {
    setSelectedJob(position);
    setFormData({ ...formData, position });
    setIsModalOpen(true);
  };

  const handleSubmit = () => {
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=ymsankhe@ymsce.com&su=Job Application for ${formData.position}&body=Dear Hiring Team,%0D%0A%0D%0APlease find my job application for the ${formData.position} position.%0D%0A%0D%0AName: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AAddress: ${formData.address}%0D%0ASchool/College: ${formData.school}%0D%0AEducation: ${formData.education}%0D%0A%0D%0APlease attach resume to this email.%0D%0A%0D%0AThank you,%0D%0A${formData.name}`;
    window.open(gmailLink, "_blank");
    setIsModalOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      school: "",
      education: "",
      position: "",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Job Descriptions Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 animate-on-scroll">
              CURRENT OPENINGS
            </h2>

            <div className="space-y-4">
              {jobOpenings.map((job) => (
                <Card key={job.id} className="animate-on-scroll hover-lift">
                  <CardHeader>
                    <CardTitle
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                    >
                      <span>{job.title}</span>
                      <ChevronDown
                        className={`transition-transform ${
                          expandedJob === job.id ? "rotate-180" : ""
                        }`}
                      />
                    </CardTitle>
                    <p className="text-sm text-destructive font-medium animate-pulse">
                      Click here for Job description ↓
                    </p>
                  </CardHeader>
                  {expandedJob === job.id && (
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-bold mb-2">Job Summary:</h4>
                        <p>{job.summary}</p>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Key Responsibilities:</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Qualifications:</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          {job.qualifications.map((qual, idx) => (
                            <li key={idx}>{qual}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Departments Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-6 animate-on-scroll">
              Join Our Team
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-12 animate-on-scroll">
              Explore career opportunities across multiple departments and apply to become part of our team.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {departments.map((dept, idx) => (
                <Card key={idx} className="animate-on-scroll hover-lift">
                  <CardHeader>
                    <CardTitle className="text-primary text-center">{dept.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {dept.jobs.map((job, jdx) => (
                        <li key={jdx} className="flex justify-between items-center">
                          <span className="text-sm font-medium">{job.title}</span>
                          <Button
                            size="sm"
                            onClick={() => handleApply(job.title)}
                            className="bg-secondary hover:bg-primary text-secondary-foreground"
                          >
                            Apply
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />

      {/* Application Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl text-primary">Job Application</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name:</label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email:</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone:</label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Address:</label>
              <Textarea
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">School/College Name:</label>
              <Input
                value={formData.school}
                onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Education Details:</label>
              <Input
                value={formData.education}
                onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Position:</label>
              <Input value={formData.position} readOnly />
            </div>
            <Button onClick={handleSubmit} className="w-full bg-primary hover:bg-primary-light">
              Submit
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CareersPage;
