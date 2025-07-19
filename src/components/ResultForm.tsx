import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const ResultForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    rollNumber: '',
    registrationNumber: '',
    session: '',
    department: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.rollNumber || !formData.registrationNumber || !formData.session || !formData.department) {
      toast({
        title: "ত্রুটি",
        description: "দয়া করে সকল তথ্য পূরণ করুন",
        variant: "destructive"
      });
      return;
    }

    // Check if it matches our sample data
    if (
      formData.rollNumber === '542107' &&
      formData.registrationNumber === '150302005' &&
      formData.session === '21-22' &&
      formData.department === 'Marketing'
    ) {
      // Store form data in localStorage for result page
      localStorage.setItem('studentData', JSON.stringify(formData));
      navigate('/result');
    } else {
      toast({
        title: "কোনো ফলাফল পাওয়া যায়নি",
        description: "দয়া করে সঠিক তথ্য দিয়ে আবার চেষ্টা করুন",
        variant: "destructive"
      });
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-background">
      <div className="max-w-2xl mx-auto">
        <Card className="p-8 shadow-large bg-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">
              ফলাফল দেখুন
            </h2>
            <p className="text-muted-foreground">
              আপনার পরীক্ষার ফলাফল দেখতে নিচের তথ্যগুলো পূরণ করুন
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Roll Number */}
            <div className="space-y-2">
              <Label htmlFor="rollNumber" className="text-base font-semibold text-foreground">
                রোল নম্বর *
              </Label>
              <Input
                id="rollNumber"
                type="text"
                placeholder="আপনার রোল নম্বর লিখুন"
                value={formData.rollNumber}
                onChange={(e) => handleInputChange('rollNumber', e.target.value)}
                className="h-12 text-base"
                required
              />
            </div>

            {/* Registration Number */}
            <div className="space-y-2">
              <Label htmlFor="registrationNumber" className="text-base font-semibold text-foreground">
                রেজিস্ট্রেশন নম্বর *
              </Label>
              <Input
                id="registrationNumber"
                type="text"
                placeholder="আপনার রেজিস্ট্রেশন নম্বর লিখুন"
                value={formData.registrationNumber}
                onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
                className="h-12 text-base"
                required
              />
            </div>

            {/* Session */}
            <div className="space-y-2">
              <Label htmlFor="session" className="text-base font-semibold text-foreground">
                সেশন *
              </Label>
              <Select 
                value={formData.session} 
                onValueChange={(value) => handleInputChange('session', value)}
                required
              >
                <SelectTrigger className="h-12 text-base">
                  <SelectValue placeholder="সেশন নির্বাচন করুন" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="21-22">২০২১-২২</SelectItem>
                  <SelectItem value="20-21">২০২০-২১</SelectItem>
                  <SelectItem value="19-20">২০১৯-২০</SelectItem>
                  <SelectItem value="18-19">২০১৮-১৯</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Department */}
            <div className="space-y-2">
              <Label htmlFor="department" className="text-base font-semibold text-foreground">
                বিভাগ *
              </Label>
              <Select 
                value={formData.department} 
                onValueChange={(value) => handleInputChange('department', value)}
                required
              >
                <SelectTrigger className="h-12 text-base">
                  <SelectValue placeholder="বিভাগ নির্বাচন করুন" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="Marketing">Marketing</SelectItem>
                  <SelectItem value="Finance">Finance</SelectItem>
                  <SelectItem value="Management">Management</SelectItem>
                  <SelectItem value="Accounting">Accounting</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full h-14 text-lg font-semibold bg-gradient-primary hover:bg-primary-hover shadow-medium"
            >
              ফলাফল দেখুন
            </Button>
          </form>

          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground text-center">
              <strong>নমুনা তথ্য:</strong> রোল: 542107, রেজিস্ট্রেশন: 150302005, সেশন: 21-22, বিভাগ: Marketing
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ResultForm;