import React from 'react';

const MetricsDisplay = ({ metrics }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">📊 Performance Metrics</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-sm text-blue-600 font-semibold">Load Time</div>
          <div className="text-2xl font-bold text-blue-800">
            {metrics.loadTime ? `${metrics.loadTime}ms` : '-'}
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-sm text-green-600 font-semibold">Avg Response</div>
          <div className="text-2xl font-bold text-green-800">
            {metrics.avgResponseTime ? `${metrics.avgResponseTime}ms` : '-'}
          </div>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="text-sm text-purple-600 font-semibold">Filler Count</div>
          <div className="text-2xl font-bold text-purple-800">
            {metrics.fillerCount || 0}
          </div>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg">
          <div className="text-sm text-orange-600 font-semibold">Questions</div>
          <div className="text-2xl font-bold text-orange-800">
            {metrics.questionsAnswered || 0} / {metrics.totalQuestions || 5}
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-indigo-50 p-3 rounded-lg">
          <div className="text-sm text-indigo-600 font-semibold">Last Response Time</div>
          <div className="text-lg font-bold text-indigo-800">
            {metrics.lastResponseTime ? `${metrics.lastResponseTime}ms` : '-'}
          </div>
        </div>

        <div className="bg-pink-50 p-3 rounded-lg">
          <div className="text-sm text-pink-600 font-semibold">Status</div>
          <div className="text-lg font-bold text-pink-800">
            {metrics.ollamaConnected ? '🟢 Connected' : '🔴 Offline'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsDisplay;
