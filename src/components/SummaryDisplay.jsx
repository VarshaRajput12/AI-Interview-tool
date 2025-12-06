import React from 'react';

const SummaryDisplay = ({ summaries, finalSummary }) => {
  if (summaries.length === 0 && !finalSummary) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">📝 Interview Summaries</h2>
      
      {/* Individual Q&A Summaries */}
      {summaries.length > 0 && (
        <div className="space-y-4 mb-6">
          <h3 className="text-lg font-semibold text-gray-700">Q&A Summaries</h3>
          {summaries.map((summary, idx) => (
            <div key={idx} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-gray-800">Question {idx + 1}</h4>
                <div className="flex gap-2">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    summary.clarity === 'good' ? 'bg-green-100 text-green-800' :
                    summary.clarity === 'fair' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    Clarity: {summary.clarity}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    summary.completeness === 'good' ? 'bg-green-100 text-green-800' :
                    summary.completeness === 'fair' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    Completeness: {summary.completeness}
                  </span>
                </div>
              </div>
              <p className="text-gray-700 mb-2">{summary.summary}</p>
              {summary.keyPoints && summary.keyPoints.length > 0 && (
                <div className="mt-2">
                  <p className="text-sm font-semibold text-gray-600 mb-1">Key Points:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {summary.keyPoints.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Final Summary */}
      {finalSummary && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-2 border-blue-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">🎯 Final Assessment</h3>
          
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-gray-700">Overall Score</h4>
              <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                finalSummary.overallScore === 'excellent' ? 'bg-green-500 text-white' :
                finalSummary.overallScore === 'good' ? 'bg-blue-500 text-white' :
                finalSummary.overallScore === 'fair' ? 'bg-yellow-500 text-white' :
                'bg-red-500 text-white'
              }`}>
                {finalSummary.overallScore?.toUpperCase()}
              </span>
            </div>
            <p className="text-gray-700">{finalSummary.overallSummary}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-green-700 mb-2">💪 Strengths</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {finalSummary.strengths?.map((strength, i) => (
                  <li key={i}>{strength}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-orange-700 mb-2">🎯 Areas for Improvement</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {finalSummary.areasForImprovement?.map((area, i) => (
                  <li key={i}>{area}</li>
                ))}
              </ul>
            </div>
          </div>

          {finalSummary.improvementPlan && (
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-purple-700 mb-3">📈 Improvement Plan</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="text-sm font-semibold text-gray-600 mb-1">Short-term Actions</h5>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {finalSummary.improvementPlan.shortTerm?.map((action, i) => (
                      <li key={i}>{action}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-gray-600 mb-1">Long-term Actions</h5>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {finalSummary.improvementPlan.longTerm?.map((action, i) => (
                      <li key={i}>{action}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SummaryDisplay;
