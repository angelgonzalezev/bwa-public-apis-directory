import { ExternalLink, Lock, Shield, CheckCircle, XCircle, HelpCircle } from 'lucide-react';
import { Resource } from '../types';

interface ResourceCardProps {
  resource: Resource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  const getAuthIcon = (auth: string) => {
    if (auth === 'No') return <CheckCircle className="w-4 h-4 text-green-600" />;
    if (auth === 'apiKey') return <Lock className="w-4 h-4 text-blue-600" />;
    return <Shield className="w-4 h-4 text-orange-600" />;
  };

  const getStatusIcon = (status: string) => {
    if (status === 'Yes') return <CheckCircle className="w-4 h-4 text-green-600" />;
    if (status === 'No') return <XCircle className="w-4 h-4 text-red-600" />;
    return <HelpCircle className="w-4 h-4 text-gray-400" />;
  };

  return (
    <article className="bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden flex flex-col h-full group hover:shadow-lg">
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-3">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
            {resource.category}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading">
          {resource.name}
        </h3>

        <p className="text-sm text-gray-600 mb-4 flex-grow leading-relaxed">
          {resource.description}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-gray-500 font-medium">Auth:</span>
            <div className="flex items-center gap-1">
              {getAuthIcon(resource.auth)}
              <span className="font-medium text-gray-700">{resource.auth}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-gray-500 font-medium">HTTPS:</span>
              <div className="flex items-center gap-1">
                {getStatusIcon(resource.https)}
                <span className="font-medium text-gray-700">{resource.https}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="text-gray-500 font-medium">CORS:</span>
              <div className="flex items-center gap-1">
                {getStatusIcon(resource.cors)}
                <span className="font-medium text-gray-700">{resource.cors}</span>
              </div>
            </div>
          </div>
        </div>

        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
          aria-label={`Open ${resource.name} documentation`}
        >
          View API Documentation
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </article>
  );
}
