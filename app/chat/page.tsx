import Chat from '@/app/components/Chat';

export const metadata = {
    title: 'AI Chat | Portfolio',
    description: 'Chat with AI about my work and experience',
};

export default function ChatPage() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-black via-slate-950 to-black pt-20 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            {/* Header with glassmorphism */}
            <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-8 border-b border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="max-w-4xl mx-auto space-y-2">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-black text-white">
                                Chat with AI
                            </h1>
                            <p className="text-sm text-blue-300">Powered by Claude</p>
                        </div>
                    </div>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                        Ask me anything about my projects, experience, or the technologies I specialize in. I&apos;m here to help!
                    </p>
                </div>
            </div>

            {/* Chat Container with glassmorphism */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="h-[600px] sm:h-[700px] lg:h-[800px] rounded-3xl border border-white/20 bg-white/5 backdrop-blur-2xl overflow-hidden shadow-2xl shadow-blue-500/10">
                    <Chat />
                </div>
            </div>

            {/* Tips Section with cards */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Card 1 */}
                    <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/20 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 shadow-lg">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center flex-shrink-0">
                                <span className="text-lg">💡</span>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-base font-semibold text-white">Try asking:</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    &quot;Tell me about your AI projects&quot; or &quot;What&apos;s your full tech stack?&quot;
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/20 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 shadow-lg">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 flex items-center justify-center flex-shrink-0">
                                <span className="text-lg">⚡</span>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-base font-semibold text-white">Real-time responses:</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    Instant answers using Anthropic&apos;s advanced Claude API
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500 mb-4">✨ Enhanced with:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                        <span className="px-3 py-1.5 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-white/20 transition-colors">
                            Glassmorphism
                        </span>
                        <span className="px-3 py-1.5 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-white/20 transition-colors">
                            Smooth Animations
                        </span>
                        <span className="px-3 py-1.5 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-white/20 transition-colors">
                            Apple Style
                        </span>
                        <span className="px-3 py-1.5 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-white/20 transition-colors">
                            Dark Theme
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
