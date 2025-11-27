import { X } from 'lucide-react';
import { ResourceCategory } from '../types';

interface FilterSectionProps {
  selectedCategories: ResourceCategory[];
  onCategoryToggle: (category: ResourceCategory) => void;
  onClearFilters: () => void;
}

const CATEGORIES: ResourceCategory[] = [
  'Animals',
  'Anime',
  'Anti-Malware',
  'Art & Design',
  'Authentication & Authorization',
  'Blockchain',
  'Books',
  'Business',
  'Calendar',
  'Cloud Storage & File Sharing',
  'Cryptocurrency',
  'Development',
  'Finance',
  'Food & Drink',
  'Games & Comics',
  'Geocoding',
  'Health',
  'Machine Learning',
  'Music',
  'News',
  'Photography',
  'Science & Math',
  'Security',
  'Social',
  'Sports & Fitness',
  'Video',
  'Weather',
];

export default function FilterSection({
  selectedCategories,
  onCategoryToggle,
  onClearFilters,
}: FilterSectionProps) {
  const hasActiveFilters = selectedCategories.length > 0;

  return (
    <div className="w-full">
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 space-y-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900 font-heading">Filter by Category</h2>
          {hasActiveFilters && (
            <button
              onClick={onClearFilters}
              className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
              aria-label="Clear all filters"
            >
              <X className="w-4 h-4" />
              Clear all
            </button>
          )}
        </div>

        <div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryToggle(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  selectedCategories.includes(category)
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                }`}
                aria-pressed={selectedCategories.includes(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
