import React from 'react';

const InterviewPanel = ({ 
  currentQuestion, 
  questionNumber, 
  totalQuestions,
  transcript,
  interimTranscript,
  isListening,
  lastFiller,
  fillerHistory,
  onStart,
  onStop,
  onNext,
  isProcessing,
  interviewComplete
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold text-gray-800">
            🎤 Voice Interview
          </h2>
          <span className="text-sm font-semibold text-gray-600">
            Question {questionNumber} of {totalQuestions}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>

      {!interviewComplete ? (
        <>
          {/* Current Question */}
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              Question {questionNumber}:
            </h3>
            <p className="text-gray-800">{currentQuestion?.question}</p>
          </div>

          {/* Voice Input Status */}
          <div className="bg-gray-50 p-4 rounded-lg mb-4 min-h-[120px]">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-gray-700">Your Answer:</h4>
              {isListening && (
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-red-600 font-semibold">Recording...</span>
                </div>
              )}
            </div>
            
            <div className="text-gray-800 min-h-[60px]">
              {transcript || interimTranscript ? (
                <>
                  <span className="font-medium">{transcript}</span>
                  {interimTranscript && (
                    <span className="text-gray-400 italic"> {interimTranscript}</span>
                  )}
                </>
              ) : (
                <span className="text-gray-400 italic">
                  {isListening ? 'Start speaking...' : 'Click "Start Answer" to begin'}
                </span>
              )}
            </div>
          </div>

          {/* Filler Phrase Display */}
          {lastFiller && (
            <div className="bg-green-50 border border-green-200 p-3 rounded-lg mb-4">
              <div className="flex items-center gap-2">
                <span className="text-lg">💬</span>
                <span className="text-green-800 font-medium italic">"{lastFiller}"</span>
              </div>
            </div>
          )}

          {/* Filler History Display */}
          {fillerHistory && fillerHistory.length > 0 && (
            <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                <span>🗨️</span>
                <span>All Generated Fillers ({fillerHistory.length})</span>
              </h4>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {fillerHistory.map((item, idx) => (
                  <div key={idx} className="bg-white p-2 rounded border border-purple-100">
                    <p className="text-sm text-purple-900 font-medium">"{item.text}"</p>
                    <p className="text-xs text-purple-600 mt-1">
                      Context: {item.chunk.substring(0, 50)}...
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Control Buttons */}
          <div className="flex gap-3">
            {!isListening ? (
              <button
                onClick={onStart}
                disabled={isProcessing}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isProcessing ? 'Processing...' : '🎤 Start Answer'}
              </button>
            ) : (
              <button
                onClick={onStop}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                ⏹️ Stop & Submit
              </button>
            )}
            
            {!isListening && transcript && (
              <button
                onClick={onNext}
                disabled={isProcessing}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Next Question →
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="text-center py-8">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Interview Complete!
          </h3>
          <p className="text-gray-600">
            Check your final assessment below
          </p>
        </div>
      )}
    </div>
  );
};

export default InterviewPanel;
