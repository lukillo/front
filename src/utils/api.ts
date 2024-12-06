type ApiResponse = {
    success: boolean;
    message: string;
  };
  
  async function callApi(endpoint: string, data: FormData): Promise<ApiResponse> {
    try {
      const response = await fetch(`https://api.example.com/${endpoint}`, {
        method: 'POST',
        body: data,
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('API call failed:', error);
      return { success: false, message: 'Failed to send data to the server.' };
    }
  }
  
  export async function sendSingleEmail(email: string): Promise<ApiResponse> {
    const formData = new FormData();
    formData.append('email', email);
    return callApi('add-email', formData);
  }
  
  export async function sendFiles(imageFile: File, csvFile: File): Promise<ApiResponse> {
    const formData = new FormData();
    formData.append('image', imageFile);
    formData.append('csv', csvFile);
    return callApi('upload-files', formData);
  }
  
  