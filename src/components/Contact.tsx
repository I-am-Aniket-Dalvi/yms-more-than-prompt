import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact-section" className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to assist you with any queries or concerns. Reach out to
            us anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Details */}
          <Card className="animate-on-scroll hover-lift">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Email:</p>
                  <a
                    href="mailto:ymsankhe@ymsce.com"
                    className="text-primary hover:text-primary-light transition-colors"
                  >
                    ymsankhe@ymsce.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Phone:</p>
                  <a
                    href="tel:+919082187165"
                    className="text-primary hover:text-primary-light transition-colors"
                  >
                    +91 90821 87165
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Address:</p>
                  <p className="text-muted-foreground">
                    502, Thawar Apartment Above Canara Bank Main Carter Road
                    Borivali (E) Mumbai 400 066
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map */}
          <div className="animate-on-scroll">
            <Card className="h-full overflow-hidden hover-lift">
              <CardContent className="p-0 h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.123!2d72.8619064!3d19.229956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0d1c3b480f9%3A0x1e4349db29e63d0!2s502%2C%20Thawar%20Apartment%2C%20Above%20Canara%20Bank%2C%20Main%20Carter%20Rd%2C%20Borivali%20(E)%2C%20Mumbai%20400066!5e0!3m2!1sen!2sin!4v1601309138881"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="YMS Consulting Engineers Location"
                  className="rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
