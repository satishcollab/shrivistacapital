import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';

const EnhancedForm = () => {
  const [formSection, setFormSection] = useState(1);
  const totalSections = 4;

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {[...Array(totalSections)].map((_, index) => (
            <div 
              key={index} 
              className={`flex items-center ${index < totalSections - 1 ? 'flex-1' : ''}`}
            >
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
                  ${formSection > index + 1 ? 'bg-green-500 text-white' : 
                    formSection === index + 1 ? 'bg-blue-600 text-white' : 
                    'bg-gray-200 text-gray-600'}`}
              >
                {index + 1}
              </div>
              {index < totalSections - 1 && (
                <div className="flex-1 mx-2">
                  <div className={`h-1 ${formSection > index + 1 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Personal Info</span>
          <span>Financial Health</span>
          <span>Investment Goals</span>
          <span>Risk Profile</span>
        </div>
      </div>

      {/* Form Sections */}
      <Card className="p-6 shadow-lg transition-all duration-300">
        <div className="space-y-6">
          {/* Required Fields Note */}
          <div className="flex items-center text-sm text-gray-600 mb-4">
            <AlertCircle className="w-4 h-4 mr-2" />
            <span>Fields marked with * are required</span>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {formSection > 1 && (
              <button
                onClick={() => setFormSection(prev => prev - 1)}
                className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
              >
                Previous
              </button>
            )}
            {formSection < totalSections ? (
              <button
                onClick={() => setFormSection(prev => prev + 1)}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg ml-auto transition-colors duration-200"
              >
                Next
              </button>
            ) : (
              <button
                className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg ml-auto transition-colors duration-200"
              >
                Submit Profile
              </button>
            )}
          </div>
        </div>
      </Card>

      {/* Form Submit Success Message */}
      <div className="mt-6 text-center text-sm text-gray-600">
        Your information is protected by bank-grade encryption
      </div>
    </div>
  );
};

export default EnhancedForm;