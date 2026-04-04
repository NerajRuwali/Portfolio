'use client';

import { useRef, useState, useEffect } from 'react';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

export default function Chat() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Scroll to bottom when messages change. No repeated effect dependency on isLoading.
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!input.trim()) return;

        const userMessageText = input;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: userMessageText,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setError(null);
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessageText }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to get response');
            }

            const data = await response.json();

            const assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: data.reply,
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, assistantMessage]);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'An error occurred';
            setError(errorMessage);
            console.error('Chat error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full h-full flex flex-col bg-gradient-to-b from-slate-950 via-black to-slate-950 relative overflow-hidden">
            {/* Background gradient orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

            {/* Chat Messages Container */}
            <div
                ref={scrollContainerRef}
                className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-4"
            >
                {/* Empty State */}
                {messages.length === 0 && !error && (
                    <div className="h-full flex items-center justify-center">
                        <div className="text-center space-y-6 animate-fade-in">
                            <div className="flex justify-center">
                                <div className="relative w-24 h-24">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-2xl animate-pulse" />
                                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-xl shadow-blue-500/40">
                                        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-2">Hey there!</h3>
                                <p className="text-gray-400 text-base max-w-md mx-auto leading-relaxed">
                                    I&apos;m here to discuss my projects, experience, and tech stack. What would you like to know?
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 justify-center pt-3">
                                <button className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm text-gray-300 transition-all duration-200">
                                    💻 Tell me about your projects
                                </button>
                                <button className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm text-gray-300 transition-all duration-200">
                                    🛠️ Tech stack
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Messages */}
                {messages.map((message, index) => (
                    <div
                        key={message.id}
                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
                        style={{ animationDelay: `${index * 0.05}s` }}
                    >
                        <div className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''} max-w-2xl`}>
                            {/* Avatar */}
                            <div
                                className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center shadow-lg ${message.role === 'user'
                                    ? 'bg-gradient-to-br from-blue-600 to-blue-500 shadow-blue-500/20'
                                    : 'bg-gradient-to-br from-purple-600 to-indigo-600 shadow-purple-500/20'
                                    }`}
                            >
                                <svg
                                    className="w-5 h-5 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    {message.role === 'user' ? (
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                                    ) : (
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                                    )}
                                </svg>
                            </div>

                            {/* Message Bubble */}
                            <div
                                className={`px-5 py-3.5 rounded-2xl backdrop-blur-xl transition-all duration-300 hover:shadow-lg ${message.role === 'user'
                                    ? 'bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-br-none shadow-lg shadow-blue-600/30'
                                    : 'bg-white/8 border border-white/15 text-gray-100 rounded-bl-none hover:bg-white/12 hover:border-white/25'
                                    }`}
                            >
                                <p className="text-sm leading-relaxed whitespace-pre-wrap break-words font-normal">
                                    {message.content}
                                </p>
                                <span
                                    className={`text-xs mt-2 block opacity-70 ${message.role === 'user' ? 'text-blue-100' : 'text-gray-400'
                                        }`}
                                >
                                    {message.timestamp.toLocaleTimeString([], {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                    })}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Loading Indicator */}
                {isLoading && (
                    <div className="flex justify-start animate-fade-in-up">
                        <div className="flex gap-3 max-w-2xl">
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                                </svg>
                            </div>

                            <div className="bg-white/8 border border-white/15 rounded-2xl rounded-bl-none px-5 py-3.5 backdrop-blur-xl flex items-center gap-2">
                                <div className="flex gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0s' }} />
                                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
                                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0.4s' }} />
                                </div>
                                <span className="text-xs text-gray-400 ml-1.5">Thinking...</span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Error State */}
                {error && (
                    <div className="flex justify-center animate-fade-in-up">
                        <div className="bg-red-500/10 border border-red-500/30 rounded-2xl px-5 py-4 max-w-md backdrop-blur-xl">
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 w-5 h-5 text-red-400 mt-0.5">
                                    <svg fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-red-300 font-medium">Error</p>
                                    <p className="text-sm text-red-200/80 mt-0.5">{error}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Sticky Input Box */}
            <div className="px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8 pt-4 border-t border-white/5 backdrop-blur-xl bg-gradient-to-t from-black/40 to-transparent">
                <form onSubmit={handleSendMessage} className="max-w-2xl mx-auto space-y-3">
                    <div className="flex gap-3">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask me anything..."
                            disabled={isLoading}
                            className="flex-1 px-5 py-3.5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:bg-white/15 focus:border-white/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !input.trim()}
                            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-medium shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-sm"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,0.9 1.77946707,1.4429026 C0.994623095,2.0818008 0.837654326,3.0244052 1.15159189,3.97788954 L3.03521743,10.4188826 C3.03521743,10.5759799 3.34915502,10.7330773 3.50612381,10.7330773 L16.6915026,11.5185641 C16.6915026,11.5185641 17.1624089,11.5185641 17.1624089,12 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z" />
                            </svg>
                            Send
                        </button>
                    </div>
                    <p className="text-xs text-gray-500 text-center">Press Enter or click Send to chat</p>
                </form>
            </div>
        </div>
    );
}
