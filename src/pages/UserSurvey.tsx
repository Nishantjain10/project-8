import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';

interface FormData {
  name: string;
  location: string;
  expertise: string;
  email: string;
  linkedin: string;
  jobTitle: string;
}

const DataCollectionForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    location: '',
    expertise: '',
    email: '',
    linkedin: '',
    jobTitle: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    try {
      const response = await fetch('https://script.google.com/a/macros/teamtorc.com/s/AKfycbwcpfUKnXz3lxty6wGseCliUyjsyo5Hm2xFi8kZxBwj3SevJRwHUiLZ0RM6EK_Na4q8/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'no-cors'
      });

      // Log the response for debugging
      console.log('Response:', response);

      // Alert the user
      alert('Form submitted. Thank you for your input!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Info on You</CardTitle>
      </CardHeader>
      <CardContent>
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
            />
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Expertise</label>
            <input
              type="text"
              name="expertise"
              value={formData.expertise}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
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
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </CardContent>
    </Card>
  );
};

export default DataCollectionForm;