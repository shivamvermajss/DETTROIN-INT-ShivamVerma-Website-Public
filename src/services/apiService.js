/**
 * Placeholder API Service
 */
export const apiService = {
  fetchSchoolInfo: async () => {
    return { status: 'success', data: null };
  },
  submitAdmissionEnquiry: async (formData) => {
    return { status: 'submitted', data: formData };
  }
};
