import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';
import { Client, Databases, ID } from 'appwrite';

// This interface reflects exactly what Appwrite expects
interface AppwriteFormData {
  name: string;
  location: string;
  expertise: string;
  email: string;
  "social-link": string; // Required by Appwrite
  jobTitle: string;
}

// This is what we use in our form (with linkedin for UI consistency)
interface UIFormData {
  name: string;
  location: string;
  expertise: string;
  email: string;
  linkedin: string;
  jobTitle: string;
}

const DataCollectionForm: React.FC = () => {
  const [formData, setFormData] = useState<UIFormData>({
    name: '',
    location: '',
    expertise: '',
    email: '',
    linkedin: '',
    jobTitle: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  // Initialize Appwrite client
  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('67cefa6600232d73231d');

  const databases = new Databases(client);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Transform the form data to match Appwrite schema
    const appwriteData: AppwriteFormData = {
      name: formData.name,
      location: formData.location,
      expertise: formData.expertise,
      email: formData.email,
      "social-link": formData.linkedin, // Map linkedin to social-link
      jobTitle: formData.jobTitle
    };
    
    console.log('Form data being submitted to Appwrite:', appwriteData);

    try {
      // First try Google Sheets submission
      let googleSheetsSuccess = false;
      try {
        await fetch('https://script.google.com/macros/s/AKfycbwcpfUKnXz3lxty6wGseCliUyjsyo5Hm2xFi8kZxBwj3SevJRwHUiLZ0RM6EK_Na4q8/exec', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData), // Send original form data to Google Sheets
          mode: 'no-cors'
        });
        googleSheetsSuccess = true;
      } catch (googleError) {
        console.error('Google Sheets submission error:', googleError);
      }
      
      // Then try Appwrite submission
      let appwriteSuccess = false;
      try {
        const appwriteResponse = await databases.createDocument(
          '67cefa9300301c67b71a',  // Database ID
          '67cefa9a001ada16cad5',  // Collection ID
          ID.unique(),  // Use Appwrite's ID generator
          appwriteData  // Use the transformed data for Appwrite
        );
        console.log('Appwrite Response:', appwriteResponse);
        appwriteSuccess = true;
      } catch (appwriteError: any) {
        console.error('Appwrite submission error:', appwriteError);
        console.error('Appwrite error code:', appwriteError?.code);
        console.error('Appwrite error message:', appwriteError?.message);
        if (appwriteError?.response) {
          console.error('Appwrite error details:', appwriteError.response);
        }
      }
      
      // Set status message based on what worked
      if (googleSheetsSuccess && appwriteSuccess) {
        setSubmitStatus({
          success: true,
          message: 'Form successfully submitted!'
        });
        // Clear form after successful submission
        setFormData({
          name: '',
          location: '',
          expertise: '',
          email: '',
          linkedin: '',
          jobTitle: ''
        });
      } else if (googleSheetsSuccess) {
        setSubmitStatus({
          success: true,
          message: 'Form submitted to Google Sheets, but there was an issue with the database.'
        });
      } else if (appwriteSuccess) {
        setSubmitStatus({
          success: true,
          message: 'Form submitted to database, but there was an issue with Google Sheets.'
        });
      } else {
        setSubmitStatus({
          success: false,
          message: 'Unable to submit form to either system. Please try again later.'
        });
      }
    } catch (error) {
      console.error('General error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: 'There was an error submitting your form. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Let us get to know you just a bit better.</CardTitle>
      </CardHeader>
      <CardContent>
        {submitStatus && (
          <div className={`p-4 mb-4 rounded-md ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {submitStatus.message}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Area of Interest</label>
            <input
              type="text"
              name="expertise"
              value={formData.expertise}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <label className="block font-medium">LinkedIn Link</label>
            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
              disabled={isSubmitting}
            />
          </div>

          <button
            type="submit"
            className={`w-full py-2 px-4 rounded-md transition-colors ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </CardContent>
    </Card>
  );
};

export default DataCollectionForm;