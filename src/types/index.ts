export type AuthType = 'No' | 'apiKey' | 'OAuth' | 'OAuth 2' | 'X-Mashape-Key' | 'User-Agent';
export type HTTPSSupport = 'Yes' | 'No';
export type CORSSupport = 'Yes' | 'No' | 'Unknown';

export type ResourceCategory =
  | 'Animals'
  | 'Anime'
  | 'Anti-Malware'
  | 'Art & Design'
  | 'Authentication & Authorization'
  | 'Blockchain'
  | 'Books'
  | 'Business'
  | 'Calendar'
  | 'Cloud Storage & File Sharing'
  | 'Continuous Integration'
  | 'Cryptocurrency'
  | 'Currency Exchange'
  | 'Data Validation'
  | 'Development'
  | 'Dictionaries'
  | 'Documents & Productivity'
  | 'Email'
  | 'Entertainment'
  | 'Environment'
  | 'Events'
  | 'Finance'
  | 'Food & Drink'
  | 'Games & Comics'
  | 'Geocoding'
  | 'Government'
  | 'Health'
  | 'Jobs'
  | 'Machine Learning'
  | 'Music'
  | 'News'
  | 'Open Data'
  | 'Open Source Projects'
  | 'Patent'
  | 'Personality'
  | 'Phone'
  | 'Photography'
  | 'Programming'
  | 'Science & Math'
  | 'Security'
  | 'Shopping'
  | 'Social'
  | 'Sports & Fitness'
  | 'Test Data'
  | 'Text Analysis'
  | 'Tracking'
  | 'Transportation'
  | 'URL Shorteners'
  | 'Vehicle'
  | 'Video'
  | 'Weather';

export interface Resource {
  id: string;
  name: string;
  description: string;
  category: ResourceCategory;
  auth: AuthType;
  https: HTTPSSupport;
  cors: CORSSupport;
  url: string;
}
