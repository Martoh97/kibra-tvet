import React, { useState, FormEvent } from "react";

interface FormData {
  fullNames: string;
  phoneNumber: string;
  email: string;
  gender: string;
}

const FormSubmission: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullNames: "",
    phoneNumber: "",
    email: "",
    gender: "",
  });

  const [status, setStatus] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await fetch(
        "https://api.sheetbest.com/sheets/4b128784-c8fb-4a18-ba7c-41ec462c05a4",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Failed to submit form");

      const data = await response.json();
      console.log("✅ Success:", data);
      setStatus("✅ Form submitted successfully!");
      setFormData({ fullNames: "", phoneNumber: "", email: "", gender: "" });
    } catch (error) {
      console.error(error);
      setStatus("❌ Error submitting form. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-2xl bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Submit Your Details
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Full Names</label>
          <input
            type="text"
            name="fullNames"
            value={formData.fullNames}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg"
          >
            <option value="">Select...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>

      {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
    </div>
  );
};

export default FormSubmission;
