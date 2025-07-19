import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import studentPhoto from '@/assets/student-photo.jpg';

interface StudentData {
  rollNumber: string;
  registrationNumber: string;
  session: string;
  department: string;
}

interface ResultData {
  courseCode: string;
  grade: string;
}

const Result = () => {
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState<StudentData | null>(null);

  // Sample result data
  const results: ResultData[] = [
    { courseCode: '212303', grade: 'A' },
    { courseCode: '212305', grade: 'A' },
    { courseCode: '212307', grade: 'A+' },
    { courseCode: '212309', grade: 'A+' },
    { courseCode: '2115001', grade: 'A+' }
  ];

  // Sample student details
  const studentDetails = {
    name: 'মোহাম্মদ রাহুল আহমেদ',
    studentId: 'MKT-150302005'
  };

  useEffect(() => {
    const storedData = localStorage.getItem('studentData');
    if (storedData) {
      setStudentData(JSON.parse(storedData));
    } else {
      // Redirect to home if no data found
      navigate('/');
    }
  }, [navigate]);

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A+':
        return 'text-green-600 font-bold';
      case 'A':
        return 'text-blue-600 font-bold';
      case 'A-':
        return 'text-blue-500 font-bold';
      case 'B+':
        return 'text-yellow-600 font-bold';
      default:
        return 'text-foreground font-bold';
    }
  };

  if (!studentData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Result Content */}
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button
            variant="outline"
            className="mb-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            ফিরে যান
          </Button>

          {/* Student Information Card */}
          <Card className="p-8 mb-8 shadow-large bg-white">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-primary mb-2">
                পরীক্ষার ফলাফল
              </h1>
              <p className="text-muted-foreground">
                রাজশাহী বিশ্ববিদ্যালয় - মার্কেটিং বিভাগ
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Student Photo */}
              <div className="text-center">
                <img
                  src={studentPhoto}
                  alt={studentDetails.name}
                  className="w-40 h-40 mx-auto rounded-lg shadow-medium object-cover border-4 border-primary/20"
                />
              </div>

              {/* Student Details */}
              <div className="md:col-span-2 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-muted-foreground">শিক্ষার্থীর নাম</p>
                    <p className="text-lg font-bold text-primary">{studentDetails.name}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-muted-foreground">শিক্ষার্থী আইডি</p>
                    <p className="text-lg font-semibold text-foreground">{studentDetails.studentId}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-muted-foreground">রোল নম্বর</p>
                    <p className="text-lg font-semibold text-foreground">{studentData.rollNumber}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-muted-foreground">রেজিস্ট্রেশন নম্বর</p>
                    <p className="text-lg font-semibold text-foreground">{studentData.registrationNumber}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-muted-foreground">সেশন</p>
                    <p className="text-lg font-semibold text-foreground">{studentData.session}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-muted-foreground">বিভাগ</p>
                    <p className="text-lg font-semibold text-foreground">{studentData.department}</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Results Table */}
          <Card className="p-8 shadow-large bg-white">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              কোর্স অনুযায়ী ফলাফল
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="text-left py-4 px-6 text-lg font-bold text-primary bg-accent/30">
                      কোর্স কোড
                    </th>
                    <th className="text-center py-4 px-6 text-lg font-bold text-primary bg-accent/30">
                      গ্রেড
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((result, index) => (
                    <tr 
                      key={index} 
                      className="border-b border-border hover:bg-accent/10 transition-colors"
                    >
                      <td className="py-4 px-6 text-lg font-semibold text-foreground">
                        {result.courseCode}
                      </td>
                      <td className={`py-4 px-6 text-center text-xl ${getGradeColor(result.grade)}`}>
                        {result.grade}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Summary */}
            <div className="mt-8 p-6 bg-gradient-primary text-white rounded-lg">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">ফলাফল সারসংক্ষেপ</h3>
                <p className="text-lg">
                  মোট কোর্স: {results.length} | A+ গ্রেড: {results.filter(r => r.grade === 'A+').length} | 
                  A গ্রেড: {results.filter(r => r.grade === 'A').length}
                </p>
                <p className="text-lg font-semibold mt-2">
                  🎉 অভিনন্দন! চমৎকার ফলাফল অর্জনের জন্য।
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Result;