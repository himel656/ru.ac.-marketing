import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const ChairmanSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-accent/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Welcome to the Department of Marketing
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Chairman Photo and Info */}
          <div className="text-center lg:text-left">
            <Card className="inline-block p-6 shadow-medium bg-white">
              <img
                src="/lovable-uploads/73d67a85-1452-4013-9b31-02e418ec50d8.png"
                alt="Dr. Md. Nuruzzaman"
                className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 rounded-lg object-cover shadow-soft"
              />
              <h3 className="text-2xl font-bold text-primary mb-2">
                Dr. Md. Nuruzzaman
              </h3>
              <p className="text-lg text-muted-foreground mb-1">Chairman</p>
              <p className="text-base text-muted-foreground mb-4">
                University of Rajshahi
              </p>
              <Button 
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                📚 VIEW PROFILE
              </Button>
            </Card>
          </div>

          {/* Department Information */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed text-justify">
                The vision of the Department of Marketing is to develop efficient graduates with positive mind-set, proactive thinking, adaptive with different culture and environment, to maximize their opportunities in favor of company and society. The department has been committed to cater the needs of modern business world and has been producing executive and trained manpower with strong skill in business, strong analytical and decision-making abilities in Marketing.
              </p>
              
              <p className="text-foreground leading-relaxed text-justify">
                The department offers four-year BBA, one-year MBA, two-year EMBA programs for the students. The department also offers research programs such as M. Phil and Ph. D. Medium of instruction for all academic programs is only English. The department has been devoted to academic excellence and uncompromising standard of quality since its beginning.
              </p>
              
              <p className="text-foreground leading-relaxed text-justify">
                Faculty members are actively engaged in research and have many research publications to their credit. The expertise faculties, research activities and dynamic curriculum have made the department a unique institution in and outside the university.
              </p>
              
              <p className="text-foreground leading-relaxed text-justify">
                The department is well equipped with modern computer lab, AC class rooms, multimedia, and internet facilities etc. for their daily works. In addition, the department organizes research works, seminars, workshops, training and consultancy etc on a regular basis. The department has web linked with University central database where research activities of teachers, results of students, sports news and cultural programs of the department are presented.
              </p>
              
              <p className="text-foreground leading-relaxed text-justify font-medium">
                I wish continuous success of the department.
              </p>
              
              <div className="mt-8 p-6 bg-primary/5 rounded-lg border-l-4 border-primary">
                <p className="text-foreground font-semibold">Dr. Md. Nuruzzaman</p>
                <p className="text-muted-foreground">Chairman</p>
                <p className="text-muted-foreground">Department of Marketing</p>
                <p className="text-muted-foreground">Faculty of Business Studies</p>
                <p className="text-muted-foreground">University of Rajshahi</p>
                <p className="text-muted-foreground">Rajshahi-6205</p>
                <p className="text-muted-foreground">Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanSection;